import { CString, ptr, type JSCallback, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { GlobFlags } from '../../../ffi/file-system/constant';
import { CStruct } from '../../../utility/cstruct';
import { PathInfo } from '../../file-system/utility';
import { StorageInterface } from '../utility';

export function openTitleStorage(
  this: SDL,
  options: {
    override?: CString | null;
    props: number;
  }
) {
  return this.symbols.SDL_OpenTitleStorage(
    options.override?.ptr ?? null,
    options.props
  );
}

export function openUserStorage(
  this: SDL,
  options: {
    org: CString;
    app: CString;
    props: number;
  }
) {
  return this.symbols.SDL_OpenUserStorage(
    options.org.ptr,
    options.app.ptr,
    options.props
  );
}

export function openFileStorage(this: SDL, path: CString) {
  return this.symbols.SDL_OpenFileStorage(path.ptr);
}

export function openStorage(
  this: SDL,
  options: {
    iface: StorageInterface | Pointer;
    userdata?: Pointer | null;
  }
) {
  const ifacePtr =
    options.iface instanceof StorageInterface
      ? options.iface.$address
      : options.iface;

  return this.symbols.SDL_OpenStorage(ifacePtr, options.userdata ?? null);
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
    path: CString;
  }
) {
  const lengthStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const success = this.symbols.SDL_GetStorageFileSize(
    options.storage,
    options.path.ptr,
    lengthStruct.$address
  );

  if (!success) return null;

  return lengthStruct.getValue(0, 'u64');
}

export function readStorageFile(
  this: SDL,
  options: {
    storage: Pointer;
    path: CString;
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
    options.path.ptr,
    ptr(destination),
    length
  );

  return success ? destination : null;
}

export function writeStorageFile(
  this: SDL,
  options: {
    storage: Pointer;
    path: CString;
    source: Pointer | Uint8Array;
    length: bigint;
  }
) {
  return this.symbols.SDL_WriteStorageFile(
    options.storage,
    options.path.ptr,
    options.source,
    options.length
  );
}

export function createStorageDirectory(
  this: SDL,
  options: {
    storage: Pointer;
    path: CString;
  }
) {
  return this.symbols.SDL_CreateStorageDirectory(
    options.storage,
    options.path.ptr
  );
}

export function enumerateStorageDirectory(
  this: SDL,
  options: {
    storage: Pointer;
    path: CString;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_EnumerateStorageDirectory(
    options.storage,
    options.path.ptr,
    options.callback.ptr,
    options.userdata ?? null
  );
}

export function removeStoragePath(
  this: SDL,
  options: {
    storage: Pointer;
    path: CString;
  }
) {
  return this.symbols.SDL_RemoveStoragePath(options.storage, options.path.ptr);
}

export function renameStoragePath(
  this: SDL,
  options: {
    storage: Pointer;
    oldpath: CString;
    newpath: CString;
  }
) {
  return this.symbols.SDL_RenameStoragePath(
    options.storage,
    options.oldpath.ptr,
    options.newpath.ptr
  );
}

export function copyStorageFile(
  this: SDL,
  options: {
    storage: Pointer;
    oldpath: CString;
    newpath: CString;
  }
) {
  return this.symbols.SDL_CopyStorageFile(
    options.storage,
    options.oldpath.ptr,
    options.newpath.ptr
  );
}

export function getStoragePathInfo(
  this: SDL,
  options: {
    storage: Pointer;
    path: CString;
  }
) {
  const info = new PathInfo(PathInfo.allocMemory());

  const success = this.symbols.SDL_GetStoragePathInfo(
    options.storage,
    options.path.ptr,
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
    path: CString;
    pattern?: CString | null;
    flags?: GlobFlags | null;
  }
) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GlobStorageDirectory(
    options.storage,
    options.path.ptr,
    options.pattern?.ptr ?? null,
    options.flags ?? 0,
    countStruct.$address
  );

  if (!listPtr) return null;

  const count = countStruct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const paths: CString[] = [];

  for (let i = 0; i < count; i++) {
    const pathPtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!pathPtr) continue;

    paths.push(new CString(pathPtr));
  }

  this.symbols.SDL_free(listPtr);

  return paths;
}
