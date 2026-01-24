import type { SDL } from '@/sdl';
import { getStructAddress } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import {
  GPUStorageBufferReadWriteBinding,
  GPUStorageTextureReadWriteBinding,
  GPUTextureSamplerBinding,
} from '../utility';

// Compute Pass

export function beginGPUComputePass(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    storageTextureBindings?: GPUStorageTextureReadWriteBinding | null;
    numStorageTextureBindings: number;
    storageBufferBindings?: GPUStorageBufferReadWriteBinding | null;
    numStorageBufferBindings: number;
  }
) {
  return this.symbols.SDL_BeginGPUComputePass(
    options.commandBuffer,
    options.storageTextureBindings
      ? getStructAddress(options.storageTextureBindings)
      : null,
    options.numStorageTextureBindings,
    options.storageBufferBindings
      ? getStructAddress(options.storageBufferBindings)
      : null,
    options.numStorageBufferBindings
  );
}

export function bindGPUComputePipeline(
  this: SDL,
  options: {
    computePass: Pointer;
    computePipeline: Pointer;
  }
) {
  this.symbols.SDL_BindGPUComputePipeline(
    options.computePass,
    options.computePipeline
  );
}

export function bindGPUComputeSamplers(
  this: SDL,
  options: {
    computePass: Pointer;
    firstSlot: number;
    textureSamplerBindings: GPUTextureSamplerBinding;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUComputeSamplers(
    options.computePass,
    options.firstSlot,
    getStructAddress(options.textureSamplerBindings),
    options.numBindings
  );
}

export function bindGPUComputeStorageTextures(
  this: SDL,
  options: {
    computePass: Pointer;
    firstSlot: number;
    storageTextures: Pointer;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUComputeStorageTextures(
    options.computePass,
    options.firstSlot,
    options.storageTextures,
    options.numBindings
  );
}

export function bindGPUComputeStorageBuffers(
  this: SDL,
  options: {
    computePass: Pointer;
    firstSlot: number;
    storageBuffers: Pointer;
    numBindings: number;
  }
) {
  this.symbols.SDL_BindGPUComputeStorageBuffers(
    options.computePass,
    options.firstSlot,
    options.storageBuffers,
    options.numBindings
  );
}

export function dispatchGPUCompute(
  this: SDL,
  options: {
    computePass: Pointer;
    groupCountX: number;
    groupCountY: number;
    groupCountZ: number;
  }
) {
  this.symbols.SDL_DispatchGPUCompute(
    options.computePass,
    options.groupCountX,
    options.groupCountY,
    options.groupCountZ
  );
}

export function dispatchGPUComputeIndirect(
  this: SDL,
  options: {
    computePass: Pointer;
    buffer: Pointer;
    offset: number;
  }
) {
  this.symbols.SDL_DispatchGPUComputeIndirect(
    options.computePass,
    options.buffer,
    options.offset
  );
}

export function endGPUComputePass(this: SDL, computePass: Pointer) {
  this.symbols.SDL_EndGPUComputePass(computePass);
}
