import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type {
  GPUPresentMode,
  GPUSwapchainComposition,
  GPUTextureFormat,
} from '../../../ffi/gpu/constant';
import { CStruct } from '../../../utility/cstruct';

// Swapchain

export function windowSupportsGPUSwapchainComposition(
  this: SDL,
  options: {
    device: Pointer;
    window: Pointer;
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
    device: Pointer;
    window: Pointer;
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
    device: Pointer;
    window: Pointer;
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
    device: Pointer;
    window: Pointer;
  }
) {
  this.symbols.SDL_ReleaseWindowFromGPUDevice(options.device, options.window);
}

export function setGPUSwapchainParameters(
  this: SDL,
  options: {
    device: Pointer;
    window: Pointer;
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
    device: Pointer;
    allowedFramesInFlight: number;
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
    device: Pointer;
    window: Pointer;
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
    commandBuffer: Pointer;
    window: Pointer;
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
    swapchainTextureStruct.$address,
    widthStruct.$address
  );

  if (!success) return null;

  return {
    texture: swapchainTextureStruct.getValue(0, 'ptr'),
    width: widthStruct.getValue(0, 'u32'),
    height: heightStruct.getValue(0, 'u32'),
  };
}

export function waitForGPUSwapchain(
  this: SDL,
  options: {
    device: Pointer;
    window: Pointer;
  }
) {
  return this.symbols.SDL_WaitForGPUSwapchain(options.device, options.window);
}

export function waitAndAcquireGPUSwapchainTexture(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    window: Pointer;
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
    swapchainTextureStruct.$address,
    widthStruct.$address
  );

  if (!success) return null;

  return {
    texture: swapchainTextureStruct.getValue(0, 'ptr'),
    width: widthStruct.getValue(0, 'u32'),
    height: heightStruct.getValue(0, 'u32'),
  };
}
