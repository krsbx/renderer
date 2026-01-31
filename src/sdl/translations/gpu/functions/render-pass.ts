import type { SDL } from '@/sdl';
import type { Pointer } from 'bun:ffi';
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
    commandBuffer: Pointer;
    colorTargetInfos: GPUColorTargetInfo;
    numColorTargets: number;
    depthStencilTargetInfo?: GPUDepthStencilTargetInfo | null;
  }
) {
  return this.symbols.SDL_BeginGPURenderPass(
    options.commandBuffer,
    options.colorTargetInfos.$address,
    options.numColorTargets,
    options.depthStencilTargetInfo?.$address ?? null
  );
}

export function bindGPUGraphicsPipeline(
  this: SDL,
  options: {
    renderPass: Pointer;
    graphicsPipeline: Pointer;
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
    renderPass: Pointer;
    viewport: GPUViewport;
  }
) {
  this.symbols.SDL_SetGPUViewport(
    options.renderPass,
    options.viewport.$address
  );
}

export function setGPUScissor(
  this: SDL,
  options: {
    renderPass: Pointer;
    scissor: Rect;
  }
) {
  this.symbols.SDL_SetGPUScissor(options.renderPass, options.scissor.$address);
}

export function setGPUBlendConstants(
  this: SDL,
  options: {
    renderPass: Pointer;
    blendConstants: FColor;
  }
) {
  this.symbols.SDL_SetGPUBlendConstants(
    options.renderPass,
    options.blendConstants.$address
  );
}

export function setGPUStencilReference(
  this: SDL,
  options: {
    renderPass: Pointer;
    reference: number;
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
    renderPass: Pointer;
    firstSlot: number;
    bindings: GPUBufferBinding;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUVertexBuffers(
    options.renderPass,
    options.firstSlot,
    options.bindings.$address,
    options.numBindings
  );
}

export function bindGPUIndexBuffer(
  this: SDL,
  options: {
    renderPass: Pointer;
    binding: GPUBufferBinding;
    indexElementSize: GPUIndexElementSize;
  }
) {
  this.symbols.SDL_BindGPUIndexBuffer(
    options.renderPass,
    options.binding.$address,
    options.indexElementSize
  );
}

// Vertex Samplers/Storage

export function bindGPUVertexSamplers(
  this: SDL,
  options: {
    renderPass: Pointer;
    firstSlot: number;
    textureSamplerBindings: GPUTextureSamplerBinding;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUVertexSamplers(
    options.renderPass,
    options.firstSlot,
    options.textureSamplerBindings.$address,
    options.numBindings
  );
}

export function bindGPUVertexStorageTextures(
  this: SDL,
  options: {
    renderPass: Pointer;
    firstSlot: number;
    storageTextures: Pointer;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUVertexStorageTextures(
    options.renderPass,
    options.firstSlot,
    options.storageTextures,
    options.numBindings
  );
}

export function bindGPUVertexStorageBuffers(
  this: SDL,
  options: {
    renderPass: Pointer;
    firstSlot: number;
    storageBuffers: Pointer;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUVertexStorageBuffers(
    options.renderPass,
    options.firstSlot,
    options.storageBuffers,
    options.numBindings
  );
}

// Fragment Samplers/Storage

export function bindGPUFragmentSamplers(
  this: SDL,
  options: {
    renderPass: Pointer;
    firstSlot: number;
    textureSamplerBindings: GPUTextureSamplerBinding;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUFragmentSamplers(
    options.renderPass,
    options.firstSlot,
    options.textureSamplerBindings.$address,
    options.numBindings
  );
}

export function bindGPUFragmentStorageTextures(
  this: SDL,
  options: {
    renderPass: Pointer;
    firstSlot: number;
    storageTextures: Pointer;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUFragmentStorageTextures(
    options.renderPass,
    options.firstSlot,
    options.storageTextures,
    options.numBindings
  );
}

export function bindGPUFragmentStorageBuffers(
  this: SDL,
  options: {
    renderPass: Pointer;
    firstSlot: number;
    storageBuffers: Pointer;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUFragmentStorageBuffers(
    options.renderPass,
    options.firstSlot,
    options.storageBuffers,
    options.numBindings
  );
}

// Draw

export function drawGPUIndexedPrimitives(
  this: SDL,
  options: {
    renderPass: Pointer;
    numIndices: number;
    numInstances: number;
    firstIndex: number;
    vertexOffset: number;
    firstInstance: number;
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
    renderPass: Pointer;
    numVertices: number;
    numInstances: number;
    firstVertex: number;
    firstInstance: number;
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
    renderPass: Pointer;
    buffer: Pointer;
    offset: number;
    drawCount: number;
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
    renderPass: Pointer;
    buffer: Pointer;
    offset: number;
    drawCount: number;
  }
) {
  this.symbols.SDL_DrawGPUIndexedPrimitivesIndirect(
    options.renderPass,
    options.buffer,
    options.offset,
    options.drawCount
  );
}

export function endGPURenderPass(this: SDL, renderPass: Pointer) {
  this.symbols.SDL_EndGPURenderPass(renderPass);
}
