import { BaseStruct } from '@basestruct';
import { CStruct } from '@utility/cstruct';
import type { Pointer } from 'bun:ffi';
import { GPUVertexAttribute } from '../gpu-vertex-attribute';
import { GPUVertexBufferDescription } from '../gpu-vertex-buffer-description';
import { ByteOffset } from './constant';

export class GPUVertexInputState extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public $vertexBufferDescBuffer: Uint8Array | null = null;
  public $vertexAttributesBuffer: Uint8Array | null = null;

  public get vertexBufferDescriptions() {
    if (!this.vertexBufferCount) return [];

    const vertexBufferDescAddr = this.$view.getBigUint64(
      ByteOffset.vertex_buffer_descriptions,
      true
    );

    if (!vertexBufferDescAddr || vertexBufferDescAddr === 0n) return [];

    const vertexBufferDescPtr = Number(vertexBufferDescAddr) as Pointer;

    return CStruct.readArray(
      GPUVertexBufferDescription,
      vertexBufferDescPtr,
      this.vertexBufferCount
    );
  }

  public set vertexBufferDescriptions(value: GPUVertexBufferDescription[]) {
    this.vertexBufferCount = value.length;

    if (this.vertexBufferCount === 0) {
      this.$view.setBigUint64(ByteOffset.vertex_buffer_descriptions, 0n, true);
      this.$vertexBufferDescBuffer = null;
      return;
    }

    const { address, buffer } = CStruct.writeArray(
      value,
      GPUVertexBufferDescription.BYTE_SIZE
    );

    this.$vertexBufferDescBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.vertex_buffer_descriptions,
      BigInt(address),
      true
    );
  }

  public get vertexBufferCount() {
    return this.$view.getUint32(ByteOffset.num_vertex_buffers, true);
  }

  public set vertexBufferCount(value: number) {
    this.$view.setUint32(ByteOffset.num_vertex_buffers, value, true);
  }

  public get vertexAttributes() {
    if (!this.vertexAttributeCount) return [];

    const vertexAttributesAddr = this.$view.getBigUint64(
      ByteOffset.vertex_attributes,
      true
    );

    if (!vertexAttributesAddr || vertexAttributesAddr === 0n) return [];

    const vertexAttributesPtr = Number(vertexAttributesAddr) as Pointer;

    return CStruct.readArray(
      GPUVertexAttribute,
      vertexAttributesPtr,
      this.vertexAttributeCount
    );
  }

  public set vertexAttributes(value: GPUVertexAttribute[]) {
    this.vertexAttributeCount = value.length;

    if (this.vertexAttributeCount === 0) {
      this.$view.setBigUint64(ByteOffset.vertex_attributes, 0n, true);
      this.$vertexAttributesBuffer = null;
      return;
    }

    const { address, buffer } = CStruct.writeArray(
      value,
      GPUVertexAttribute.BYTE_SIZE
    );

    this.$vertexAttributesBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.vertex_attributes,
      BigInt(address),
      true
    );
  }

  public get vertexAttributeCount() {
    return this.$view.getUint32(ByteOffset.num_vertex_attributes, true);
  }

  public set vertexAttributeCount(value: number) {
    this.$view.setUint32(ByteOffset.num_vertex_attributes, value, true);
  }
}
