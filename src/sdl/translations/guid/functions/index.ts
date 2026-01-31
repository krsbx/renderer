import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { CString, ptr } from 'bun:ffi';
import { GUID } from '../struct';

// GUID string format is 32 hex chars + null terminator = 33 bytes
const GUID_STRING_SIZE = 33;

export function guidToString(this: SDL, guid: GUID) {
  const buffer = new CStruct({ length: GUID_STRING_SIZE });

  this.symbols.SDL_GUIDToString(
    guid.$address,
    buffer.$address,
    GUID_STRING_SIZE
  );

  return new CString(ptr(buffer.$address)).toString();
}

export function stringToGUID(this: SDL, str: string) {
  const ptr = this.symbols.SDL_StringToGUID(stringToCString(str).ptr);

  if (!ptr) return null;

  return new GUID(ptr);
}
