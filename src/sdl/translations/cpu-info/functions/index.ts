import type { SDL } from '../../..';

export function getNumLogicalCPUCores(this: SDL) {
  return this.symbols.SDL_GetNumLogicalCPUCores();
}

export function getCPUCacheLineSize(this: SDL) {
  return this.symbols.SDL_GetCPUCacheLineSize();
}

export function hasAltiVec(this: SDL) {
  return this.symbols.SDL_HasAltiVec();
}

export function hasMMX(this: SDL) {
  return this.symbols.SDL_HasMMX();
}

export function hasSSE(this: SDL) {
  return this.symbols.SDL_HasSSE();
}

export function hasSSE2(this: SDL) {
  return this.symbols.SDL_HasSSE2();
}

export function hasSSE3(this: SDL) {
  return this.symbols.SDL_HasSSE3();
}

export function hasSSE41(this: SDL) {
  return this.symbols.SDL_HasSSE41();
}

export function hasSSE42(this: SDL) {
  return this.symbols.SDL_HasSSE42();
}

export function hasAVX(this: SDL) {
  return this.symbols.SDL_HasAVX();
}

export function hasAVX2(this: SDL) {
  return this.symbols.SDL_HasAVX2();
}

export function hasAVX512F(this: SDL) {
  return this.symbols.SDL_HasAVX512F();
}

export function hasARMSIMD(this: SDL) {
  return this.symbols.SDL_HasARMSIMD();
}

export function hasNEON(this: SDL) {
  return this.symbols.SDL_HasNEON();
}

export function hasLSX(this: SDL) {
  return this.symbols.SDL_HasLSX();
}

export function hasLASX(this: SDL) {
  return this.symbols.SDL_HasLASX();
}

export function getSystemRAM(this: SDL) {
  return this.symbols.SDL_GetSystemRAM();
}

export function getSIMDAlignment(this: SDL) {
  return this.symbols.SDL_GetSIMDAlignment();
}

export function getSystemPageSize(this: SDL) {
  return this.symbols.SDL_GetSystemPageSize();
}
