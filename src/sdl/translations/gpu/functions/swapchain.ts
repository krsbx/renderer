import type { SDL } from '@/sdl';
import type {
  GPUCommandBuffer,
  GPUDevice,
  GPUTexture,
  Window,
} from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type {
  GPUPresentMode,
  GPUSwapchainComposition,
  GPUTextureFormat,
} from '../../../ffi/gpu/constant';

// Swapchain

export function windowSupportsGPUSwapchainComposition(
  this: SDL,
  options: {
    device: GPUDevice;
    window: Window;
    swapchainComposition: GPUSwapchainComposition;
  }
) {
  return this.symbols.SDL_WindowSupportsGPUSwapchainComposition(
    options.device,
    options.window,
    options.swapchainComposition
  );
}

export function windowSupportsGPUPresentMode(
  this: SDL,
  options: {
    device: GPUDevice;
    window: Window;
    presentMode: GPUPresentMode;
  }
) {
  return this.symbols.SDL_WindowSupportsGPUPresentMode(
    options.device,
    options.window,
    options.presentMode
  );
}

export function claimWindowForGPUDevice(
  this: SDL,
  options: {
    device: GPUDevice;
    window: Window;
  }
) {
  return this.symbols.SDL_ClaimWindowForGPUDevice(
    options.device,
    options.window
  );
}

export function releaseWindowFromGPUDevice(
  this: SDL,
  options: {
    device: GPUDevice;
    window: Window;
  }
) {
  this.symbols.SDL_ReleaseWindowFromGPUDevice(options.device, options.window);
}

export function setGPUSwapchainParameters(
  this: SDL,
  options: {
    device: GPUDevice;
    window: Window;
    swapchainComposition: GPUSwapchainComposition;
    presentMode: GPUPresentMode;
  }
) {
  return this.symbols.SDL_SetGPUSwapchainParameters(
    options.device,
    options.window,
    options.swapchainComposition,
    options.presentMode
  );
}

export function setGPUAllowedFramesInFlight(
  this: SDL,
  options: {
    device: GPUDevice;
    allowedFramesInFlight: UInt32;
  }
) {
  return this.symbols.SDL_SetGPUAllowedFramesInFlight(
    options.device,
    options.allowedFramesInFlight
  );
}

export function getGPUSwapchainTextureFormat(
  this: SDL,
  options: {
    device: GPUDevice;
    window: Window;
  }
) {
  return this.symbols.SDL_GetGPUSwapchainTextureFormat(
    options.device,
    options.window
  ) as GPUTextureFormat;
}

export function acquireGPUSwapchainTexture(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    window: Window;
  }
) {
  const swapchainTextureStruct = new CStruct({
    length: CStruct.BYTE_SIZE.ptr,
  });
  const widthStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const heightStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const success = this.symbols.SDL_AcquireGPUSwapchainTexture(
    options.commandBuffer,
    options.window,
    swapchainTextureStruct.$memory,
    widthStruct.$memory,
    heightStruct.$memory
  );

  if (!success) return null;

  return {
    texture: swapchainTextureStruct.getValue(0, 'ptr') as GPUTexture,
    width: widthStruct.getValue(0, 'u32'),
    height: heightStruct.getValue(0, 'u32'),
  };
}

export function waitForGPUSwapchain(
  this: SDL,
  options: {
    device: GPUDevice;
    window: Window;
  }
) {
  return this.symbols.SDL_WaitForGPUSwapchain(options.device, options.window);
}

export function waitAndAcquireGPUSwapchainTexture(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    window: Window;
  }
) {
  const swapchainTextureStruct = new CStruct({
    length: CStruct.BYTE_SIZE.ptr,
  });
  const widthStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const heightStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const success = this.symbols.SDL_WaitAndAcquireGPUSwapchainTexture(
    options.commandBuffer,
    options.window,
    swapchainTextureStruct.$memory,
    widthStruct.$memory,
    heightStruct.$memory
  );

  if (!success) return null;

  return {
    texture: swapchainTextureStruct.getValue(0, 'ptr') as GPUTexture,
    width: widthStruct.getValue(0, 'u32'),
    height: heightStruct.getValue(0, 'u32'),
  };
}
