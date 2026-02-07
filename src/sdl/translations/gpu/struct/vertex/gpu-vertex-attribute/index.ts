import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import type { GPUVertexElementFormat } from '@sdl/ffi/constant/gpu';
import { ByteOffset } from './constant';

export class GPUVertexAttribute extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get location() {
    return this.$view.getUint32(ByteOffset.location, true) as UInt32;
  }

  public set location(value: UInt32) {
    this.$view.setUint32(ByteOffset.location, value, true);
  }

  public get bufferSlot() {
    return this.$view.getUint32(ByteOffset.buffer_slot, true) as UInt32;
  }

  public set bufferSlot(value: UInt32) {
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
    return this.$view.getUint32(ByteOffset.offset, true) as UInt32;
  }

  public set offset(value: UInt32) {
    this.$view.setUint32(ByteOffset.offset, value, true);
  }
}
