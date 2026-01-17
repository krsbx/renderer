import { CString, ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { type IOStatus, type IOWhence } from '../../../ffi/io-stream/constant';
import { IOStreamInterface } from '../utility';

export function ioFromFile(
  this: SDL,
  options: {
    file: CString;
    mode: CString;
  }
) {
  return this.symbols.SDL_IOFromFile(options.file.ptr, options.mode.ptr);
}

export function ioFromMem(
  this: SDL,
  options: {
    mem: Pointer | Uint8Array;
    size: number;
  }
) {
  const memPtr =
    options.mem instanceof Uint8Array ? ptr(options.mem) : options.mem;

  return this.symbols.SDL_IOFromMem(memPtr, options.size);
}

export function ioFromConstMem(
  this: SDL,
  options: {
    mem: Pointer | Uint8Array;
    size: number;
  }
) {
  const memPtr =
    options.mem instanceof Uint8Array ? ptr(options.mem) : options.mem;

  return this.symbols.SDL_IOFromConstMem(memPtr, options.size);
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
  const ifacePtr =
    options.iface instanceof IOStreamInterface
      ? options.iface.$address
      : options.iface;

  return this.symbols.SDL_OpenIO(ifacePtr, options.userdata ?? null);
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
