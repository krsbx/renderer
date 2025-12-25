import { FFIType, type FFIFunction } from 'bun:ffi';

export const VulkanDefinition = {
  // bool SDL_Vulkan_LoadLibrary(const char *path);                                                                                                 // Dynamically load the Vulkan loader library.
  SDL_Vulkan_LoadLibrary: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
  // SDL_FunctionPointer SDL_Vulkan_GetVkGetInstanceProcAddr(void);                                                                                 // Get the address of the `vkGetInstanceProcAddr` function.
  SDL_Vulkan_GetVkGetInstanceProcAddr: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SDL_Vulkan_UnloadLibrary(void);                                                                                                           // Unload the Vulkan library previously loaded by SDL_Vulkan_LoadLibrary().
  SDL_Vulkan_UnloadLibrary: {
    args: [],
    returns: FFIType.void,
  },
  // char const * const * SDL_Vulkan_GetInstanceExtensions(Uint32 *count);                                                                          // Get the Vulkan instance extensions needed for vkCreateInstance.
  SDL_Vulkan_GetInstanceExtensions: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_Vulkan_CreateSurface(SDL_Window *window, VkInstance instance, const struct VkAllocationCallbacks *allocator, VkSurfaceKHR *surface);  // Create a Vulkan rendering surface for a window.
  SDL_Vulkan_CreateSurface: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_Vulkan_DestroySurface(VkInstance instance, VkSurfaceKHR surface, const struct VkAllocationCallbacks *allocator);                      // Destroy the Vulkan rendering surface of a window.
  SDL_Vulkan_DestroySurface: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_Vulkan_GetPresentationSupport(VkInstance instance, VkPhysicalDevice physicalDevice, Uint32 queueFamilyIndex);                         // Query support for presentation via a given physical device and queue family.
  SDL_Vulkan_GetPresentationSupport: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
