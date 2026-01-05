import { ptr, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { GPUVertexAttribute } from './gpu-vertex-attribute';
import { GPUVertexBufferDescription } from './gpu-vertex-buffer-description';
import type { RawGPUVertexInputState } from './types';

export class GPUVertexInputState implements RawGPUVertexInputState {
  public static readonly BYTE_SIZE = 32;

  public vertex_buffer_descriptions: GPUVertexBufferDescription[];
  public num_vertex_buffers: number;
  public vertex_attributes: GPUVertexAttribute[];
  public num_vertex_attributes: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUVertexInputState) {
    this.vertex_buffer_descriptions = options.vertex_buffer_descriptions;
    this.num_vertex_buffers = options.num_vertex_buffers;
    this.vertex_attributes = options.vertex_attributes;
    this.num_vertex_attributes = options.num_vertex_attributes;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = GPUVertexInputState.allocMemory();
    const view = new DataView(buffer.buffer);

    const vertexBuffers = new Uint8Array(
      this.num_vertex_buffers * GPUVertexBufferDescription.BYTE_SIZE
    );
    const vertexAttributes = new Uint8Array(
      this.num_vertex_attributes * GPUVertexAttribute.BYTE_SIZE
    );

    for (let i = 0; i < this.num_vertex_buffers; i++) {
      const offset = i * GPUVertexBufferDescription.BYTE_SIZE;

      const vertexBuffer = this.vertex_buffer_descriptions[i];

      if (!vertexBuffer) continue;

      vertexBuffers.set(vertexBuffer.toMemory(), offset);
    }

    for (let i = 0; i < this.num_vertex_attributes; i++) {
      const offset = i * GPUVertexAttribute.BYTE_SIZE;

      const vertexAttribute = this.vertex_attributes[i];

      if (!vertexAttribute) continue;

      vertexAttributes.set(vertexAttribute.toMemory(), offset);
    }

    view.setBigUint64(0, BigInt(ptr(vertexBuffers.buffer)), true);
    view.setUint32(8, this.num_vertex_buffers, true);
    view.setBigUint64(16, BigInt(ptr(vertexAttributes.buffer)), true);
    view.setUint32(24, this.num_vertex_attributes, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const vertexBufferDescriptionsPtr = read.ptr(pointer, 0);
    const num_vertex_buffers = read.u32(pointer, 8);
    const vertexAttributesPtr = read.ptr(pointer, 16);
    const num_vertex_attributes = read.u32(pointer, 24);

    const vertex_buffer_descriptions: GPUVertexBufferDescription[] = [];
    const vertex_attributes: GPUVertexAttribute[] = [];

    if (vertexBufferDescriptionsPtr && num_vertex_buffers > 0) {
      for (let i = 0; i < num_vertex_buffers; i++) {
        const offset = BigInt(i) * BigInt(GPUVertexBufferDescription.BYTE_SIZE);
        const vertexBufferDescriptionPtr = (BigInt(
          vertexBufferDescriptionsPtr
        ) + offset) as unknown as Pointer | null;

        if (!vertexBufferDescriptionPtr) continue;

        vertex_buffer_descriptions.push(
          GPUVertexBufferDescription.fromPointer(
            vertexBufferDescriptionPtr,
            sdl
          )
        );
      }
    }

    for (let i = 0; i < num_vertex_attributes; i++) {
      const offset = BigInt(i) * BigInt(GPUVertexAttribute.BYTE_SIZE);
      const vertexAttributePtr = (BigInt(vertexAttributesPtr) +
        offset) as unknown as Pointer | null;

      if (!vertexAttributePtr) continue;

      vertex_attributes.push(
        GPUVertexAttribute.fromPointer(vertexAttributePtr, sdl)
      );
    }

    const result = {
      vertex_buffer_descriptions,
      num_vertex_buffers,
      vertex_attributes,
      num_vertex_attributes,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUVertexInputState;

    return new GPUVertexInputState(result);
  }

  public static fromMemory(data: Uint8Array, sdl: BaseSDL) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const vertexBufferDescriptionsPtr = view.getBigUint64(
      0,
      true
    ) as unknown as Pointer;
    const num_vertex_buffers = view.getUint32(8, true);
    const vertexAttributesPtr = view.getBigUint64(
      16,
      true
    ) as unknown as Pointer;
    const num_vertex_attributes = view.getUint32(24, true);

    const vertex_buffer_descriptions: GPUVertexBufferDescription[] = [];
    const vertex_attributes: GPUVertexAttribute[] = [];

    if (vertexBufferDescriptionsPtr && num_vertex_buffers > 0) {
      for (let i = 0; i < num_vertex_buffers; i++) {
        const offset = BigInt(i) * BigInt(GPUVertexBufferDescription.BYTE_SIZE);
        const vertexBufferDescriptionPtr = (BigInt(
          vertexBufferDescriptionsPtr
        ) + offset) as unknown as Pointer | null;

        if (!vertexBufferDescriptionPtr) continue;

        vertex_buffer_descriptions.push(
          GPUVertexBufferDescription.fromPointer(
            vertexBufferDescriptionPtr,
            sdl
          )
        );
      }
    }

    if (vertexAttributesPtr && num_vertex_attributes > 0) {
      for (let i = 0; i < num_vertex_attributes; i++) {
        const offset = BigInt(i) * BigInt(GPUVertexAttribute.BYTE_SIZE);
        const vertexAttributePtr = (BigInt(vertexAttributesPtr) +
          offset) as unknown as Pointer | null;

        if (!vertexAttributePtr) continue;

        vertex_attributes.push(
          GPUVertexAttribute.fromPointer(vertexAttributePtr, sdl)
        );
      }
    }

    const result = {
      vertex_buffer_descriptions: [],
      num_vertex_buffers: view.getUint32(0, true),
      vertex_attributes: [],
      num_vertex_attributes: view.getUint32(4, true),
      free: null,
      address: null,
    } as RawGPUVertexInputState;

    return new GPUVertexInputState(result);
  }
}
