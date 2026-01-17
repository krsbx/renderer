import { CString, type JSCallback, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { Folder, GlobFlags } from '../../../ffi/file-system/constant';
import { CStruct } from '../../../utility/cstruct';
import { PathInfo } from '../utility';

export function getBasePath(this: SDL) {
  return this.symbols.SDL_GetBasePath();
}

export function getPrefPath(
  this: SDL,
  options: {
    org: CString;
    app: CString;
  }
) {
  const ptr = this.symbols.SDL_GetPrefPath(options.org.ptr, options.app.ptr);

  if (!ptr) return null;

  const path = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return path;
}

export function getUserFolder(this: SDL, folder: Folder) {
  return this.symbols.SDL_GetUserFolder(folder);
}

export function createDirectory(this: SDL, path: CString) {
  return this.symbols.SDL_CreateDirectory(path.ptr);
}

export function enumerateDirectory(
  this: SDL,
  options: {
    path: CString;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_EnumerateDirectory(
    options.path.ptr,
    options.callback.ptr,
    options.userdata ?? null
  );
}

export function removePath(this: SDL, path: CString) {
  return this.symbols.SDL_RemovePath(path.ptr);
}

export function renamePath(
  this: SDL,
  options: {
    oldPath: CString;
    newPath: CString;
  }
) {
  return this.symbols.SDL_RenamePath(options.oldPath.ptr, options.newPath.ptr);
}

export function copyFile(
  this: SDL,
  options: {
    oldPath: CString;
    newPath: CString;
  }
) {
  return this.symbols.SDL_CopyFile(options.oldPath.ptr, options.newPath.ptr);
}

export function getPathInfo(
  this: SDL,
  options: {
    path: CString;
    info?: PathInfo | Pointer | null;
  }
) {
  let infoPtr: Pointer;
  let infoInstance: PathInfo | null = null;

  if (options.info instanceof PathInfo) {
    infoPtr = options.info.$address;
    infoInstance = options.info;
  } else if (options.info) {
    infoPtr = options.info;
  } else {
    infoInstance = new PathInfo(PathInfo.allocMemory());
    infoPtr = infoInstance.$address;
  }

  const success = this.symbols.SDL_GetPathInfo(options.path.ptr, infoPtr);

  if (!success) return null;

  return infoInstance ?? new PathInfo(infoPtr);
}

export function globDirectory(
  this: SDL,
  options: {
    path: CString;
    pattern?: CString | null;
    flags?: GlobFlags;
  }
) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GlobDirectory(
    options.path.ptr,
    options.pattern?.ptr ?? null,
    options.flags ?? 0,
    countStruct.$address
  );

  if (!listPtr) return [];

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

export function getCurrentDirectory(this: SDL) {
  const ptr = this.symbols.SDL_GetCurrentDirectory();

  if (!ptr) return null;

  const result = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return result;
}
