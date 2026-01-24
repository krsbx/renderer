import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class Image {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  // Cached data array
  private $data: number[] | null = null;
  private $dataMemory: Uint8Array | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Image.BYTE_SIZE);
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
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get data_ptr() {
    const dataAddr = this.$view.getBigUint64(ByteOffset.data, true);
    const dataPtr = Number(dataAddr) as Pointer;

    return dataPtr;
  }

  public set data_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.data, BigInt(value as number), true);
    this.$data = null;
    this.$dataMemory = null;
  }

  public get data() {
    const ptr = this.data_ptr;
    if (!ptr) return null;
    if (this.$data) return this.$data;

    // Calculate byte size based on format (approximation using 4 bytes per pixel for RGBA)
    // The actual size depends on the pixel format, but we use a conservative estimate
    const length = this.width * this.height * 4;
    const buffer = toArrayBuffer(ptr, 0, length);
    this.$dataMemory = new Uint8Array(buffer);

    this.$data = new Proxy(new Array(length), {
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
        return this.$dataMemory![index];
      },
      set: (_, prop, value) => {
        const index = Number(prop);
        if (Number.isNaN(index) || index < 0 || index >= length) return false;
        this.$dataMemory![index] = value;
        return true;
      },
    }) as never;

    return this.$data;
  }

  public get width() {
    return this.$view.getInt32(ByteOffset.width, true);
  }

  public set width(value: number) {
    this.$view.setInt32(ByteOffset.width, value, true);
  }

  public get height() {
    return this.$view.getInt32(ByteOffset.height, true);
  }

  public set height(value: number) {
    this.$view.setInt32(ByteOffset.height, value, true);
  }

  public get mipmaps() {
    return this.$view.getInt32(ByteOffset.mipmaps, true);
  }

  public set mipmaps(value: number) {
    this.$view.setInt32(ByteOffset.mipmaps, value, true);
  }

  public get format() {
    return this.$view.getInt32(ByteOffset.format, true);
  }

  public set format(value: number) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }
}
