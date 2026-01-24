import { type Pointer, ptr, toArrayBuffer } from 'bun:ffi';
import { GPUVertexAttribute } from '../gpu-vertex-attribute';
import { GPUVertexBufferDescription } from '../gpu-vertex-buffer-description';
import { ByteOffset } from './constant';

export class GPUVertexInputState {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public $vertexBufferDescBuffer: Uint8Array | null = null;
  public $vertexAttributesBuffer: Uint8Array | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, GPUVertexInputState.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = ptr(buffer);
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
    this.$vertexBufferDescBuffer = null;
    this.$vertexAttributesBuffer = null;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get vertexBufferDescriptions() {
    const vertexBufferCount = this.vertexBufferCount;
    const vertexBufferDescAddr = this.$view.getBigUint64(
      ByteOffset.vertex_buffer_descriptions,
      true
    );

    if (
      !vertexBufferCount ||
      !vertexBufferDescAddr ||
      vertexBufferDescAddr === 0n
    )
      return [];

    const vertexBufferDesc: GPUVertexBufferDescription[] = [];
    const vertexBufferDescPtr = Number(vertexBufferDescAddr) as Pointer;

    for (let i = 0; i < vertexBufferCount; i++) {
      const offset = i * GPUVertexBufferDescription.BYTE_SIZE;
      const vertexPtr = (vertexBufferDescPtr + offset) as Pointer;

      if (!vertexPtr) continue;

      vertexBufferDesc.push(new GPUVertexBufferDescription(vertexPtr));
    }

    return vertexBufferDesc;
  }

  public set vertexBufferDescriptions(value: GPUVertexBufferDescription[]) {
    this.vertexBufferCount = value.length;

    if (this.vertexBufferCount === 0) {
      this.$view.setBigUint64(ByteOffset.vertex_buffer_descriptions, 0n, true);
      this.$vertexBufferDescBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      GPUVertexBufferDescription.BYTE_SIZE * this.vertexBufferCount
    );

    for (let i = 0; i < this.vertexBufferCount; i++) {
      const offset = i * GPUVertexBufferDescription.BYTE_SIZE;

      buffer.set(value[i]!.$memory, offset);
    }

    this.$vertexBufferDescBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.vertex_buffer_descriptions,
      BigInt(ptr(this.$vertexBufferDescBuffer)),
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
    const vertexAttributeCount = this.vertexAttributeCount;
    const vertexAttributesAddr = this.$view.getBigUint64(
      ByteOffset.vertex_attributes,
      true
    );

    if (
      !vertexAttributeCount ||
      !vertexAttributesAddr ||
      vertexAttributesAddr === 0n
    )
      return [];

    const vertexAttributes: GPUVertexAttribute[] = [];
    const vertexAttributesPtr = Number(vertexAttributesAddr) as Pointer;

    for (let i = 0; i < vertexAttributeCount; i++) {
      const offset = i * GPUVertexAttribute.BYTE_SIZE;
      const vertexPtr = (vertexAttributesPtr + offset) as Pointer;

      vertexAttributes.push(new GPUVertexAttribute(vertexPtr));
    }

    return vertexAttributes;
  }

  public set vertexAttributes(value: GPUVertexAttribute[]) {
    this.vertexAttributeCount = value.length;

    if (this.vertexAttributeCount === 0) {
      this.$view.setBigUint64(ByteOffset.vertex_attributes, 0n, true);
      this.$vertexAttributesBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      GPUVertexAttribute.BYTE_SIZE * this.vertexAttributeCount
    );

    for (let i = 0; i < this.vertexAttributeCount; i++) {
      const offset = i * GPUVertexAttribute.BYTE_SIZE;

      buffer.set(value[i]!.$memory, offset);
    }

    this.$vertexAttributesBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.vertex_attributes,
      BigInt(ptr(this.$vertexAttributesBuffer)),
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
