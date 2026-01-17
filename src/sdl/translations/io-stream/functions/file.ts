import { CString, ptr, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { CStruct } from '../../../utility/cstruct';

export function ioprintf(
  this: SDL,
  options: {
    context: Pointer;
    fmt: CString;
  }
) {
  return this.symbols.SDL_IOprintf(options.context, options.fmt.ptr);
}

export function iovprintf(this: SDL) {
  throw new Error('Not implemented');
}

export function loadFileIO(
  this: SDL,
  options: {
    src: Pointer;
    closeio: boolean;
  }
) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const dataPtr = this.symbols.SDL_LoadFile_IO(
    options.src,
    struct.$address,
    options.closeio
  );

  if (!dataPtr) return null;

  const size = Number(struct.getValue(0, 'u64'));
  const data = new CStruct({ length: size, address: dataPtr }).clone().$memory;

  this.symbols.SDL_free(dataPtr);

  return {
    data,
    size,
  };
}

export function loadFile(this: SDL, file: CString) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const dataPtr = this.symbols.SDL_LoadFile(file.ptr, struct.$address);

  if (!dataPtr) return null;

  const size = Number(struct.getValue(0, 'u64'));
  const data = new CStruct({ length: size, address: dataPtr }).clone().$memory;

  this.symbols.SDL_free(dataPtr);

  return {
    data,
    size,
  };
}

export function saveFileIO(
  this: SDL,
  options: {
    src: Pointer;
    data: Pointer | Uint8Array;
    datasize: number;
    closeio: boolean;
  }
) {
  const dataPtr =
    options.data instanceof Uint8Array ? ptr(options.data) : options.data;

  return this.symbols.SDL_SaveFile_IO(
    options.src,
    dataPtr,
    options.datasize,
    options.closeio
  );
}

export function saveFile(
  this: SDL,
  options: {
    file: CString;
    data: Pointer | Uint8Array;
    datasize: number;
  }
) {
  const dataPtr =
    options.data instanceof Uint8Array ? ptr(options.data) : options.data;

  return this.symbols.SDL_SaveFile(options.file.ptr, dataPtr, options.datasize);
}
