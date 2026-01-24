import type { SDL } from '@/sdl';
import { getStructAddress } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import {
  GPUBufferLocation,
  GPUBufferRegion,
  GPUTextureLocation,
  GPUTextureRegion,
  GPUTextureTransferInfo,
  GPUTransferBufferLocation,
} from '../utility';

// Transfer Buffer

export function mapGPUTransferBuffer(
  this: SDL,
  options: {
    device: Pointer;
    transferBuffer: Pointer;
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
    device: Pointer;
    transferBuffer: Pointer;
  }
) {
  this.symbols.SDL_UnmapGPUTransferBuffer(
    options.device,
    options.transferBuffer
  );
}

// Copy Pass

export function beginGPUCopyPass(this: SDL, commandBuffer: Pointer) {
  return this.symbols.SDL_BeginGPUCopyPass(commandBuffer);
}

export function uploadToGPUTexture(
  this: SDL,
  options: {
    copyPass: Pointer;
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
    getStructAddress(options.source),
    getStructAddress(options.destination),
    options.cycle ?? false
  );
}

export function uploadToGPUBuffer(
  this: SDL,
  options: {
    copyPass: Pointer;
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
    getStructAddress(options.source),
    getStructAddress(options.destination),
    options.cycle ?? false
  );
}

export function copyGPUTextureToTexture(
  this: SDL,
  options: {
    copyPass: Pointer;
    source: GPUTextureLocation;
    destination: GPUTextureLocation;
    w: number;
    h: number;
    d: number;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  this.symbols.SDL_CopyGPUTextureToTexture(
    options.copyPass,
    getStructAddress(options.source),
    getStructAddress(options.destination),
    options.w,
    options.h,
    options.d,
    options.cycle ?? false
  );
}

export function copyGPUBufferToBuffer(
  this: SDL,
  options: {
    copyPass: Pointer;
    source: GPUBufferLocation;
    destination: GPUBufferLocation;
    size: number;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  this.symbols.SDL_CopyGPUBufferToBuffer(
    options.copyPass,
    getStructAddress(options.source),
    getStructAddress(options.destination),
    options.size,
    options.cycle ?? false
  );
}

export function downloadFromGPUTexture(
  this: SDL,
  options: {
    copyPass: Pointer;
    source: GPUTextureRegion;
    destination: GPUTextureTransferInfo;
  }
) {
  this.symbols.SDL_DownloadFromGPUTexture(
    options.copyPass,
    getStructAddress(options.source),
    getStructAddress(options.destination)
  );
}

export function downloadFromGPUBuffer(
  this: SDL,
  options: {
    copyPass: Pointer;
    source: GPUBufferRegion;
    destination: GPUTransferBufferLocation;
  }
) {
  this.symbols.SDL_DownloadFromGPUBuffer(
    options.copyPass,
    getStructAddress(options.source),
    getStructAddress(options.destination)
  );
}

export function endGPUCopyPass(this: SDL, copyPass: Pointer) {
  this.symbols.SDL_EndGPUCopyPass(copyPass);
}
