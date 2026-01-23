import { CString, ptr, type JSCallback, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { GlobFlags } from '../../../ffi/file-system/constant';
import { getStructAddress, stringToCString } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';
import { PathInfo } from '../../file-system/utility';
import { StorageInterface } from '../utility';

export function openTitleStorage(
  this: SDL,
  options: {
    override?: string | null;
    props: number;
  }
) {
  return this.symbols.SDL_OpenTitleStorage(
    options.override ? stringToCString(options.override).ptr : null,
    options.props
  );
}

export function openUserStorage(
  this: SDL,
  options: {
    org: string;
    app: string;
    props: number;
  }
) {
  return this.symbols.SDL_OpenUserStorage(
    stringToCString(options.org).ptr,
    stringToCString(options.app).ptr,
    options.props
  );
}

export function openFileStorage(this: SDL, path: string) {
  return this.symbols.SDL_OpenFileStorage(stringToCString(path).ptr);
}

export function openStorage(
  this: SDL,
  options: {
    iface: StorageInterface | Pointer;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_OpenStorage(
    getStructAddress(options.iface),
    options.userdata ?? null
  );
}

export function closeStorage(this: SDL, storage: Pointer) {
  return this.symbols.SDL_CloseStorage(storage);
}

export function storageReady(this: SDL, storage: Pointer) {
  return this.symbols.SDL_StorageReady(storage);
}

export function getStorageFileSize(
  this: SDL,
  options: {
    storage: Pointer;
    path: string;
  }
) {
  const lengthStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const success = this.symbols.SDL_GetStorageFileSize(
    options.storage,
    stringToCString(options.path).ptr,
    lengthStruct.$address
  );

  if (!success) return null;

  return lengthStruct.getValue(0, 'u64');
}

export function readStorageFile(
  this: SDL,
  options: {
    storage: Pointer;
    path: string;
    length?: bigint | null;
  }
) {
  const length =
    options.length ??
    this.getStorageFileSize({
      storage: options.storage,
      path: options.path,
    });

  if (!length) return null;

  const destination = new Uint8Array(Number(length));

  const success = this.symbols.SDL_ReadStorageFile(
    options.storage,
    stringToCString(options.path).ptr,
    ptr(destination),
    length
  );

  return success ? destination : null;
}

export function writeStorageFile(
  this: SDL,
  options: {
    storage: Pointer;
    path: string;
    source: Pointer | Uint8Array;
    length: bigint;
  }
) {
  return this.symbols.SDL_WriteStorageFile(
    options.storage,
    stringToCString(options.path).ptr,
    options.source,
    options.length
  );
}

export function createStorageDirectory(
  this: SDL,
  options: {
    storage: Pointer;
    path: string;
  }
) {
  return this.symbols.SDL_CreateStorageDirectory(
    options.storage,
    stringToCString(options.path).ptr
  );
}

export function enumerateStorageDirectory(
  this: SDL,
  options: {
    storage: Pointer;
    path: string;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_EnumerateStorageDirectory(
    options.storage,
    stringToCString(options.path).ptr,
    options.callback.ptr,
    options.userdata ?? null
  );
}

export function removeStoragePath(
  this: SDL,
  options: {
    storage: Pointer;
    path: string;
  }
) {
  return this.symbols.SDL_RemoveStoragePath(
    options.storage,
    stringToCString(options.path).ptr
  );
}

export function renameStoragePath(
  this: SDL,
  options: {
    storage: Pointer;
    oldpath: string;
    newpath: string;
  }
) {
  return this.symbols.SDL_RenameStoragePath(
    options.storage,
    stringToCString(options.oldpath).ptr,
    stringToCString(options.newpath).ptr
  );
}

export function copyStorageFile(
  this: SDL,
  options: {
    storage: Pointer;
    oldpath: string;
    newpath: string;
  }
) {
  return this.symbols.SDL_CopyStorageFile(
    options.storage,
    stringToCString(options.oldpath).ptr,
    stringToCString(options.newpath).ptr
  );
}

export function getStoragePathInfo(
  this: SDL,
  options: {
    storage: Pointer;
    path: string;
  }
) {
  const info = new PathInfo(PathInfo.allocMemory());

  const success = this.symbols.SDL_GetStoragePathInfo(
    options.storage,
    stringToCString(options.path).ptr,
    info.$address
  );

  if (!success) return null;

  return info;
}

export function getStorageSpaceRemaining(this: SDL, storage: Pointer) {
  return this.symbols.SDL_GetStorageSpaceRemaining(storage);
}

export function globStorageDirectory(
  this: SDL,
  options: {
    storage: Pointer;
    path: string;
    pattern?: string | null;
    flags?: GlobFlags | null;
  }
) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GlobStorageDirectory(
    options.storage,
    stringToCString(options.path).ptr,
    options.pattern ? stringToCString(options.pattern).ptr : null,
    options.flags ?? 0,
    countStruct.$address
  );

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const paths: string[] = [];

  for (let i = 0; i < count; i++) {
    const pathPtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!pathPtr) continue;

    paths.push(new CString(pathPtr).toString());
  }

  this.symbols.SDL_free(listPtr);

  return paths;
}
