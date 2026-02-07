import { BaseStruct } from '@basestruct';
import type { Int32, UInt32 } from '@/types/primitive';
import { ByteOffset } from './constant';

export class GPUIndexedIndirectDrawCommand extends BaseStruct {
  public static override readonly BYTE_SIZE = 20;

  public get indicesCount() {
    return this.$view.getUint32(ByteOffset.num_indices, true) as UInt32;
  }

  public set indicesCount(value: UInt32) {
    this.$view.setUint32(ByteOffset.num_indices, value, true);
  }

  public get instanceCount() {
    return this.$view.getUint32(ByteOffset.num_instances, true) as UInt32;
  }

  public set instanceCount(value: UInt32) {
    this.$view.setUint32(ByteOffset.num_instances, value, true);
  }

  public get firstIndex() {
    return this.$view.getUint32(ByteOffset.first_index, true) as UInt32;
  }

  public set firstIndex(value: UInt32) {
    this.$view.setUint32(ByteOffset.first_index, value, true);
  }

  public get vertexOffset() {
    return this.$view.getInt32(ByteOffset.vertex_offset, true) as Int32;
  }

  public set vertexOffset(value: Int32) {
    this.$view.setInt32(ByteOffset.vertex_offset, value, true);
  }

  public get firstInstance() {
    return this.$view.getUint32(ByteOffset.first_instance, true) as UInt32;
  }

  public set firstInstance(value: UInt32) {
    this.$view.setUint32(ByteOffset.first_instance, value, true);
  }
}
