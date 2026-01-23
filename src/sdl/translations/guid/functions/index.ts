import { CString, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { getStructAddress, stringToCString } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';
import { GUID } from '../utility';

// GUID string format is 32 hex chars + null terminator = 33 bytes
const GUID_STRING_SIZE = 33;

export function guidToString(this: SDL, guid: GUID | Pointer) {
  const buffer = new CStruct({ length: GUID_STRING_SIZE });

  this.symbols.SDL_GUIDToString(
    getStructAddress(guid),
    buffer.$address,
    GUID_STRING_SIZE
  );

  return new CString(buffer.$address).toString();
}

export function stringToGUID(this: SDL, str: string) {
  const ptr = this.symbols.SDL_StringToGUID(stringToCString(str).ptr);

  if (!ptr) return null;

  return new GUID(ptr);
}
