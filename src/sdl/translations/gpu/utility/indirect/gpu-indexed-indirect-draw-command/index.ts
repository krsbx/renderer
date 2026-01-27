import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class GPUIndexedIndirectDrawCommand {
  public static readonly BYTE_SIZE = 20;

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
        GPUIndexedIndirectDrawCommand.BYTE_SIZE
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

  public static create(data?: StructInit<GPUIndexedIndirectDrawCommand>) {
    const instance = new GPUIndexedIndirectDrawCommand(
      GPUIndexedIndirectDrawCommand.allocMemory()
    );

    if (data) Object.assign(instance, data);

    return instance;
  }

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
