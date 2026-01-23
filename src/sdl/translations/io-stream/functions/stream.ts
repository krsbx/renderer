import { type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { type IOStatus, type IOWhence } from '../../../ffi/io-stream/constant';
import {
  getStructAddress,
  getStructMemoryAddress,
  stringToCString,
} from '../../../utility/common';
import { IOStreamInterface } from '../utility';

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
  );
}

export function ioFromMem(
  this: SDL,
  options: {
    mem: Pointer | Uint8Array;
    size: number;
  }
) {
  return this.symbols.SDL_IOFromMem(
    getStructMemoryAddress(options.mem),
    options.size
  );
}

export function ioFromConstMem(
  this: SDL,
  options: {
    mem: Pointer | Uint8Array;
    size: number;
  }
) {
  return this.symbols.SDL_IOFromConstMem(
    getStructMemoryAddress(options.mem),
    options.size
  );
}

export function ioFromDynamicMem(this: SDL) {
  return this.symbols.SDL_IOFromDynamicMem();
}

export function openIO(
  this: SDL,
  options: {
    iface: IOStreamInterface | Pointer;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_OpenIO(
    getStructAddress(options.iface),
    options.userdata ?? null
  );
}

export function closeIO(this: SDL, context: Pointer) {
  return this.symbols.SDL_CloseIO(context);
}

export function getIOProperties(this: SDL, context: Pointer) {
  return this.symbols.SDL_GetIOProperties(context);
}

export function getIOStatus(this: SDL, context: Pointer) {
  return this.symbols.SDL_GetIOStatus(context) as IOStatus;
}

export function getIOSize(this: SDL, context: Pointer) {
  return this.symbols.SDL_GetIOSize(context);
}

export function seekIO(
  this: SDL,
  options: {
    context: Pointer;
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

export function tellIO(this: SDL, context: Pointer) {
  return this.symbols.SDL_TellIO(context);
}

export function flushIO(this: SDL, context: Pointer) {
  return this.symbols.SDL_FlushIO(context);
}
