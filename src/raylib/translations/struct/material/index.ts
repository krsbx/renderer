import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Shader } from '../shader';
import { MaterialMap } from '../material-map';
import { ByteOffset } from './constant';

// raylib defines MAX_MATERIAL_MAPS = 12
const MAX_MATERIAL_MAPS = 12;

export class Material {
  public static readonly BYTE_SIZE = 40;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly shader: Shader;

  private $params: [number, number, number, number] | null = null;
  private $maps: MaterialMap[] | null = null;
  private $mapsMemory: Uint8Array | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Material.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.shader = new Shader(
      this.$memory.subarray(
        ByteOffset.shader,
        ByteOffset.shader + Shader.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public get maps_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.maps, true)) as Pointer;
  }

  public set maps_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.maps, BigInt(value as number), true);
    this.$maps = null;
    this.$mapsMemory = null;
  }

  public get maps() {
    if (this.$maps) return this.$maps;

    const ptr = this.maps_ptr;
    if (!ptr) return null;

    const totalSize = MAX_MATERIAL_MAPS * MaterialMap.BYTE_SIZE;
    const buffer = toArrayBuffer(ptr, 0, totalSize);
    this.$mapsMemory = new Uint8Array(buffer);

    this.$maps = new Proxy(new Array(MAX_MATERIAL_MAPS), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= MAX_MATERIAL_MAPS) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = index * MaterialMap.BYTE_SIZE;
        return new MaterialMap(
          this.$mapsMemory!.subarray(offset, offset + MaterialMap.BYTE_SIZE)
        );
      },
      set: () => false,
    }) as never;

    return this.$maps;
  }

  public get params() {
    if (this.$params) return this.$params;

    const length = 4;

    this.$params = new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return this.$view.getFloat32(ByteOffset.params + index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        this.$view.setFloat32(ByteOffset.params + index * 4, value, true);
        return true;
      },
    }) as never;

    return this.$params;
  }
}
