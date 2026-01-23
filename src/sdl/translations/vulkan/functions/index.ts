import { CString, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { stringToCString } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';

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
    countStruct.$address
  );

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'u32');
  const list = new CStruct({ address: listPtr });
  const extensions: string[] = [];

  for (let i = 0; i < count; i++) {
    const extensionPtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!extensionPtr) continue;

    extensions.push(new CString(extensionPtr).toString());
  }

  return extensions;
}

export function vulkanCreateSurface(
  this: SDL,
  options: {
    window: Pointer;
    instance: Pointer;
    allocator?: Pointer | null;
  }
) {
  const surfaceStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const success = this.symbols.SDL_Vulkan_CreateSurface(
    options.window,
    options.instance,
    options.allocator ?? null,
    surfaceStruct.$address
  );

  if (!success) return null;

  return Number(surfaceStruct.getValue(0, 'u64')) as Pointer;
}

export function vulkanDestroySurface(
  this: SDL,
  options: {
    instance: Pointer;
    surface: Pointer;
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
    instance: Pointer;
    physicalDevice: Pointer;
    queueFamilyIndex: number;
  }
) {
  return this.symbols.SDL_Vulkan_GetPresentationSupport(
    options.instance,
    options.physicalDevice,
    options.queueFamilyIndex
  );
}
