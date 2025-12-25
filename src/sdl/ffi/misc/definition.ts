import { FFIType, type FFIFunction } from 'bun:ffi';

export const MiscDefinition = {
  // bool SDL_OpenURL(const char *url);  // Open a URL/URI in the browser or other appropriate external application.
  SDL_OpenURL: {
    args: [FFIType.cstring],
    returns: FFIType.bool,
  },
} satisfies Record<string, FFIFunction>;
