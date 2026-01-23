import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { getStructMemoryAddress } from '../../../utility/common';

export function writeIO(
  this: SDL,
  options: {
    context: Pointer;
    ptr: Pointer | Uint8Array;
    size: number;
  }
) {
  return this.symbols.SDL_WriteIO(
    options.context,
    getStructMemoryAddress(options.ptr),
    options.size
  );
}

export function writeU8(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU8(options.dst, options.value);
}

export function writeS8(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS8(options.dst, options.value);
}

export function writeU16LE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU16LE(options.dst, options.value);
}

export function writeS16LE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS16LE(options.dst, options.value);
}

export function writeU16BE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU16BE(options.dst, options.value);
}

export function writeS16BE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS16BE(options.dst, options.value);
}

export function writeU32LE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU32LE(options.dst, options.value);
}

export function writeS32LE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS32LE(options.dst, options.value);
}

export function writeU32BE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteU32BE(options.dst, options.value);
}

export function writeS32BE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number;
  }
) {
  return this.symbols.SDL_WriteS32BE(options.dst, options.value);
}

export function writeU64LE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number | bigint;
  }
) {
  return this.symbols.SDL_WriteU64LE(options.dst, options.value);
}

export function writeS64LE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number | bigint;
  }
) {
  return this.symbols.SDL_WriteS64LE(options.dst, options.value);
}

export function writeU64BE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number | bigint;
  }
) {
  return this.symbols.SDL_WriteU64BE(options.dst, options.value);
}

export function writeS64BE(
  this: SDL,
  options: {
    dst: Pointer;
    value: number | bigint;
  }
) {
  return this.symbols.SDL_WriteS64BE(options.dst, options.value);
}
