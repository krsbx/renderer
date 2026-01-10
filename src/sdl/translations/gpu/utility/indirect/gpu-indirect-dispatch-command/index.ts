import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUIndirectDispatchCommand {
  public static readonly BYTE_SIZE = 12;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
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

  public get groupcount_x() {
    return this.$view.getUint32(ByteOffset.groupcount_x, true);
  }

  public set groupcount_x(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_x, value, true);
  }

  public get groupcount_y() {
    return this.$view.getUint32(ByteOffset.groupcount_y, true);
  }

  public set groupcount_y(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_y, value, true);
  }

  public get groupcount_z() {
    return this.$view.getUint32(ByteOffset.groupcount_z, true);
  }

  public set groupcount_z(value: number) {
    this.$view.setUint32(ByteOffset.groupcount_z, value, true);
  }
}
