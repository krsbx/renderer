import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructMemoryAddress, stringToCString } from '@utility/common';
import { type Pointer } from 'bun:ffi';

export function ioprintf(
  this: SDL,
  options: {
    context: Pointer;
    fmt: string;
  }
) {
  return this.symbols.SDL_IOprintf(
    options.context,
    stringToCString(options.fmt).ptr
  );
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

export function loadFile(this: SDL, file: string) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const dataPtr = this.symbols.SDL_LoadFile(
    stringToCString(file).ptr,
    struct.$address
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

export function saveFileIO(
  this: SDL,
  options: {
    src: Pointer;
    data: Pointer | Uint8Array;
    datasize: number;
    closeio: boolean;
  }
) {
  return this.symbols.SDL_SaveFile_IO(
    options.src,
    getStructMemoryAddress(options.data),
    options.datasize,
    options.closeio
  );
}

export function saveFile(
  this: SDL,
  options: {
    file: string;
    data: Pointer | Uint8Array;
    datasize: number;
  }
) {
  return this.symbols.SDL_SaveFile(
    stringToCString(options.file).ptr,
    getStructMemoryAddress(options.data),
    options.datasize
  );
}
