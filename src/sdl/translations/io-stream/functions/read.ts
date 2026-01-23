import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { getStructMemoryAddress } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';

export function readIO(
  this: SDL,
  options: {
    context: Pointer;
    ptr: Pointer | Uint8Array;
    size: number;
  }
) {
  return this.symbols.SDL_ReadIO(
    options.context,
    getStructMemoryAddress(options.ptr),
    options.size
  );
}

export function readU8(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const success = this.symbols.SDL_ReadU8(src, struct.$address);

  return success ? struct.getValue(0, 'u8') : null;
}

export function readS8(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i8 });
  const success = this.symbols.SDL_ReadS8(src, struct.$address);

  return success ? struct.getValue(0, 'i8') : null;
}

export function readU16LE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const success = this.symbols.SDL_ReadU16LE(src, struct.$address);

  return success ? struct.getValue(0, 'u16') : null;
}

export function readS16LE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i16 });
  const success = this.symbols.SDL_ReadS16LE(src, struct.$address);

  return success ? struct.getValue(0, 'i16') : null;
}

export function readU16BE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const success = this.symbols.SDL_ReadU16BE(src, struct.$address);

  return success ? struct.getValue(0, 'u16') : null;
}

export function readS16BE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i16 });
  const success = this.symbols.SDL_ReadS16BE(src, struct.$address);

  return success ? struct.getValue(0, 'i16') : null;
}

export function readU32LE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const success = this.symbols.SDL_ReadU32LE(src, struct.$address);

  return success ? struct.getValue(0, 'u32') : null;
}

export function readS32LE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const success = this.symbols.SDL_ReadS32LE(src, struct.$address);

  return success ? struct.getValue(0, 'i32') : null;
}

export function readU32BE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const success = this.symbols.SDL_ReadU32BE(src, struct.$address);

  return success ? struct.getValue(0, 'u32') : null;
}

export function readS32BE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const success = this.symbols.SDL_ReadS32BE(src, struct.$address);

  return success ? struct.getValue(0, 'i32') : null;
}

export function readU64LE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });
  const success = this.symbols.SDL_ReadU64LE(src, struct.$address);

  return success ? struct.getValue(0, 'u64') : null;
}

export function readS64LE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i64 });
  const success = this.symbols.SDL_ReadS64LE(src, struct.$address);

  return success ? struct.getValue(0, 'i64') : null;
}

export function readU64BE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });
  const success = this.symbols.SDL_ReadU64BE(src, struct.$address);

  return success ? struct.getValue(0, 'u64') : null;
}

export function readS64BE(this: SDL, src: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i64 });
  const success = this.symbols.SDL_ReadS64BE(src, struct.$address);

  return success ? struct.getValue(0, 'i64') : null;
}
