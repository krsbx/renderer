import { FFIType, type FFIFunction } from 'bun:ffi';

export const LocaleDefinition = {
  // SDL_Locale ** SDL_GetPreferredLocales(int *count);  // Report the user's preferred locale.
  SDL_GetPreferredLocales: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
