import { type FFIFunction } from 'bun:ffi';

export const BitsDefinition = {
  // int SDL_MostSignificantBitIndex32(Uint32 x);  // Get the index of the most significant (set) bit in a 32-bit number.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_MostSignificantBitIndex32: {
  //   args: [FFIType.u32],
  //   returns: FFIType.i32,
  // },
  // bool SDL_HasExactlyOneBitSet32(Uint32 x);     // Determine if a unsigned 32-bit value has exactly one bit set.
  // Comment out since FFI cannot use any SDL_FORCE_INLINE function
  // SDL_HasExactlyOneBitSet32: {
  //   args: [FFIType.u32],
  //   returns: FFIType.bool,
  // },
} satisfies Record<string, FFIFunction>;
