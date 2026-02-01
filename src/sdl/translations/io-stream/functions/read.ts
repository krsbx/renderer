import type { SDL } from '@/sdl';
import type { IOStream } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';

export function readIO(
  this: SDL,
  options: {
    context: IOStream;
    ptr: Uint8Array;
  }
) {
  return this.symbols.SDL_ReadIO(
    options.context,
    options.ptr,
    options.ptr.byteLength
  );
}

export function readU8(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u8 });
  const success = this.symbols.SDL_ReadU8(src, struct.$memory);

  return success ? struct.getValue(0, 'u8') : null;
}

export function readS8(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i8 });
  const success = this.symbols.SDL_ReadS8(src, struct.$memory);

  return success ? struct.getValue(0, 'i8') : null;
}

export function readU16LE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const success = this.symbols.SDL_ReadU16LE(src, struct.$memory);

  return success ? struct.getValue(0, 'u16') : null;
}

export function readS16LE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i16 });
  const success = this.symbols.SDL_ReadS16LE(src, struct.$memory);

  return success ? struct.getValue(0, 'i16') : null;
}

export function readU16BE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const success = this.symbols.SDL_ReadU16BE(src, struct.$memory);

  return success ? struct.getValue(0, 'u16') : null;
}

export function readS16BE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i16 });
  const success = this.symbols.SDL_ReadS16BE(src, struct.$memory);

  return success ? struct.getValue(0, 'i16') : null;
}

export function readU32LE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const success = this.symbols.SDL_ReadU32LE(src, struct.$memory);

  return success ? struct.getValue(0, 'u32') : null;
}

export function readS32LE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const success = this.symbols.SDL_ReadS32LE(src, struct.$memory);

  return success ? struct.getValue(0, 'i32') : null;
}

export function readU32BE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const success = this.symbols.SDL_ReadU32BE(src, struct.$memory);

  return success ? struct.getValue(0, 'u32') : null;
}

export function readS32BE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const success = this.symbols.SDL_ReadS32BE(src, struct.$memory);

  return success ? struct.getValue(0, 'i32') : null;
}

export function readU64LE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });
  const success = this.symbols.SDL_ReadU64LE(src, struct.$memory);

  return success ? struct.getValue(0, 'u64') : null;
}

export function readS64LE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i64 });
  const success = this.symbols.SDL_ReadS64LE(src, struct.$memory);

  return success ? struct.getValue(0, 'i64') : null;
}

export function readU64BE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });
  const success = this.symbols.SDL_ReadU64BE(src, struct.$memory);

  return success ? struct.getValue(0, 'u64') : null;
}

export function readS64BE(this: SDL, src: IOStream) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i64 });
  const success = this.symbols.SDL_ReadS64BE(src, struct.$memory);

  return success ? struct.getValue(0, 'i64') : null;
}
