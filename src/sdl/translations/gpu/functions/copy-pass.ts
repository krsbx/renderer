import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
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
    source: GPUTextureTransferInfo | Pointer;
    destination: GPUTextureRegion | Pointer;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  const sourcePtr =
    options.source instanceof GPUTextureTransferInfo
      ? options.source.$address
      : options.source;
  const destinationPtr =
    options.destination instanceof GPUTextureRegion
      ? options.destination.$address
      : options.destination;

  this.symbols.SDL_UploadToGPUTexture(
    options.copyPass,
    sourcePtr,
    destinationPtr,
    options.cycle ?? false
  );
}

export function uploadToGPUBuffer(
  this: SDL,
  options: {
    copyPass: Pointer;
    source: GPUTransferBufferLocation | Pointer;
    destination: GPUBufferRegion | Pointer;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  const sourcePtr =
    options.source instanceof GPUTransferBufferLocation
      ? options.source.$address
      : options.source;
  const destinationPtr =
    options.destination instanceof GPUBufferRegion
      ? options.destination.$address
      : options.destination;

  this.symbols.SDL_UploadToGPUBuffer(
    options.copyPass,
    sourcePtr,
    destinationPtr,
    options.cycle ?? false
  );
}

export function copyGPUTextureToTexture(
  this: SDL,
  options: {
    copyPass: Pointer;
    source: GPUTextureLocation | Pointer;
    destination: GPUTextureLocation | Pointer;
    w: number;
    h: number;
    d: number;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  const sourcePtr =
    options.source instanceof GPUTextureLocation
      ? options.source.$address
      : options.source;
  const destinationPtr =
    options.destination instanceof GPUTextureLocation
      ? options.destination.$address
      : options.destination;

  this.symbols.SDL_CopyGPUTextureToTexture(
    options.copyPass,
    sourcePtr,
    destinationPtr,
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
    source: GPUBufferLocation | Pointer;
    destination: GPUBufferLocation | Pointer;
    size: number;
    /**
     * @default false
     */
    cycle?: boolean;
  }
) {
  const sourcePtr =
    options.source instanceof GPUBufferLocation
      ? options.source.$address
      : options.source;
  const destinationPtr =
    options.destination instanceof GPUBufferLocation
      ? options.destination.$address
      : options.destination;

  this.symbols.SDL_CopyGPUBufferToBuffer(
    options.copyPass,
    sourcePtr,
    destinationPtr,
    options.size,
    options.cycle ?? false
  );
}

export function downloadFromGPUTexture(
  this: SDL,
  options: {
    copyPass: Pointer;
    source: GPUTextureRegion | Pointer;
    destination: GPUTextureTransferInfo | Pointer;
  }
) {
  const sourcePtr =
    options.source instanceof GPUTextureRegion
      ? options.source.$address
      : options.source;
  const destinationPtr =
    options.destination instanceof GPUTextureTransferInfo
      ? options.destination.$address
      : options.destination;

  this.symbols.SDL_DownloadFromGPUTexture(
    options.copyPass,
    sourcePtr,
    destinationPtr
  );
}

export function downloadFromGPUBuffer(
  this: SDL,
  options: {
    copyPass: Pointer;
    source: GPUBufferRegion | Pointer;
    destination: GPUTransferBufferLocation | Pointer;
  }
) {
  const sourcePtr =
    options.source instanceof GPUBufferRegion
      ? options.source.$address
      : options.source;
  const destinationPtr =
    options.destination instanceof GPUTransferBufferLocation
      ? options.destination.$address
      : options.destination;

  this.symbols.SDL_DownloadFromGPUBuffer(
    options.copyPass,
    sourcePtr,
    destinationPtr
  );
}

export function endGPUCopyPass(this: SDL, copyPass: Pointer) {
  this.symbols.SDL_EndGPUCopyPass(copyPass);
}
