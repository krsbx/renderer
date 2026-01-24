import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUTextureSamplerBinding {
  public static readonly BYTE_SIZE = 16;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, GPUTextureSamplerBinding.BYTE_SIZE);
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

  public get texture() {
    const addr = this.$view.getBigUint64(ByteOffset.texture, true);

    return Number(addr) as Pointer;
  }

  public set texture(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.texture, BigInt(value), true);
  }

  public get sampler() {
    const addr = this.$view.getBigUint64(ByteOffset.sampler, true);

    return Number(addr) as Pointer;
  }

  public set sampler(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.sampler, BigInt(value), true);
  }
}
