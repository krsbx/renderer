import { CString, type JSCallback, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { cloneCString } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';

export function setClipboardText(this: SDL, text: CString) {
  return this.symbols.SDL_SetClipboardText(text.ptr);
}

export function getClipboardText(this: SDL) {
  const sdlText = this.symbols.SDL_GetClipboardText();
  const text = cloneCString(sdlText);

  this.symbols.SDL_free(sdlText);

  return text;
}

export function hasClipboardText(this: SDL) {
  return this.symbols.SDL_HasClipboardText();
}

export function setPrimarySelectionText(this: SDL, text: CString) {
  return this.symbols.SDL_SetPrimarySelectionText(text.ptr);
}

export function getPrimarySelectionText(this: SDL) {
  const sdlText = this.symbols.SDL_GetPrimarySelectionText();
  const text = cloneCString(sdlText);

  this.symbols.SDL_free(sdlText);

  return text;
}

export function hasPrimarySelectionText(this: SDL) {
  return this.symbols.SDL_HasPrimarySelectionText();
}

export function setClipboardData(
  this: SDL,
  options: {
    callback: JSCallback;
    cleanup?: JSCallback | null;
    userdata?: Pointer | null;
    mimeTypes: CString[];
  }
) {
  const numMimeTypes = options.mimeTypes.length;

  if (numMimeTypes === 0) return false;

  const struct = new CStruct({ length: CStruct.BYTE_SIZE.ptr * numMimeTypes });

  options.mimeTypes.forEach((mimeType, i) => {
    struct.setValue(i * CStruct.BYTE_SIZE.ptr, mimeType.ptr, 'ptr');
  });

  return this.symbols.SDL_SetClipboardData(
    options.callback.ptr,
    options.cleanup?.ptr ?? null,
    options.userdata ?? null,
    struct.$address,
    numMimeTypes
  );
}

export function clearClipboardData(this: SDL) {
  return this.symbols.SDL_ClearClipboardData();
}

export function getClipboardData(this: SDL, mimeType: CString) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const dataPtr = this.symbols.SDL_GetClipboardData(
    mimeType.ptr,
    sizeStruct.$address
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

export function hasClipboardData(this: SDL, mimeType: CString) {
  return this.symbols.SDL_HasClipboardData(mimeType.ptr);
}

export function getClipboardMimeTypes(this: SDL) {
  const sizeStruct = new CStruct({ length: CStruct.BYTE_SIZE.u64 });

  const listPtr = this.symbols.SDL_GetClipboardMimeTypes(sizeStruct.$address);

  if (!listPtr) return [];

  const count = Number(sizeStruct.getValue(0, 'u64'));

  const list = new CStruct({ address: listPtr });
  const mimeTypes: CString[] = [];

  for (let i = 0; i < count; i++) {
    const mimeTypePtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!mimeTypePtr) continue;

    const mimeType = cloneCString(new CString(mimeTypePtr));

    mimeTypes.push(mimeType);
  }

  this.symbols.SDL_free(listPtr);

  return mimeTypes;
}
