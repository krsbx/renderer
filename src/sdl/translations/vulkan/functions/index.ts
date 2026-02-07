import type { SDL } from '@/sdl';
import type {
  VkInstance,
  VkPhysicalDevice,
  VkSurfaceKHR,
  Window,
} from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';

export function vulkanLoadLibrary(this: SDL, path: string) {
  return this.symbols.SDL_Vulkan_LoadLibrary(stringToCString(path).ptr);
}

export function vulkanGetVkGetInstanceProcAddr(this: SDL) {
  return this.symbols.SDL_Vulkan_GetVkGetInstanceProcAddr();
}

export function vulkanUnloadLibrary(this: SDL) {
  this.symbols.SDL_Vulkan_UnloadLibrary();
}

export function vulkanGetInstanceExtensions(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  const listPtr = this.symbols.SDL_Vulkan_GetInstanceExtensions(
    countStruct.$memory
  );

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'u32');
  const extensions = CStruct.readArrayString(listPtr, count);

  this.symbols.SDL_free(listPtr);

  return extensions;
}

export function vulkanCreateSurface(
  this: SDL,
  options: {
    window: Window;
    instance: VkInstance;
    allocator?: Pointer | null;
  }
) {
  const surfaceStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const success = this.symbols.SDL_Vulkan_CreateSurface(
    options.window,
    options.instance,
    options.allocator ?? null,
    surfaceStruct.$memory
  );

  if (!success) return null;

  return Number(surfaceStruct.getValue(0, 'u64')) as Pointer;
}

export function vulkanDestroySurface(
  this: SDL,
  options: {
    instance: VkInstance;
    surface: VkSurfaceKHR;
    allocator?: Pointer | null;
  }
) {
  this.symbols.SDL_Vulkan_DestroySurface(
    options.instance,
    options.surface,
    options.allocator ?? null
  );
}

export function vulkanGetPresentationSupport(
  this: SDL,
  options: {
    instance: VkInstance;
    physicalDevice: VkPhysicalDevice;
    queueFamilyIndex: UInt32;
  }
) {
  return this.symbols.SDL_Vulkan_GetPresentationSupport(
    options.instance,
    options.physicalDevice,
    options.queueFamilyIndex
  );
}
