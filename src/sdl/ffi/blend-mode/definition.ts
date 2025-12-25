import { FFIType, type FFIFunction } from 'bun:ffi';

export const BlendModeDefinition = {
  // SDL_BlendMode SDL_ComposeCustomBlendMode(SDL_BlendFactor srcColorFactor, SDL_BlendFactor dstColorFactor, SDL_BlendOperation colorOperation, SDL_BlendFactor srcAlphaFactor, SDL_BlendFactor dstAlphaFactor, SDL_BlendOperation alphaOperation);  // Compose a custom blend mode for renderers.
  SDL_ComposeCustomBlendMode: {
    args: [
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
      FFIType.i32,
    ],
    returns: FFIType.u32,
  },
} satisfies Record<string, FFIFunction>;
