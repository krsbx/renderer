import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class GPUIndirectDrawCommand extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get verticesCount() {
    return this.$view.getUint32(ByteOffset.num_vertices, true);
  }

  public set verticesCount(value: number) {
    this.$view.setUint32(ByteOffset.num_vertices, value, true);
  }

  public get instancesCount() {
    return this.$view.getUint32(ByteOffset.num_instances, true);
  }

  public set instancesCount(value: number) {
    this.$view.setUint32(ByteOffset.num_instances, value, true);
  }

  public get firstVertex() {
    return this.$view.getUint32(ByteOffset.first_vertex, true);
  }

  public set firstVertex(value: number) {
    this.$view.setUint32(ByteOffset.first_vertex, value, true);
  }

  public get firstInstance() {
    return this.$view.getUint32(ByteOffset.first_instance, true);
  }

  public set firstInstance(value: number) {
    this.$view.setUint32(ByteOffset.first_instance, value, true);
  }
}
