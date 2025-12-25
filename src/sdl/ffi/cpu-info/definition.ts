import { FFIType, type FFIFunction } from 'bun:ffi';

export const CPUInfoDefinition = {
  // int SDL_GetNumLogicalCPUCores(void);  // Get the number of logical CPU cores available.
  SDL_GetNumLogicalCPUCores: {
    args: [],
    returns: FFIType.i32,
  },
  // int SDL_GetCPUCacheLineSize(void);    // Determine the L1 cache line size of the CPU.
  SDL_GetCPUCacheLineSize: {
    args: [],
    returns: FFIType.i32,
  },
  // bool SDL_HasAltiVec(void);            // Determine whether the CPU has AltiVec features.
  SDL_HasAltiVec: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasMMX(void);                // Determine whether the CPU has MMX features.
  SDL_HasMMX: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasSSE(void);                // Determine whether the CPU has SSE features.
  SDL_HasSSE: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasSSE2(void);               // Determine whether the CPU has SSE2 features.
  SDL_HasSSE2: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasSSE3(void);               // Determine whether the CPU has SSE3 features.
  SDL_HasSSE3: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasSSE41(void);              // Determine whether the CPU has SSE4.1 features.
  SDL_HasSSE41: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasSSE42(void);              // Determine whether the CPU has SSE4.2 features.
  SDL_HasSSE42: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasAVX(void);                // Determine whether the CPU has AVX features.
  SDL_HasAVX: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasAVX2(void);               // Determine whether the CPU has AVX2 features.
  SDL_HasAVX2: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasAVX512F(void);            // Determine whether the CPU has AVX-512F (foundation) features.
  SDL_HasAVX512F: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasARMSIMD(void);            // Determine whether the CPU has ARM SIMD (ARMv6) features.
  SDL_HasARMSIMD: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasNEON(void);               // Determine whether the CPU has NEON (ARM SIMD) features.
  SDL_HasNEON: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasLSX(void);                // Determine whether the CPU has LSX (LOONGARCH SIMD) features.
  SDL_HasLSX: {
    args: [],
    returns: FFIType.bool,
  },
  // bool SDL_HasLASX(void);               // Determine whether the CPU has LASX (LOONGARCH SIMD) features.
  SDL_HasLASX: {
    args: [],
    returns: FFIType.bool,
  },
  // int SDL_GetSystemRAM(void);           // Get the amount of RAM configured in the system.
  SDL_GetSystemRAM: {
    args: [],
    returns: FFIType.i32,
  },
  // size_t SDL_GetSIMDAlignment(void);    // Report the alignment this system needs for SIMD allocations.
  SDL_GetSIMDAlignment: {
    args: [],
    returns: FFIType.u64,
  },
  // int SDL_GetSystemPageSize(void);      // Report the size of a page of memory.
  SDL_GetSystemPageSize: {
    args: [],
    returns: FFIType.i32,
  },
} satisfies Record<string, FFIFunction>;
