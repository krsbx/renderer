import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUStorageTextureReadWriteBinding {
  public static readonly BYTE_SIZE = 24;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        GPUStorageTextureReadWriteBinding.BYTE_SIZE
      );
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

  public static create(data?: StructInit<GPUStorageTextureReadWriteBinding>) {
    const instance = new GPUStorageTextureReadWriteBinding(
      GPUStorageTextureReadWriteBinding.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get texture() {
    const addr = this.$view.getBigUint64(ByteOffset.texture, true);

    return Number(addr) as Pointer;
  }

  public set texture(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.texture, BigInt(value), true);
  }

  public get mipLevel() {
    return this.$view.getUint32(ByteOffset.mip_level, true);
  }

  public set mipLevel(value: number) {
    this.$view.setUint32(ByteOffset.mip_level, value, true);
  }

  public get layer() {
    return this.$view.getUint32(ByteOffset.layer, true);
  }

  public set layer(value: number) {
    this.$view.setUint32(ByteOffset.layer, value, true);
  }

  public get cycle() {
    return this.$view.getUint8(ByteOffset.cycle) === 1;
  }

  public set cycle(value: boolean) {
    this.$view.setInt8(ByteOffset.cycle, value ? 1 : 0);
  }
}
