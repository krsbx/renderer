import { BaseStruct } from '@/utility/base-struct';
import type { GPUVertexElementFormat } from '../../../../../ffi/gpu/constant';
import { ByteOffset } from './constant';

export class GPUVertexAttribute extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get location() {
    return this.$view.getUint32(ByteOffset.location, true);
  }

  public set location(value: number) {
    this.$view.setUint32(ByteOffset.location, value, true);
  }

  public get bufferSlot() {
    return this.$view.getUint32(ByteOffset.buffer_slot, true);
  }

  public set bufferSlot(value: number) {
    this.$view.setUint32(ByteOffset.buffer_slot, value, true);
  }

  public get format() {
    return this.$view.getInt32(
      ByteOffset.format,
      true
    ) as GPUVertexElementFormat;
  }

  public set format(value: GPUVertexElementFormat) {
    this.$view.setInt32(ByteOffset.format, value, true);
  }

  public get offset() {
    return this.$view.getUint32(ByteOffset.offset, true);
  }

  public set offset(value: number) {
    this.$view.setUint32(ByteOffset.offset, value, true);
  }
}
