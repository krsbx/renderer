import type { SDL } from '@/sdl';
import type {
  GPUCommandBuffer,
  GPUCopyPass,
  GPUDevice,
  GPUTransferBuffer,
} from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import {
  GPUBufferLocation,
  GPUBufferRegion,
  GPUTextureLocation,
  GPUTextureRegion,
  GPUTextureTransferInfo,
  GPUTransferBufferLocation,
} from '../struct';

// Transfer Buffer

export function mapGPUTransferBuffer(
  this: SDL,
  options: {
    device: GPUDevice;
    transferBuffer: GPUTransferBuffer;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  return this.symbols.SDL_MapGPUTransferBuffer(
    options.device,
    options.transferBuffer,
    options.cycle ?? false
  );
}

export function unmapGPUTransferBuffer(
  this: SDL,
  options: {
    device: GPUDevice;
    transferBuffer: GPUTransferBuffer;
  }
) {
  this.symbols.SDL_UnmapGPUTransferBuffer(
    options.device,
    options.transferBuffer
  );
}

// Copy Pass

export function beginGPUCopyPass(this: SDL, commandBuffer: GPUCommandBuffer) {
  return this.symbols.SDL_BeginGPUCopyPass(commandBuffer) as GPUCopyPass;
}

export function uploadToGPUTexture(
  this: SDL,
  options: {
    copyPass: GPUCopyPass;
    source: GPUTextureTransferInfo;
    destination: GPUTextureRegion;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  this.symbols.SDL_UploadToGPUTexture(
    options.copyPass,
    options.source.$memory,
    options.destination.$memory,
    options.cycle ?? false
  );
}

export function uploadToGPUBuffer(
  this: SDL,
  options: {
    copyPass: GPUCopyPass;
    source: GPUTransferBufferLocation;
    destination: GPUBufferRegion;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  this.symbols.SDL_UploadToGPUBuffer(
    options.copyPass,
    options.source.$memory,
    options.destination.$memory,
    options.cycle ?? false
  );
}

export function copyGPUTextureToTexture(
  this: SDL,
  options: {
    copyPass: GPUCopyPass;
    source: GPUTextureLocation;
    destination: GPUTextureLocation;
    w: UInt32;
    h: UInt32;
    d: UInt32;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  this.symbols.SDL_CopyGPUTextureToTexture(
    options.copyPass,
    options.source.$memory,
    options.destination.$memory,
    options.w,
    options.h,
    options.d,
    options.cycle ?? false
  );
}

export function copyGPUBufferToBuffer(
  this: SDL,
  options: {
    copyPass: GPUCopyPass;
    source: GPUBufferLocation;
    destination: GPUBufferLocation;
    size: UInt32;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  this.symbols.SDL_CopyGPUBufferToBuffer(
    options.copyPass,
    options.source.$memory,
    options.destination.$memory,
    options.size,
    options.cycle ?? false
  );
}

export function downloadFromGPUTexture(
  this: SDL,
  options: {
    copyPass: GPUCopyPass;
    source: GPUTextureRegion;
    destination: GPUTextureTransferInfo;
  }
) {
  this.symbols.SDL_DownloadFromGPUTexture(
    options.copyPass,
    options.source.$memory,
    options.destination.$memory
  );
}

export function downloadFromGPUBuffer(
  this: SDL,
  options: {
    copyPass: GPUCopyPass;
    source: GPUBufferRegion;
    destination: GPUTransferBufferLocation;
  }
) {
  this.symbols.SDL_DownloadFromGPUBuffer(
    options.copyPass,
    options.source.$memory,
    options.destination.$memory
  );
}

export function endGPUCopyPass(this: SDL, copyPass: GPUCopyPass) {
  this.symbols.SDL_EndGPUCopyPass(copyPass);
}
