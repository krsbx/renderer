import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { GPUIndexElementSize } from '../../../ffi/gpu/constant';
import { FColor } from '../../pixels/utility';
import { Rect } from '../../rect/utility';
import {
  GPUBufferBinding,
  GPUColorTargetInfo,
  GPUDepthStencilTargetInfo,
  GPUTextureSamplerBinding,
  GPUViewport,
} from '../utility';

// Render Pass

export function beginGPURenderPass(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    colorTargetInfos: GPUColorTargetInfo | Pointer;
    numColorTargets: number;
    depthStencilTargetInfo?: GPUDepthStencilTargetInfo | Pointer | null;
  }
) {
  const colorTargetInfosPtr =
    options.colorTargetInfos instanceof GPUColorTargetInfo
      ? options.colorTargetInfos.$address
      : options.colorTargetInfos;
  const depthStencilTargetInfoPtr =
    options.depthStencilTargetInfo instanceof GPUDepthStencilTargetInfo
      ? options.depthStencilTargetInfo.$address
      : options.depthStencilTargetInfo;

  return this.symbols.SDL_BeginGPURenderPass(
    options.commandBuffer,
    colorTargetInfosPtr,
    options.numColorTargets,
    depthStencilTargetInfoPtr ?? null
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
    viewport: GPUViewport | Pointer;
  }
) {
  const viewportPtr =
    options.viewport instanceof GPUViewport
      ? options.viewport.$address
      : options.viewport;

  this.symbols.SDL_SetGPUViewport(options.renderPass, viewportPtr);
}

export function setGPUScissor(
  this: SDL,
  options: {
    renderPass: Pointer;
    scissor: Rect | Pointer;
  }
) {
  const scissorPtr =
    options.scissor instanceof Rect
      ? options.scissor.$address
      : options.scissor;

  this.symbols.SDL_SetGPUScissor(options.renderPass, scissorPtr);
}

export function setGPUBlendConstants(
  this: SDL,
  options: {
    renderPass: Pointer;
    blendConstants: FColor | Pointer;
  }
) {
  const blendConstantsPtr =
    options.blendConstants instanceof FColor
      ? options.blendConstants.$address
      : options.blendConstants;

  this.symbols.SDL_SetGPUBlendConstants(options.renderPass, blendConstantsPtr);
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
    bindings: GPUBufferBinding | Pointer;
    numBindings: number;
  }
) {
  const bindingsPtr =
    options.bindings instanceof GPUBufferBinding
      ? options.bindings.$address
      : options.bindings;

  this.symbols.SDL_BindGPUVertexBuffers(
    options.renderPass,
    options.firstSlot,
    bindingsPtr,
    options.numBindings
  );
}

export function bindGPUIndexBuffer(
  this: SDL,
  options: {
    renderPass: Pointer;
    binding: GPUBufferBinding | Pointer;
    indexElementSize: GPUIndexElementSize;
  }
) {
  const bindingPtr =
    options.binding instanceof GPUBufferBinding
      ? options.binding.$address
      : options.binding;

  this.symbols.SDL_BindGPUIndexBuffer(
    options.renderPass,
    bindingPtr,
    options.indexElementSize
  );
}

// Vertex Samplers/Storage

export function bindGPUVertexSamplers(
  this: SDL,
  options: {
    renderPass: Pointer;
    firstSlot: number;
    textureSamplerBindings: GPUTextureSamplerBinding | Pointer;
    numBindings: number;
  }
) {
  const textureSamplerBindingsPtr =
    options.textureSamplerBindings instanceof GPUTextureSamplerBinding
      ? options.textureSamplerBindings.$address
      : options.textureSamplerBindings;

  this.symbols.SDL_BindGPUVertexSamplers(
    options.renderPass,
    options.firstSlot,
    textureSamplerBindingsPtr,
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
    textureSamplerBindings: GPUTextureSamplerBinding | Pointer;
    numBindings: number;
  }
) {
  const textureSamplerBindingsPtr =
    options.textureSamplerBindings instanceof GPUTextureSamplerBinding
      ? options.textureSamplerBindings.$address
      : options.textureSamplerBindings;

  this.symbols.SDL_BindGPUFragmentSamplers(
    options.renderPass,
    options.firstSlot,
    textureSamplerBindingsPtr,
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
