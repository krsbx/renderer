import type { SDL } from '@/sdl';
import { stringToCString } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import type { GPUShaderFormat } from '../../../ffi/gpu/constant';

// Support Check

export function gpuSupportsShaderFormats(
  this: SDL,
  options: {
    formatFlags: GPUShaderFormat;
    name?: string | null;
  }
) {
  return this.symbols.SDL_GPUSupportsShaderFormats(
    options.formatFlags,
    options.name ? stringToCString(options.name).ptr : null
  );
}

export function gpuSupportsProperties(this: SDL, props: number) {
  return this.symbols.SDL_GPUSupportsProperties(props);
}

// Device

export function createGPUDevice(
  this: SDL,
  options: {
    formatFlags: GPUShaderFormat;
    /**
     * @default false
     */
    debugMode?: boolean;
    name?: string | null;
  }
) {
  return this.symbols.SDL_CreateGPUDevice(
    options.formatFlags,
    options.debugMode ?? false,
    options.name ? stringToCString(options.name).ptr : null
  );
}

export function createGPUDeviceWithProperties(this: SDL, props: number) {
  return this.symbols.SDL_CreateGPUDeviceWithProperties(props);
}

export function destroyGPUDevice(this: SDL, device: Pointer) {
  this.symbols.SDL_DestroyGPUDevice(device);
}

// Drivers

export function getNumGPUDrivers(this: SDL) {
  return this.symbols.SDL_GetNumGPUDrivers();
}

export function getGPUDriver(this: SDL, index: number) {
  return this.symbols.SDL_GetGPUDriver(index).toString();
}

export function getGPUDeviceDriver(this: SDL, device: Pointer) {
  return this.symbols.SDL_GetGPUDeviceDriver(device).toString();
}

export function getGPUShaderFormats(this: SDL, device: Pointer) {
  return this.symbols.SDL_GetGPUShaderFormats(device) as GPUShaderFormat;
}

export function getGPUDeviceProperties(this: SDL, device: Pointer) {
  return this.symbols.SDL_GetGPUDeviceProperties(device);
}
