import type { SDL } from '@/sdl';
import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { CString } from 'bun:ffi';
import type {
  ClipboardCleanupCallbackFn,
  ClipboardDataCallbackFn,
} from '../types/callback';
import {
  ClipboardDataPrefix,
  createClipboardCleanupCallback,
  createClipboardDataCallback,
} from '../utility/callback';

export function setClipboardText(this: SDL, text: string) {
  return this.symbols.SDL_SetClipboardText(stringToCString(text).ptr);
}

export function getClipboardText(this: SDL) {
  const ptr = this.symbols.SDL_GetClipboardText();

  if (!ptr) return null;

  const text = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return text.toString();
}

export function hasClipboardText(this: SDL) {
  return this.symbols.SDL_HasClipboardText();
}

export function setPrimarySelectionText(this: SDL, text: string) {
  return this.symbols.SDL_SetPrimarySelectionText(stringToCString(text).ptr);
}

export function getPrimarySelectionText(this: SDL) {
  const ptr = this.symbols.SDL_GetPrimarySelectionText();

  if (!ptr) return null;

  const text = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return text.toString();
}

export function hasPrimarySelectionText(this: SDL) {
  return this.symbols.SDL_HasPrimarySelectionText();
}

export function setClipboardData(
  this: SDL,
  options: {
    callback: ClipboardDataCallbackFn;
    cleanup?: ClipboardCleanupCallbackFn | null;
    mimeTypes: string[];
  }
) {
  if (options.mimeTypes.length === 0) return false;

  const { buffer: mimeTypes } = CStruct.writeArrayString(options.mimeTypes);

  const clipboardDataCb = createClipboardDataCallback(options.callback);
  const cleanupDataCb = options.cleanup
    ? createClipboardCleanupCallback(options.cleanup)
    : null;

  const success = this.symbols.SDL_SetClipboardData(
    clipboardDataCb.ptr,
    cleanupDataCb?.ptr ?? null,
    null,
    mimeTypes,
    options.mimeTypes.length
  );

  if (!success) {
    clipboardDataCb.close();
    cleanupDataCb?.close?.();
  } else {
    CallbackManager.register(ClipboardDataPrefix.data, clipboardDataCb);

    if (cleanupDataCb)
      CallbackManager.register(ClipboardDataPrefix.cleanup, cleanupDataCb);
  }

  return success;
}

export function clearClipboardData(this: SDL) {
  return this.symbols.SDL_ClearClipboardData();
}

export function getClipboardData(this: SDL, mimeType: string) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const dataPtr = this.symbols.SDL_GetClipboardData(
    stringToCString(mimeType).ptr,
    sizeStruct.$memory
  );

  if (!dataPtr) return null;

  const size = Number(sizeStruct.getValue(0, 'u64'));

  const data = new CStruct({
    length: size,
    address: dataPtr,
  }).clone().$memory;

  this.symbols.SDL_free(dataPtr);

  return {
    data,
    size,
  };
}

export function hasClipboardData(this: SDL, mimeType: string) {
  return this.symbols.SDL_HasClipboardData(stringToCString(mimeType).ptr);
}

export function getClipboardMimeTypes(this: SDL) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const listPtr = this.symbols.SDL_GetClipboardMimeTypes(sizeStruct.$memory);

  if (!listPtr) return [];

  const count = Number(sizeStruct.getValue(0, 'u64'));

  const mimeTypes = CStruct.readArrayString(listPtr, count);

  this.symbols.SDL_free(listPtr);

  return mimeTypes;
}
