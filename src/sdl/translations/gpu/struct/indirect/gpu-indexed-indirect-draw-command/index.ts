import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class GPUIndexedIndirectDrawCommand extends BaseStruct {
  public static override readonly BYTE_SIZE = 20;

  public get indicesCount() {
    return this.$view.getUint32(ByteOffset.num_indices, true);
  }

  public set indicesCount(value: number) {
    this.$view.setUint32(ByteOffset.num_indices, value, true);
  }

  public get instanceCount() {
    return this.$view.getUint32(ByteOffset.num_instances, true);
  }

  public set instanceCount(value: number) {
    this.$view.setUint32(ByteOffset.num_instances, value, true);
  }

  public get firstIndex() {
    return this.$view.getUint32(ByteOffset.first_index, true);
  }

  public set firstIndex(value: number) {
    this.$view.setUint32(ByteOffset.first_index, value, true);
  }

  public get vertexOffset() {
    return this.$view.getInt32(ByteOffset.vertex_offset, true);
  }

  public set vertexOffset(value: number) {
    this.$view.setInt32(ByteOffset.vertex_offset, value, true);
  }

  public get firstInstance() {
    return this.$view.getUint32(ByteOffset.first_instance, true);
  }

  public set firstInstance(value: number) {
    this.$view.setUint32(ByteOffset.first_instance, value, true);
  }
}
