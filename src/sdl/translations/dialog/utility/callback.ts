import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@/utility/cstruct';
import { type Pointer, FFIType, JSCallback } from 'bun:ffi';
import type { DialogFileFilter } from '../struct';
import type { DialogFileCallbackFn } from '../types/callback';

const DialogCallbackPrefix = 'dialog:callback:';

function getDialogCallbackKey() {
  return `${DialogCallbackPrefix}${Date.now()}:${Math.random()}`;
}

export function createDialogCallback(
  callback: DialogFileCallbackFn,
  filters: DialogFileFilter[]
) {
  const key = getDialogCallbackKey();

  const cb = new JSCallback(
    (_: Pointer, filelistPtr: Pointer | null, filterIndex: number) => {
      const files = filelistPtr
        ? CStruct.readArrayString(filelistPtr, null)
        : [];
      const filter = filterIndex > -1 ? (filters[filterIndex] ?? null) : null;

      callback({
        filelist: files,
        filter,
      });

      CallbackManager.unregister(key);
    },
    {
      args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
      returns: FFIType.void,
    }
  );

  CallbackManager.register(key, cb);

  return cb;
}
