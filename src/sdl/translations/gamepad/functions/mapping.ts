import type { SDL } from '@/sdl';
import type { Gamepad, IOStream } from '@/sdl/types/definition';
import type { Int32, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { CString } from 'bun:ffi';
import { GUID } from '../../guid/struct';

export function addGamepadMapping(this: SDL, mapping: string) {
  return this.symbols.SDL_AddGamepadMapping(
    stringToCString(mapping).ptr
  ) as Int32;
}

export function addGamepadMappingsFromIO(
  this: SDL,
  options: {
    src: IOStream;
    closeio: boolean;
  }
) {
  return this.symbols.SDL_AddGamepadMappingsFromIO(
    options.src,
    options.closeio
  ) as Int32;
}

export function addGamepadMappingsFromFile(this: SDL, file: string) {
  return this.symbols.SDL_AddGamepadMappingsFromFile(
    stringToCString(file).ptr
  ) as Int32;
}

export function reloadGamepadMappings(this: SDL) {
  return this.symbols.SDL_ReloadGamepadMappings();
}

export function getGamepadMappings(this: SDL) {
  const countStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetGamepadMappings(countStruct.$memory);

  if (!listPtr) return [];

  const count = countStruct.getValue(0, 'i32');
  const mappings = CStruct.readArrayString(listPtr, count);

  this.symbols.SDL_free(listPtr);

  return mappings;
}

export function getGamepadMappingForGUID(this: SDL, guid: GUID) {
  const ptr = this.symbols.SDL_GetGamepadMappingForGUID(guid.$memory);

  if (!ptr) return null;

  const mapping = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return mapping.toString();
}

export function getGamepadMapping(this: SDL, gamepad: Gamepad) {
  const ptr = this.symbols.SDL_GetGamepadMapping(gamepad);

  if (!ptr) return null;

  const mapping = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return mapping.toString();
}

export function setGamepadMapping(
  this: SDL,
  options: {
    instanceId: UInt32;
    mapping: string;
  }
) {
  return this.symbols.SDL_SetGamepadMapping(
    options.instanceId,
    stringToCString(options.mapping).ptr
  );
}
