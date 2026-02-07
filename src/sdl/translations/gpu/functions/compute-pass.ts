import type { SDL } from '@/sdl';
import type {
  GPUBuffer,
  GPUCommandBuffer,
  GPUComputePass,
  GPUComputePipeline,
  GPUTexture,
} from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import {
  GPUStorageBufferReadWriteBinding,
  GPUStorageTextureReadWriteBinding,
  GPUTextureSamplerBinding,
} from '../struct';

// Compute Pass

export function beginGPUComputePass(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    storageTextureBindings?: GPUStorageTextureReadWriteBinding[];
    storageBufferBindings?: GPUStorageBufferReadWriteBinding[];
  }
) {
  const textureBindings = options.storageTextureBindings
    ? CStruct.writeArray(
        options.storageTextureBindings,
        GPUStorageTextureReadWriteBinding.BYTE_SIZE
      )
    : null;

  const bufferBindings = options.storageBufferBindings
    ? CStruct.writeArray(
        options.storageBufferBindings,
        GPUStorageBufferReadWriteBinding.BYTE_SIZE
      )
    : null;

  return this.symbols.SDL_BeginGPUComputePass(
    options.commandBuffer,
    textureBindings?.buffer ?? null,
    options.storageTextureBindings?.length ?? 0,
    bufferBindings?.buffer ?? null,
    options.storageBufferBindings?.length ?? 0
  ) as GPUComputePass;
}

export function bindGPUComputePipeline(
  this: SDL,
  options: {
    computePass: GPUComputePass;
    computePipeline: GPUComputePipeline;
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
    computePass: GPUComputePass;
    firstSlot: UInt32;
    textureSamplerBindings: GPUTextureSamplerBinding[];
  }
) {
  const { buffer: textureSamplerBindings } = CStruct.writeArray(
    options.textureSamplerBindings,
    GPUTextureSamplerBinding.BYTE_SIZE
  );

  this.symbols.SDL_BindGPUComputeSamplers(
    options.computePass,
    options.firstSlot,
    textureSamplerBindings,
    options.textureSamplerBindings.length
  );
}

export function bindGPUComputeStorageTextures(
  this: SDL,
  options: {
    computePass: GPUComputePass;
    firstSlot: UInt32;
    storageTextures: GPUTexture[];
  }
) {
  const { address } = CStruct.writeArrayPointer(options.storageTextures);

  this.symbols.SDL_BindGPUComputeStorageTextures(
    options.computePass,
    options.firstSlot,
    address,
    options.storageTextures.length
  );
}

export function bindGPUComputeStorageBuffers(
  this: SDL,
  options: {
    computePass: GPUComputePass;
    firstSlot: UInt32;
    storageBuffers: GPUBuffer[];
  }
) {
  const { address } = CStruct.writeArrayPointer(options.storageBuffers);

  this.symbols.SDL_BindGPUComputeStorageBuffers(
    options.computePass,
    options.firstSlot,
    address,
    options.storageBuffers.length
  );
}

export function dispatchGPUCompute(
  this: SDL,
  options: {
    computePass: GPUComputePass;
    groupCountX: UInt32;
    groupCountY: UInt32;
    groupCountZ: UInt32;
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
    computePass: GPUComputePass;
    buffer: GPUBuffer;
    offset: UInt32;
  }
) {
  this.symbols.SDL_DispatchGPUComputeIndirect(
    options.computePass,
    options.buffer,
    options.offset
  );
}

export function endGPUComputePass(this: SDL, computePass: GPUComputePass) {
  this.symbols.SDL_EndGPUComputePass(computePass);
}
