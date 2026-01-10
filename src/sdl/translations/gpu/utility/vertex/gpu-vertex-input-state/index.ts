import { type Pointer, ptr, toArrayBuffer } from 'bun:ffi';
import { GPUVertexAttribute } from '../gpu-vertex-attribute';
import { GPUVertexBufferDescription } from '../gpu-vertex-buffer-description';
import { ByteOffset } from './constant';

export class GPUVertexInputState {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public $vertexBufferDescBuffer: Uint8Array | null = null;
  public $vertexAttributesBuffer: Uint8Array | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
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

  public get vertex_buffer_descriptions() {
    const num_vertex_buffers = this.num_vertex_buffers;
    const vertexBufferDescAddr = this.$view.getBigUint64(
      ByteOffset.vertex_buffer_descriptions,
      true
    );

    if (
      !num_vertex_buffers ||
      !vertexBufferDescAddr ||
      vertexBufferDescAddr === 0n
    )
      return [];

    const vertexBufferDesc: GPUVertexBufferDescription[] = [];
    const vertexBufferDescPtr = Number(vertexBufferDescAddr) as Pointer;

    for (let i = 0; i < num_vertex_buffers; i++) {
      const offset = i * GPUVertexBufferDescription.BYTE_SIZE;
      const vertexPtr = (vertexBufferDescPtr + offset) as Pointer;

      if (!vertexPtr) continue;

      vertexBufferDesc.push(new GPUVertexBufferDescription(vertexPtr));
    }

    return vertexBufferDesc;
  }

  public set vertex_buffer_descriptions(value: GPUVertexBufferDescription[]) {
    this.num_vertex_buffers = value.length;

    if (this.num_vertex_buffers === 0) {
      this.$view.setBigUint64(ByteOffset.vertex_buffer_descriptions, 0n, true);
      this.$vertexBufferDescBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      GPUVertexBufferDescription.BYTE_SIZE * this.num_vertex_buffers
    );

    for (let i = 0; i < this.num_vertex_buffers; i++) {
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

  public get num_vertex_buffers() {
    return this.$view.getUint32(ByteOffset.num_vertex_buffers, true);
  }

  public set num_vertex_buffers(value: number) {
    this.$view.setUint32(ByteOffset.num_vertex_buffers, value, true);
  }

  public get vertex_attributes() {
    const num_vertex_attributes = this.num_vertex_attributes;
    const vertexAttributesAddr = this.$view.getBigUint64(
      ByteOffset.vertex_attributes,
      true
    );

    if (
      !num_vertex_attributes ||
      !vertexAttributesAddr ||
      vertexAttributesAddr === 0n
    )
      return [];

    const vertexAttributes: GPUVertexAttribute[] = [];
    const vertexAttributesPtr = Number(vertexAttributesAddr) as Pointer;

    for (let i = 0; i < num_vertex_attributes; i++) {
      const offset = i * GPUVertexAttribute.BYTE_SIZE;
      const vertexPtr = (vertexAttributesPtr + offset) as Pointer;

      vertexAttributes.push(new GPUVertexAttribute(vertexPtr));
    }

    return vertexAttributes;
  }

  public set vertex_attributes(value: GPUVertexAttribute[]) {
    this.num_vertex_attributes = value.length;

    if (this.num_vertex_attributes === 0) {
      this.$view.setBigUint64(ByteOffset.vertex_attributes, 0n, true);
      this.$vertexAttributesBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      GPUVertexAttribute.BYTE_SIZE * this.num_vertex_attributes
    );

    for (let i = 0; i < this.num_vertex_attributes; i++) {
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

  public get num_vertex_attributes() {
    return this.$view.getUint32(ByteOffset.num_vertex_attributes, true);
  }

  public set num_vertex_attributes(value: number) {
    this.$view.setUint32(ByteOffset.num_vertex_attributes, value, true);
  }
}
