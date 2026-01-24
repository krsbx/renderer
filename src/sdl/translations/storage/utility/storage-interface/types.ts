import { JSCallback, type Pointer } from 'bun:ffi';

export interface EnumerateDirectoryOptions {
  userdata?: Pointer | null;
  path: string;
  callback: JSCallback;
  callbackUserdata?: Pointer | null;
}

export interface InfoOptions {
  userdata?: Pointer | null;
  path: string;
}

export interface ReadFileOptionss {
  userdata?: Pointer | null;
  length?: bigint;
  path: string;
}

export interface WriteFileOptions {
  userdata?: Pointer | null;
  path: string;
  source: Uint8Array;
}

export interface MkdirOptions {
  userdata?: Pointer | null;
  path: string;
}

export interface RemoveOptions {
  userdata?: Pointer | null;
  path: string;
}

export interface RenameOptions {
  userdata?: Pointer | null;
  oldPath: string;
  newPath: string;
}

export interface CopyOptions {
  userdata?: Pointer | null;
  oldPath: string;
  newPath: string;
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
