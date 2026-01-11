import { type Pointer } from 'bun:ffi';
import type { IOWhence } from '../../../../ffi/io-stream/constant';

export interface SeekOptions {
  userdata?: Pointer | null;
  offset: bigint;
  whence: IOWhence;
}

export interface ReadOptions {
  userdata?: Pointer | null;
  ptr: Pointer;
  size: number;
}

export interface WriteOptions {
  userdata?: Pointer | null;
  ptr: Pointer;
  size: number;
}

export interface CreateFfiOptions {
  sizePtr: Pointer;
  seekPtr: Pointer;
  readPtr: Pointer;
  writePtr: Pointer;
  flushPtr: Pointer;
  closePtr: Pointer;
}
