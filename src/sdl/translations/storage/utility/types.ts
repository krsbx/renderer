import { CString, JSCallback, type Library, type Pointer } from 'bun:ffi';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { StorageInterfaceDefinition } from './definition';

export interface EnumerateDirectoryOptions {
  userdata?: Pointer | null;
  path: CString;
  callback: JSCallback;
  callback_userdata?: Pointer | null;
}

export interface InfoOptions {
  userdata?: Pointer | null;
  path: CString;
}

export interface ReadFileOptionss {
  userdata?: Pointer | null;
  length?: bigint;
  path: CString;
}

export interface WriteFileOptions {
  userdata?: Pointer | null;
  path: CString;
  source: Uint8Array;
}

export interface MkdirOptions {
  userdata?: Pointer | null;
  path: CString;
}

export interface RemoveOptions {
  userdata?: Pointer | null;
  path: CString;
}

export interface RenameOptions {
  userdata?: Pointer | null;
  oldPath: CString;
  newPath: CString;
}

export interface CopyOptions {
  userdata?: Pointer | null;
  oldPath: CString;
  newPath: CString;
}

export interface CreateFfiOptions {
  closePtr: Pointer;
  readyPtr: Pointer;
  enumeratePtr: Pointer;
  infoPtr: Pointer;
  read_filePtr: Pointer;
  write_filePtr: Pointer;
  mkdirPtr: Pointer;
  removePtr: Pointer;
  renamePtr: Pointer;
  copyPtr: Pointer;
  spaceRemainingPtr: Pointer;
}

export interface RawStorageInterface extends FreeAddress, MemoryAddress {
  /* The version of this interface */
  version: number;

  $ffi: Library<StorageInterfaceDefinition>;
}
