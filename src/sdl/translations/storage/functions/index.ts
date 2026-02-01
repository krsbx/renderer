import type { SDL } from '@/sdl';
import type { Storage } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { ptr, type Pointer } from 'bun:ffi';
import type { GlobFlags } from '../../../ffi/file-system/constant';
import { PathInfo } from '../../file-system/struct';
import { StorageInterface } from '../struct';
import type { EnumerateStorageDirectoryCallbackFn } from '../types/callback';
import { createEnumerateStorageDirectoryCallback } from '../utility/callback';

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
  ) as Storage | null;
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
  ) as Storage | null;
}

export function openFileStorage(this: SDL, path?: string | null) {
  return this.symbols.SDL_OpenFileStorage(
    path ? stringToCString(path).ptr : null
  ) as Storage | null;
}

export function openStorage(
  this: SDL,
  options: {
    iface: StorageInterface;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_OpenStorage(
    options.iface.$address,
    options.userdata ?? null
  ) as Storage | null;
}

export function closeStorage(this: SDL, storage: Storage) {
  return this.symbols.SDL_CloseStorage(storage);
}

export function storageReady(this: SDL, storage: Storage) {
  return this.symbols.SDL_StorageReady(storage);
}

export function getStorageFileSize(
  this: SDL,
  options: {
    storage: Storage;
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
    storage: Storage;
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
    storage: Storage;
    path: string;
    source: Uint8Array;
  }
) {
  return this.symbols.SDL_WriteStorageFile(
    options.storage,
    stringToCString(options.path).ptr,
    options.source,
    BigInt(options.source.byteLength)
  );
}

export function createStorageDirectory(
  this: SDL,
  options: {
    storage: Storage;
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
    storage: Storage;
    path?: string | null;
    callback: EnumerateStorageDirectoryCallbackFn;
  }
) {
  const cb = createEnumerateStorageDirectoryCallback(options.callback);

  const success = this.symbols.SDL_EnumerateStorageDirectory(
    options.storage,
    options.path ? stringToCString(options.path).ptr : null,
    cb.ptr,
    null
  );

  cb.close();

  return success;
}

export function removeStoragePath(
  this: SDL,
  options: {
    storage: Storage;
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
    storage: Storage;
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
    storage: Storage;
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
    storage: Storage;
    path: string;
  }
) {
  const info = PathInfo.create();

  const success = this.symbols.SDL_GetStoragePathInfo(
    options.storage,
    stringToCString(options.path).ptr,
    info.$address
  );

  if (!success) return null;

  return info;
}

export function getStorageSpaceRemaining(this: SDL, storage: Storage) {
  return this.symbols.SDL_GetStorageSpaceRemaining(storage);
}

export function globStorageDirectory(
  this: SDL,
  options: {
    storage: Storage;
    path?: string | null;
    pattern?: string | null;
    flags?: GlobFlags | null;
  }
) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GlobStorageDirectory(
    options.storage,
    options.path ? stringToCString(options.path).ptr : null,
    options.pattern ? stringToCString(options.pattern).ptr : null,
    options.flags ?? 0,
    countStruct.$address
  );

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const paths = CStruct.readArrayString(listPtr, count);

  this.symbols.SDL_free(listPtr);

  return paths;
}
