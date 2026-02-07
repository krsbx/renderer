import type { SDL } from '@/sdl';
import type {
  GPUCommandBuffer,
  GPUDevice,
  GPUTexture,
} from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import type {
  GPUSampleCount,
  GPUTextureFormat,
  GPUTextureType,
  GPUTextureUsageFlags,
} from '../../../ffi/gpu/constant';
import type { PixelFormat } from '../../../ffi/pixels/constant';
import { GPUBlitInfo } from '../struct';

// Texture Operations

export function generateMipmapsForGPUTexture(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    texture: GPUTexture;
  }
) {
  this.symbols.SDL_GenerateMipmapsForGPUTexture(
    options.commandBuffer,
    options.texture
  );
}

export function blitGPUTexture(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    info: GPUBlitInfo;
  }
) {
  this.symbols.SDL_BlitGPUTexture(options.commandBuffer, options.info.$memory);
}

// Texture Format Utilities

export function gpuTextureFormatTexelBlockSize(
  this: SDL,
  format: GPUTextureFormat
) {
  return this.symbols.SDL_GPUTextureFormatTexelBlockSize(format) as UInt32;
}

export function gpuTextureSupportsFormat(
  this: SDL,
  options: {
    device: GPUDevice;
    format: GPUTextureFormat;
    type: GPUTextureType;
    usage: GPUTextureUsageFlags;
  }
) {
  return this.symbols.SDL_GPUTextureSupportsFormat(
    options.device,
    options.format,
    options.type,
    options.usage
  );
}

export function gpuTextureSupportsSampleCount(
  this: SDL,
  options: {
    device: GPUDevice;
    format: GPUTextureFormat;
    sampleCount: GPUSampleCount;
  }
) {
  return this.symbols.SDL_GPUTextureSupportsSampleCount(
    options.device,
    options.format,
    options.sampleCount
  );
}

export function calculateGPUTextureFormatSize(
  this: SDL,
  options: {
    format: GPUTextureFormat;
    width: UInt32;
    height: UInt32;
    depthOrLayerCount: UInt32;
  }
) {
  return this.symbols.SDL_CalculateGPUTextureFormatSize(
    options.format,
    options.width,
    options.height,
    options.depthOrLayerCount
  );
}

export function getPixelFormatFromGPUTextureFormat(
  this: SDL,
  format: GPUTextureFormat
) {
  return this.symbols.SDL_GetPixelFormatFromGPUTextureFormat(
    format
  ) as PixelFormat;
}

export function getGPUTextureFormatFromPixelFormat(
  this: SDL,
  format: PixelFormat
) {
  return this.symbols.SDL_GetGPUTextureFormatFromPixelFormat(
    format
  ) as GPUTextureFormat;
}
