import { type FFIFunction } from 'bun:ffi';

export const EndianDefinition = {
  // float SDL_SwapFloat(float x);  // Byte-swap a floating point number.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_SwapFloat: {
  //   args: [FFIType.f32],
  //   returns: FFIType.f32,
  // },
  // Uint16 SDL_Swap16(Uint16 x);   // Byte-swap an unsigned 16-bit number.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_Swap16: {
  //   args: [FFIType.u16],
  //   returns: FFIType.u16,
  // },
  // Uint32 SDL_Swap32(Uint32 x);   // Byte-swap an unsigned 32-bit number.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_Swap32: {
  //   args: [FFIType.u32],
  //   returns: FFIType.u32,
  // },
  // Uint64 SDL_Swap64(Uint64 x);   // Byte-swap an unsigned 64-bit number.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_Swap64: {
  //   args: [FFIType.u64],
  //   returns: FFIType.u64,
  // },
} satisfies Record<string, FFIFunction>;
