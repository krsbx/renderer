import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

// raylib defines MAX_SHADER_LOCATIONS = 32
const MAX_SHADER_LOCATIONS = 32;

export class Shader {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  private $locs: number[] | null = null;
  private $locsView: DataView | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Shader.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get id() {
    return this.$view.getUint32(ByteOffset.id, true);
  }

  public set id(value: number) {
    this.$view.setUint32(ByteOffset.id, value, true);
  }

  public get locs_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.locs, true)) as Pointer;
  }

  public set locs_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.locs, BigInt(value as number), true);
    this.$locs = null;
    this.$locsView = null;
  }

  public get locs() {
    if (this.$locs) return this.$locs;

    const ptr = this.locs_ptr;
    if (!ptr) return null;

    const buffer = toArrayBuffer(ptr, 0, MAX_SHADER_LOCATIONS * 4);
    this.$locsView = new DataView(buffer);

    this.$locs = new Proxy(new Array(MAX_SHADER_LOCATIONS), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= MAX_SHADER_LOCATIONS) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return this.$locsView!.getInt32(index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= MAX_SHADER_LOCATIONS) {
          return false;
        }

        this.$locsView!.setInt32(index * 4, value, true);
        return true;
      },
    }) as never;

    return this.$locs;
  }
}
