import type { SDL } from '@/sdl';
import type { IOStream } from '@/sdl/types/definition';

export function writeIO(
  this: SDL,
  options: {
    context: IOStream;
    ptr: Uint8Array;
  }
) {
  return this.symbols.SDL_WriteIO(
    options.context,
    options.ptr,
    options.ptr.byteLength
  );
}

export function writeU8(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU8(options.dst, options.value);
}

export function writeS8(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS8(options.dst, options.value);
}

export function writeU16LE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU16LE(options.dst, options.value);
}

export function writeS16LE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS16LE(options.dst, options.value);
}

export function writeU16BE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU16BE(options.dst, options.value);
}

export function writeS16BE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS16BE(options.dst, options.value);
}

export function writeU32LE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU32LE(options.dst, options.value);
}

export function writeS32LE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS32LE(options.dst, options.value);
}

export function writeU32BE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU32BE(options.dst, options.value);
}

export function writeS32BE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS32BE(options.dst, options.value);
}

export function writeU64LE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number | bigint;
  }
) {
  return this.symbols.SDL_WriteU64LE(options.dst, options.value);
}

export function writeS64LE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number | bigint;
  }
) {
  return this.symbols.SDL_WriteS64LE(options.dst, options.value);
}

export function writeU64BE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number | bigint;
  }
) {
  return this.symbols.SDL_WriteU64BE(options.dst, options.value);
}

export function writeS64BE(
  this: SDL,
  options: {
    dst: IOStream;
    value: number | bigint;
  }
) {
  return this.symbols.SDL_WriteS64BE(options.dst, options.value);
}
