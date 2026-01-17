import { CString, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import {
  type GamepadAxis,
  type GamepadButton,
  type GamepadType,
} from '../../../ffi/gamepad/constant';
import type { JoystickConnectionState } from '../../../ffi/joystick/constant';
import type { PowerState } from '../../../ffi/power/constant';
import { CStruct } from '../../../utility/cstruct';
import { GUID } from '../../guid/utility';
import { GamepadBinding } from '../utility';

export function hasGamepad(this: SDL) {
  return this.symbols.SDL_HasGamepad();
}

export function getGamepads(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetGamepads(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const gamepads: number[] = [];

  for (let i = 0; i < count; i++) {
    const id = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    gamepads.push(id);
  }

  this.symbols.SDL_free(listPtr);

  return gamepads;
}

export function isGamepad(this: SDL, instanceId: number) {
  return this.symbols.SDL_IsGamepad(instanceId);
}

export function getGamepadNameForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetGamepadNameForID(instanceId);
}

export function getGamepadPathForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetGamepadPathForID(instanceId);
}

export function getGamepadPlayerIndexForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetGamepadPlayerIndexForID(instanceId);
}

export function getGamepadGUIDForID(this: SDL, instanceId: number) {
  const guid = this.symbols.SDL_GetGamepadGUIDForID(instanceId);

  if (!guid) return null;

  return new GUID(guid);
}

export function getGamepadVendorForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetGamepadVendorForID(instanceId);
}

export function getGamepadProductForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetGamepadProductForID(instanceId);
}

export function getGamepadProductVersionForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetGamepadProductVersionForID(instanceId);
}

export function getGamepadTypeForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetGamepadTypeForID(instanceId) as GamepadType;
}

export function getRealGamepadTypeForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetRealGamepadTypeForID(instanceId) as GamepadType;
}

export function getGamepadMappingForID(this: SDL, instanceId: number) {
  const ptr = this.symbols.SDL_GetGamepadMappingForID(instanceId);

  if (!ptr) return null;

  const mapping = new CString(ptr);

  this.symbols.SDL_free(ptr);

  return mapping;
}

export function openGamepad(this: SDL, instanceId: number) {
  return this.symbols.SDL_OpenGamepad(instanceId);
}

export function getGamepadFromID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetGamepadFromID(instanceId);
}

export function getGamepadFromPlayerIndex(this: SDL, playerIndex: number) {
  return this.symbols.SDL_GetGamepadFromPlayerIndex(playerIndex);
}

export function getGamepadProperties(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadProperties(gamepad);
}

export function getGamepadID(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadID(gamepad);
}

export function getGamepadName(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadName(gamepad);
}

export function getGamepadPath(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadPath(gamepad);
}

export function getGamepadType(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadType(gamepad) as GamepadType;
}

export function getRealGamepadType(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetRealGamepadType(gamepad) as GamepadType;
}

export function getGamepadPlayerIndex(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadPlayerIndex(gamepad);
}

export function setGamepadPlayerIndex(
  this: SDL,
  options: {
    gamepad: Pointer;
    playerIndex: number;
  }
) {
  return this.symbols.SDL_SetGamepadPlayerIndex(
    options.gamepad,
    options.playerIndex
  );
}

export function getGamepadVendor(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadVendor(gamepad);
}

export function getGamepadProduct(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadProduct(gamepad);
}

export function getGamepadProductVersion(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadProductVersion(gamepad);
}

export function getGamepadFirmwareVersion(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadFirmwareVersion(gamepad);
}

export function getGamepadSerial(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadSerial(gamepad);
}

export function getGamepadSteamHandle(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadSteamHandle(gamepad);
}

export function getGamepadConnectionState(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadConnectionState(
    gamepad
  ) as JoystickConnectionState;
}

export function getGamepadPowerInfo(this: SDL, gamepad: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const state = this.symbols.SDL_GetGamepadPowerInfo(
    gamepad,
    struct.$address
  ) as PowerState;
  const percent = struct.getValue(0, 'i32');

  return {
    state,
    percent,
  };
}

export function gamepadConnected(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GamepadConnected(gamepad);
}

export function getGamepadJoystick(this: SDL, gamepad: Pointer) {
  return this.symbols.SDL_GetGamepadJoystick(gamepad);
}

export function setGamepadEventsEnabled(this: SDL, enabled: boolean) {
  this.symbols.SDL_SetGamepadEventsEnabled(enabled);
}

export function gamepadEventsEnabled(this: SDL) {
  return this.symbols.SDL_GamepadEventsEnabled();
}

export function getGamepadBindings(this: SDL, gamepad: Pointer) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetGamepadBindings(gamepad, struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const bindings: GamepadBinding[] = [];

  for (let i = 0; i < count; i++) {
    const bindingPtr = list.getValue(i * CStruct.BYTE_SIZE.ptr, 'ptr');

    if (!bindingPtr) continue;

    const sdlBinding = new GamepadBinding(bindingPtr);
    // Clone the binding so it become a snapshot
    const binding = new GamepadBinding(sdlBinding.$memory.slice());

    bindings.push(binding);
  }

  this.symbols.SDL_free(listPtr);

  return bindings;
}

export function updateGamepads(this: SDL) {
  this.symbols.SDL_UpdateGamepads();
}

export function getGamepadTypeFromString(this: SDL, str: CString) {
  return this.symbols.SDL_GetGamepadTypeFromString(str.ptr) as GamepadType;
}

export function getGamepadStringForType(this: SDL, type: GamepadType) {
  return this.symbols.SDL_GetGamepadStringForType(type);
}

export function getGamepadAxisFromString(this: SDL, str: CString) {
  return this.symbols.SDL_GetGamepadAxisFromString(str.ptr) as GamepadAxis;
}

export function getGamepadStringForAxis(this: SDL, axis: GamepadAxis) {
  return this.symbols.SDL_GetGamepadStringForAxis(axis);
}

export function closeGamepad(this: SDL, gamepad: Pointer) {
  this.symbols.SDL_CloseGamepad(gamepad);
}

export function getGamepadAppleSFSymbolsNameForButton(
  this: SDL,
  options: {
    gamepad: Pointer;
    button: GamepadButton;
  }
) {
  return this.symbols.SDL_GetGamepadAppleSFSymbolsNameForButton(
    options.gamepad,
    options.button
  );
}

export function getGamepadAppleSFSymbolsNameForAxis(
  this: SDL,
  options: {
    gamepad: Pointer;
    axis: GamepadAxis;
  }
) {
  return this.symbols.SDL_GetGamepadAppleSFSymbolsNameForAxis(
    options.gamepad,
    options.axis
  );
}
