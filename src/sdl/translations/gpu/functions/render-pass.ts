import type { SDL } from '@/sdl';
import type {
  GPUBuffer,
  GPUCommandBuffer,
  GPUGraphicsPipeline,
  GPURenderPass,
  GPUTexture,
} from '@/sdl/types/definition';
import type { Int32, UInt8, UInt32 } from '@/types/primitive';
import { CStruct } from '@/utility/cstruct';
import type { GPUIndexElementSize } from '../../../ffi/gpu/constant';
import { FColor } from '../../pixels/struct';
import { Rect } from '../../rect/struct';
import {
  GPUBufferBinding,
  GPUColorTargetInfo,
  GPUDepthStencilTargetInfo,
  GPUTextureSamplerBinding,
  GPUViewport,
} from '../struct';

// Render Pass

export function beginGPURenderPass(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    colorTargetInfos: GPUColorTargetInfo[];
    depthStencilTargetInfo?: GPUDepthStencilTargetInfo | null;
  }
) {
  const { buffer: colorTargetInfos } = CStruct.writeArray(
    options.colorTargetInfos,
    GPUColorTargetInfo.BYTE_SIZE
  );

  return this.symbols.SDL_BeginGPURenderPass(
    options.commandBuffer,
    colorTargetInfos,
    options.colorTargetInfos.length,
    options.depthStencilTargetInfo?.$memory ?? null
  ) as GPURenderPass;
}

export function bindGPUGraphicsPipeline(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    graphicsPipeline: GPUGraphicsPipeline;
  }
) {
  this.symbols.SDL_BindGPUGraphicsPipeline(
    options.renderPass,
    options.graphicsPipeline
  );
}

export function setGPUViewport(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    viewport: GPUViewport;
  }
) {
  this.symbols.SDL_SetGPUViewport(options.renderPass, options.viewport.$memory);
}

export function setGPUScissor(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    scissor: Rect;
  }
) {
  this.symbols.SDL_SetGPUScissor(options.renderPass, options.scissor.$memory);
}

export function setGPUBlendConstants(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    blendConstants: FColor;
  }
) {
  this.symbols.SDL_SetGPUBlendConstants(
    options.renderPass,
    options.blendConstants.$memory
  );
}

export function setGPUStencilReference(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    reference: UInt8;
  }
) {
  this.symbols.SDL_SetGPUStencilReference(
    options.renderPass,
    options.reference
  );
}

// Vertex/Index Buffers

export function bindGPUVertexBuffers(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    firstSlot: UInt32;
    bindings: GPUBufferBinding[];
  }
) {
  const { buffer: bindings } = CStruct.writeArray(
    options.bindings,
    GPUBufferBinding.BYTE_SIZE
  );

  this.symbols.SDL_BindGPUVertexBuffers(
    options.renderPass,
    options.firstSlot,
    bindings,
    options.bindings.length
  );
}

export function bindGPUIndexBuffer(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    binding: GPUBufferBinding;
    indexElementSize: GPUIndexElementSize;
  }
) {
  this.symbols.SDL_BindGPUIndexBuffer(
    options.renderPass,
    options.binding.$memory,
    options.indexElementSize
  );
}

// Vertex Samplers/Storage

export function bindGPUVertexSamplers(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    firstSlot: UInt32;
    textureSamplerBindings: GPUTextureSamplerBinding[];
  }
) {
  const { buffer: textureSamplerBindings } = CStruct.writeArray(
    options.textureSamplerBindings,
    GPUTextureSamplerBinding.BYTE_SIZE
  );

  this.symbols.SDL_BindGPUVertexSamplers(
    options.renderPass,
    options.firstSlot,
    textureSamplerBindings,
    options.textureSamplerBindings.length
  );
}

export function bindGPUVertexStorageTextures(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    firstSlot: UInt32;
    storageTextures: GPUTexture[];
  }
) {
  const { address } = CStruct.writeArrayPointer(options.storageTextures);

  this.symbols.SDL_BindGPUVertexStorageTextures(
    options.renderPass,
    options.firstSlot,
    address,
    options.storageTextures.length
  );
}

export function bindGPUVertexStorageBuffers(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    firstSlot: UInt32;
    storageBuffers: GPUBuffer[];
  }
) {
  const { address } = CStruct.writeArrayPointer(options.storageBuffers);

  this.symbols.SDL_BindGPUVertexStorageBuffers(
    options.renderPass,
    options.firstSlot,
    address,
    options.storageBuffers.length
  );
}

// Fragment Samplers/Storage

export function bindGPUFragmentSamplers(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    firstSlot: UInt32;
    textureSamplerBindings: GPUTextureSamplerBinding[];
  }
) {
  const { buffer: textureSamplerBindings } = CStruct.writeArray(
    options.textureSamplerBindings,
    GPUTextureSamplerBinding.BYTE_SIZE
  );

  this.symbols.SDL_BindGPUFragmentSamplers(
    options.renderPass,
    options.firstSlot,
    textureSamplerBindings,
    options.textureSamplerBindings.length
  );
}

export function bindGPUFragmentStorageTextures(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    firstSlot: UInt32;
    storageTextures: GPUTexture[];
  }
) {
  const { address } = CStruct.writeArrayPointer(options.storageTextures);

  this.symbols.SDL_BindGPUFragmentStorageTextures(
    options.renderPass,
    options.firstSlot,
    address,
    options.storageTextures.length
  );
}

export function bindGPUFragmentStorageBuffers(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    firstSlot: UInt32;
    storageBuffers: GPUBuffer[];
  }
) {
  const { address } = CStruct.writeArrayPointer(options.storageBuffers);

  this.symbols.SDL_BindGPUFragmentStorageBuffers(
    options.renderPass,
    options.firstSlot,
    address,
    options.storageBuffers.length
  );
}

// Draw

export function drawGPUIndexedPrimitives(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    numIndices: UInt32;
    numInstances: UInt32;
    firstIndex: UInt32;
    vertexOffset: Int32;
    firstInstance: UInt32;
  }
) {
  this.symbols.SDL_DrawGPUIndexedPrimitives(
    options.renderPass,
    options.numIndices,
    options.numInstances,
    options.firstIndex,
    options.vertexOffset,
    options.firstInstance
  );
}

export function drawGPUPrimitives(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    numVertices: UInt32;
    numInstances: UInt32;
    firstVertex: UInt32;
    firstInstance: UInt32;
  }
) {
  this.symbols.SDL_DrawGPUPrimitives(
    options.renderPass,
    options.numVertices,
    options.numInstances,
    options.firstVertex,
    options.firstInstance
  );
}

export function drawGPUPrimitivesIndirect(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    buffer: GPUBuffer;
    offset: UInt32;
    drawCount: UInt32;
  }
) {
  this.symbols.SDL_DrawGPUPrimitivesIndirect(
    options.renderPass,
    options.buffer,
    options.offset,
    options.drawCount
  );
}

export function drawGPUIndexedPrimitivesIndirect(
  this: SDL,
  options: {
    renderPass: GPURenderPass;
    buffer: GPUBuffer;
    offset: UInt32;
    drawCount: UInt32;
  }
) {
  this.symbols.SDL_DrawGPUIndexedPrimitivesIndirect(
    options.renderPass,
    options.buffer,
    options.offset,
    options.drawCount
  );
}

export function endGPURenderPass(this: SDL, renderPass: GPURenderPass) {
  this.symbols.SDL_EndGPURenderPass(renderPass);
}
