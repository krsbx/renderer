import type { SDL } from '@/sdl';
import type { IOStream } from '@/sdl/types/definition';
import { stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import { type IOStatus, type IOWhence } from '../../../ffi/io-stream/constant';
import { IOStreamInterface } from '../struct';

export function ioFromFile(
  this: SDL,
  options: {
    file: string;
    mode: string;
  }
) {
  return this.symbols.SDL_IOFromFile(
    stringToCString(options.file).ptr,
    stringToCString(options.mode).ptr
  ) as IOStream | null;
}

export function ioFromMem(this: SDL, mem: Uint8Array) {
  return this.symbols.SDL_IOFromMem(mem, mem.byteLength) as IOStream | null;
}

export function ioFromConstMem(this: SDL, mem: Uint8Array) {
  return this.symbols.SDL_IOFromConstMem(
    mem,
    mem.byteLength
  ) as IOStream | null;
}

export function ioFromDynamicMem(this: SDL) {
  return this.symbols.SDL_IOFromDynamicMem() as IOStream | null;
}

export function openIO(
  this: SDL,
  options: {
    iface: IOStreamInterface;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_OpenIO(
    options.iface.$memory,
    options.userdata ?? null
  ) as IOStream | null;
}

export function closeIO(this: SDL, context: IOStream) {
  return this.symbols.SDL_CloseIO(context);
}

export function getIOProperties(this: SDL, context: IOStream) {
  return this.symbols.SDL_GetIOProperties(context);
}

export function getIOStatus(this: SDL, context: IOStream) {
  return this.symbols.SDL_GetIOStatus(context) as IOStatus;
}

export function getIOSize(this: SDL, context: IOStream) {
  return this.symbols.SDL_GetIOSize(context);
}

export function seekIO(
  this: SDL,
  options: {
    context: IOStream;
    offset: number | bigint;
    whence: IOWhence;
  }
) {
  return this.symbols.SDL_SeekIO(
    options.context,
    options.offset,
    options.whence
  );
}

export function tellIO(this: SDL, context: IOStream) {
  return this.symbols.SDL_TellIO(context);
}

export function flushIO(this: SDL, context: IOStream) {
  return this.symbols.SDL_FlushIO(context);
}
