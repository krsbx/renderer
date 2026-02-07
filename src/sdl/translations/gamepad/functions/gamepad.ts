import type { SDL } from '@/sdl';
import type { Gamepad, Joystick } from '@/sdl/types/definition';
import type { Int32, UInt16, UInt32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import { stringToCString } from '@utility/common';
import { CString } from 'bun:ffi';
import {
  type GamepadAxis,
  type GamepadButton,
  type GamepadType,
} from '../../../ffi/gamepad/constant';
import type { JoystickConnectionState } from '../../../ffi/joystick/constant';
import type { PowerState } from '../../../ffi/power/constant';
import { GUID } from '../../guid/struct';
import { GamepadBinding } from '../struct';

export function hasGamepad(this: SDL) {
  return this.symbols.SDL_HasGamepad();
}

export function getGamepads(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetGamepads(struct.$memory);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const gamepads = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return gamepads;
}

export function isGamepad(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_IsGamepad(instanceId);
}

export function getGamepadNameForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetGamepadNameForID(instanceId).toString();
}

export function getGamepadPathForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetGamepadPathForID(instanceId).toString();
}

export function getGamepadPlayerIndexForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetGamepadPlayerIndexForID(instanceId) as Int32;
}

export function getGamepadGUIDForID(this: SDL, instanceId: UInt32) {
  const guid = this.symbols.SDL_GetGamepadGUIDForID(instanceId);

  if (!guid) return null;

  return new GUID(guid);
}

export function getGamepadVendorForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetGamepadVendorForID(instanceId) as UInt16;
}

export function getGamepadProductForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetGamepadProductForID(instanceId) as UInt16;
}

export function getGamepadProductVersionForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetGamepadProductVersionForID(instanceId) as UInt16;
}

export function getGamepadTypeForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetGamepadTypeForID(instanceId) as GamepadType;
}

export function getRealGamepadTypeForID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetRealGamepadTypeForID(instanceId) as GamepadType;
}

export function getGamepadMappingForID(this: SDL, instanceId: UInt32) {
  const ptr = this.symbols.SDL_GetGamepadMappingForID(instanceId);

  if (!ptr) return null;

  const mapping = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return mapping.toString();
}

export function openGamepad(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_OpenGamepad(instanceId) as Gamepad | null;
}

export function getGamepadFromID(this: SDL, instanceId: UInt32) {
  return this.symbols.SDL_GetGamepadFromID(instanceId) as Gamepad | null;
}

export function getGamepadFromPlayerIndex(this: SDL, playerIndex: Int32) {
  return this.symbols.SDL_GetGamepadFromPlayerIndex(
    playerIndex
  ) as Gamepad | null;
}

export function getGamepadProperties(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadProperties(gamepad) as UInt32;
}

export function getGamepadID(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadID(gamepad) as UInt32;
}

export function getGamepadName(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadName(gamepad).toString();
}

export function getGamepadPath(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadPath(gamepad).toString();
}

export function getGamepadType(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadType(gamepad) as GamepadType;
}

export function getRealGamepadType(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetRealGamepadType(gamepad) as GamepadType;
}

export function getGamepadPlayerIndex(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadPlayerIndex(gamepad) as Int32;
}

export function setGamepadPlayerIndex(
  this: SDL,
  options: {
    gamepad: Gamepad;
    playerIndex: Int32;
  }
) {
  return this.symbols.SDL_SetGamepadPlayerIndex(
    options.gamepad,
    options.playerIndex
  );
}

export function getGamepadVendor(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadVendor(gamepad) as UInt16;
}

export function getGamepadProduct(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadProduct(gamepad) as UInt16;
}

export function getGamepadProductVersion(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadProductVersion(gamepad) as UInt16;
}

export function getGamepadFirmwareVersion(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadFirmwareVersion(gamepad) as UInt16;
}

export function getGamepadSerial(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadSerial(gamepad).toString();
}

export function getGamepadSteamHandle(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadSteamHandle(gamepad);
}

export function getGamepadConnectionState(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadConnectionState(
    gamepad
  ) as JoystickConnectionState;
}

export function getGamepadPowerInfo(this: SDL, gamepad: Gamepad) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const state = this.symbols.SDL_GetGamepadPowerInfo(
    gamepad,
    struct.$memory
  ) as PowerState;
  const percent = struct.getValue(0, 'i32') as Int32;

  return {
    state,
    percent,
  };
}

export function gamepadConnected(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GamepadConnected(gamepad);
}

export function getGamepadJoystick(this: SDL, gamepad: Gamepad) {
  return this.symbols.SDL_GetGamepadJoystick(gamepad) as Joystick | null;
}

export function setGamepadEventsEnabled(this: SDL, enabled: boolean) {
  this.symbols.SDL_SetGamepadEventsEnabled(enabled);
}

export function gamepadEventsEnabled(this: SDL) {
  return this.symbols.SDL_GamepadEventsEnabled();
}

export function getGamepadBindings(this: SDL, gamepad: Gamepad) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetGamepadBindings(gamepad, struct.$memory);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');

  const bindings = CStruct.readArray(GamepadBinding, listPtr, count, true);

  this.symbols.SDL_free(listPtr);

  return bindings;
}

export function updateGamepads(this: SDL) {
  this.symbols.SDL_UpdateGamepads();
}

export function getGamepadTypeFromString(this: SDL, str: string) {
  return this.symbols.SDL_GetGamepadTypeFromString(
    stringToCString(str).ptr
  ) as GamepadType;
}

export function getGamepadStringForType(this: SDL, type: GamepadType) {
  return this.symbols.SDL_GetGamepadStringForType(type).toString();
}

export function closeGamepad(this: SDL, gamepad: Gamepad) {
  this.symbols.SDL_CloseGamepad(gamepad);
}

export function getGamepadAppleSFSymbolsNameForButton(
  this: SDL,
  options: {
    gamepad: Gamepad;
    button: GamepadButton;
  }
) {
  return this.symbols
    .SDL_GetGamepadAppleSFSymbolsNameForButton(options.gamepad, options.button)
    .toString();
}

export function getGamepadAppleSFSymbolsNameForAxis(
  this: SDL,
  options: {
    gamepad: Gamepad;
    axis: GamepadAxis;
  }
) {
  const name = this.symbols.SDL_GetGamepadAppleSFSymbolsNameForAxis(
    options.gamepad,
    options.axis
  );

  return name.toString();
}
