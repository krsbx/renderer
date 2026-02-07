import type { SDL } from '@/sdl';
import type { GPUDevice, PropertiesID } from '@/sdl/types/definition';
import type { Int32 } from '@/types/primitive';
import { stringToCString } from '@utility/common';
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

export function gpuSupportsProperties(this: SDL, props: PropertiesID) {
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
  ) as GPUDevice | null;
}

export function createGPUDeviceWithProperties(this: SDL, props: PropertiesID) {
  return this.symbols.SDL_CreateGPUDeviceWithProperties(
    props
  ) as GPUDevice | null;
}

export function destroyGPUDevice(this: SDL, device: GPUDevice) {
  this.symbols.SDL_DestroyGPUDevice(device);
}

// Drivers

export function getNumGPUDrivers(this: SDL) {
  return this.symbols.SDL_GetNumGPUDrivers() as Int32;
}

export function getGPUDriver(this: SDL, index: Int32) {
  return this.symbols.SDL_GetGPUDriver(index).toString();
}

export function getGPUDeviceDriver(this: SDL, device: GPUDevice) {
  return this.symbols.SDL_GetGPUDeviceDriver(device).toString();
}

export function getGPUShaderFormats(this: SDL, device: GPUDevice) {
  return this.symbols.SDL_GetGPUShaderFormats(device) as GPUShaderFormat;
}

export function getGPUDeviceProperties(this: SDL, device: GPUDevice) {
  return this.symbols.SDL_GetGPUDeviceProperties(device) as PropertiesID;
}
