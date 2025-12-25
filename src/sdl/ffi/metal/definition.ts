import { FFIType, type FFIFunction } from 'bun:ffi';

export const MetalDefinition = {
  // SDL_MetalView SDL_Metal_CreateView(SDL_Window *window);  // Create a CAMetalLayer-backed NSView/UIView and attach it to the specified window.
  SDL_Metal_CreateView: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_Metal_DestroyView(SDL_MetalView view);          // Destroy an existing SDL_MetalView object.
  SDL_Metal_DestroyView: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void * SDL_Metal_GetLayer(SDL_MetalView view);           // Get a pointer to the backing CAMetalLayer for the given view.
  SDL_Metal_GetLayer: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
