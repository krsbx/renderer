import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUIndirectDispatchCommand {
  public static readonly BYTE_SIZE = 12;

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
        GPUIndirectDispatchCommand.BYTE_SIZE
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

  public static create(data?: StructInit<GPUIndirectDispatchCommand>) {
    const instance = new GPUIndirectDispatchCommand(
      GPUIndirectDispatchCommand.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get groupCountX() {
    return this.$view.getUint32(ByteOffset.groupcount_x, true);
  }

  public set groupCountX(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_x, value, true);
  }

  public get groupCountY() {
    return this.$view.getUint32(ByteOffset.groupcount_y, true);
  }

  public set groupCountY(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_y, value, true);
  }

  public get groupCountZ() {
    return this.$view.getUint32(ByteOffset.groupcount_z, true);
  }

  public set groupCountZ(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_z, value, true);
  }
}
