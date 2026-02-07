import { BaseStruct } from '@basestruct';
import type { UInt32 } from '@/types/primitive';
import { ByteOffset } from './constant';

export class GPUIndirectDrawCommand extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get verticesCount() {
    return this.$view.getUint32(ByteOffset.num_vertices, true) as UInt32;
  }

  public set verticesCount(value: UInt32) {
    this.$view.setUint32(ByteOffset.num_vertices, value, true);
  }

  public get instancesCount() {
    return this.$view.getUint32(ByteOffset.num_instances, true) as UInt32;
  }

  public set instancesCount(value: UInt32) {
    this.$view.setUint32(ByteOffset.num_instances, value, true);
  }

  public get firstVertex() {
    return this.$view.getUint32(ByteOffset.first_vertex, true) as UInt32;
  }

  public set firstVertex(value: UInt32) {
    this.$view.setUint32(ByteOffset.first_vertex, value, true);
  }

  public get firstInstance() {
    return this.$view.getUint32(ByteOffset.first_instance, true) as UInt32;
  }

  public set firstInstance(value: UInt32) {
    this.$view.setUint32(ByteOffset.first_instance, value, true);
  }
}
