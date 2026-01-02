import { type Library, type Pointer } from 'bun:ffi';
import type { IOWhence } from '../../../ffi/io-stream/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { IOStreamInterfaceDefinition } from './definition';

export interface SeekOptions {
  userData?: Pointer | null;
  offset: bigint;
  whence: IOWhence;
}

export interface ReadOptions {
  userData?: Pointer | null;
  ptr: Pointer;
  size: number;
}

export interface WriteOptions {
  userData?: Pointer | null;
  ptr: Pointer;
  size: number;
}

export interface RawIOStreamInterface extends FreeAddress, MemoryAddress {
  version: number;

  $ffi: Library<IOStreamInterfaceDefinition>;
}

export interface CreateFfiOptions {
  sizePtr: Pointer;
  seekPtr: Pointer;
  readPtr: Pointer;
  writePtr: Pointer;
  flushPtr: Pointer;
  closePtr: Pointer;
}
