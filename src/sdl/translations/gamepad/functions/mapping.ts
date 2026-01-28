import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { CString, type Pointer } from 'bun:ffi';
import { GUID } from '../../guid/utility';

export function addGamepadMapping(this: SDL, mapping: string) {
  return this.symbols.SDL_AddGamepadMapping(stringToCString(mapping).ptr);
}

export function addGamepadMappingsFromIO(
  this: SDL,
  options: {
    src: Pointer;
    closeio: boolean;
  }
) {
  return this.symbols.SDL_AddGamepadMappingsFromIO(
    options.src,
    options.closeio
  );
}

export function addGamepadMappingsFromFile(this: SDL, file: string) {
  return this.symbols.SDL_AddGamepadMappingsFromFile(stringToCString(file).ptr);
}

export function reloadGamepadMappings(this: SDL) {
  return this.symbols.SDL_ReloadGamepadMappings();
}

export function getGamepadMappings(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetGamepadMappings(countStruct.$address);

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const pointers = CStruct.readArrayPrimitive(listPtr, count, 'ptr');
  const mappings = pointers.map((ptr) => new CString(ptr).toString());

  this.symbols.SDL_free(listPtr);

  return mappings;
}

export function getGamepadMappingForGUID(this: SDL, guid: GUID) {
  const ptr = this.symbols.SDL_GetGamepadMappingForGUID(guid.$address);

  if (!ptr) return null;

  const mapping = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return mapping.toString();
}

export function getGamepadMapping(this: SDL, gamepad: Pointer) {
  const ptr = this.symbols.SDL_GetGamepadMapping(gamepad);

  if (!ptr) return null;

  const mapping = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return mapping.toString();
}

export function setGamepadMapping(
  this: SDL,
  options: {
    instanceId: number;
    mapping: string;
  }
) {
  return this.symbols.SDL_SetGamepadMapping(
    options.instanceId,
    stringToCString(options.mapping).ptr
  );
}
