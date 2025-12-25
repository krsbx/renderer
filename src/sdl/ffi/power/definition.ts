import { FFIType, type FFIFunction } from 'bun:ffi';

export const PowerDefinition = {
  // SDL_PowerState SDL_GetPowerInfo(int *seconds, int *percent);  // Get the current power supply details.
  SDL_GetPowerInfo: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
} satisfies Record<string, FFIFunction>;
