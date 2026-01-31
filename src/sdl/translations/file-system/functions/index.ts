import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { CString, type JSCallback, type Pointer } from 'bun:ffi';
import type { Folder, GlobFlags } from '../../../ffi/file-system/constant';
import { PathInfo } from '../struct';

export function getBasePath(this: SDL) {
  return this.symbols.SDL_GetBasePath().toString();
}

export function getPrefPath(
  this: SDL,
  options: {
    org: string;
    app: string;
  }
) {
  const ptr = this.symbols.SDL_GetPrefPath(
    stringToCString(options.org).ptr,
    stringToCString(options.app).ptr
  );

  if (!ptr) return null;

  const path = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return path.toString();
}

export function getUserFolder(this: SDL, folder: Folder) {
  return this.symbols.SDL_GetUserFolder(folder).toString();
}

export function createDirectory(this: SDL, path: string) {
  return this.symbols.SDL_CreateDirectory(stringToCString(path).ptr);
}

export function enumerateDirectory(
  this: SDL,
  options: {
    path: string;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_EnumerateDirectory(
    stringToCString(options.path).ptr,
    options.callback.ptr,
    options.userdata ?? null
  );
}

export function removePath(this: SDL, path: string) {
  return this.symbols.SDL_RemovePath(stringToCString(path).ptr);
}

export function renamePath(
  this: SDL,
  options: {
    oldPath: string;
    newPath: string;
  }
) {
  return this.symbols.SDL_RenamePath(
    stringToCString(options.oldPath).ptr,
    stringToCString(options.newPath).ptr
  );
}

export function copyFile(
  this: SDL,
  options: {
    oldPath: string;
    newPath: string;
  }
) {
  return this.symbols.SDL_CopyFile(
    stringToCString(options.oldPath).ptr,
    stringToCString(options.newPath).ptr
  );
}

export function getPathInfo(
  this: SDL,
  options: {
    path: string;
    info?: PathInfo | null;
  }
) {
  const infoInstance = options.info ?? PathInfo.create();

  const success = this.symbols.SDL_GetPathInfo(
    stringToCString(options.path).ptr,
    infoInstance.$address
  );

  if (!success) return null;

  return infoInstance;
}

export function globDirectory(
  this: SDL,
  options: {
    path: string;
    pattern?: string | null;
    flags?: GlobFlags;
  }
) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GlobDirectory(
    stringToCString(options.path).ptr,
    options.pattern ? stringToCString(options.pattern).ptr : null,
    options.flags ?? 0,
    countStruct.$address
  );

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const paths = CStruct.readArrayString(listPtr, count);

  this.symbols.SDL_free(listPtr);

  return paths;
}

export function getCurrentDirectory(this: SDL) {
  const ptr = this.symbols.SDL_GetCurrentDirectory();

  if (!ptr) return null;

  const result = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return result.toString();
}
