import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type {
  JoystickConnectionState,
  JoystickType,
} from '../../../ffi/joystick/constant';
import type { PowerState } from '../../../ffi/power/constant';
import { getStructAddress } from '../../../utility/common';
import { CStruct } from '../../../utility/cstruct';
import { GUID } from '../../guid/utility';

// Lock/Unlock

export function lockJoysticks(this: SDL) {
  this.symbols.SDL_LockJoysticks();
}

export function unlockJoysticks(this: SDL) {
  this.symbols.SDL_UnlockJoysticks();
}

// Query

export function hasJoystick(this: SDL) {
  return this.symbols.SDL_HasJoystick();
}

export function getJoysticks(this: SDL) {
  const struct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const listPtr = this.symbols.SDL_GetJoysticks(struct.$address);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const list = new CStruct({ address: listPtr });
  const joysticks: number[] = [];

  for (let i = 0; i < count; i++) {
    const id = list.getValue(i * CStruct.BYTE_SIZE.u32, 'u32');

    joysticks.push(id);
  }

  this.symbols.SDL_free(listPtr);

  return joysticks;
}

// Info by Instance ID

export function getJoystickNameForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetJoystickNameForID(instanceId).toString();
}

export function getJoystickPathForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetJoystickPathForID(instanceId).toString();
}

export function getJoystickPlayerIndexForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetJoystickPlayerIndexForID(instanceId);
}

export function getJoystickGUIDForID(this: SDL, instanceId: number) {
  const guid = this.symbols.SDL_GetJoystickGUIDForID(instanceId);

  if (!guid) return null;

  return new GUID(guid);
}

export function getJoystickVendorForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetJoystickVendorForID(instanceId);
}

export function getJoystickProductForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetJoystickProductForID(instanceId);
}

export function getJoystickProductVersionForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetJoystickProductVersionForID(instanceId);
}

export function getJoystickTypeForID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetJoystickTypeForID(instanceId) as JoystickType;
}

// Open/Get Joystick

export function openJoystick(this: SDL, instanceId: number) {
  return this.symbols.SDL_OpenJoystick(instanceId);
}

export function getJoystickFromID(this: SDL, instanceId: number) {
  return this.symbols.SDL_GetJoystickFromID(instanceId);
}

export function getJoystickFromPlayerIndex(this: SDL, playerIndex: number) {
  return this.symbols.SDL_GetJoystickFromPlayerIndex(playerIndex);
}

// Properties

export function getJoystickProperties(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickProperties(joystick);
}

// Info by Joystick Pointer

export function getJoystickName(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickName(joystick).toString();
}

export function getJoystickPath(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickPath(joystick).toString();
}

export function getJoystickPlayerIndex(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickPlayerIndex(joystick);
}

export function setJoystickPlayerIndex(
  this: SDL,
  options: {
    joystick: Pointer;
    playerIndex: number;
  }
) {
  return this.symbols.SDL_SetJoystickPlayerIndex(
    options.joystick,
    options.playerIndex
  );
}

export function getJoystickGUID(this: SDL, joystick: Pointer) {
  const guid = this.symbols.SDL_GetJoystickGUID(joystick);

  if (!guid) return null;

  return new GUID(guid);
}

export function getJoystickVendor(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickVendor(joystick);
}

export function getJoystickProduct(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickProduct(joystick);
}

export function getJoystickProductVersion(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickProductVersion(joystick);
}

export function getJoystickFirmwareVersion(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickFirmwareVersion(joystick);
}

export function getJoystickSerial(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickSerial(joystick).toString();
}

export function getJoystickType(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickType(joystick) as JoystickType;
}

export function getJoystickGUIDInfo(this: SDL, guid: GUID | Pointer) {
  const vendorStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const productStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const versionStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const crc16Struct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });

  this.symbols.SDL_GetJoystickGUIDInfo(
    getStructAddress(guid),
    vendorStruct.$address,
    productStruct.$address,
    versionStruct.$address,
    crc16Struct.$address
  );

  return {
    vendor: vendorStruct.getValue(0, 'u16'),
    product: productStruct.getValue(0, 'u16'),
    version: versionStruct.getValue(0, 'u16'),
    crc16: crc16Struct.getValue(0, 'u16'),
  };
}

// Status

export function joystickConnected(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_JoystickConnected(joystick);
}

export function getJoystickID(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickID(joystick);
}

// Counts

export function getNumJoystickAxes(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetNumJoystickAxes(joystick);
}

export function getNumJoystickBalls(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetNumJoystickBalls(joystick);
}

export function getNumJoystickHats(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetNumJoystickHats(joystick);
}

export function getNumJoystickButtons(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetNumJoystickButtons(joystick);
}

// Events

export function setJoystickEventsEnabled(this: SDL, enabled: boolean) {
  this.symbols.SDL_SetJoystickEventsEnabled(enabled);
}

export function joystickEventsEnabled(this: SDL) {
  return this.symbols.SDL_JoystickEventsEnabled();
}

export function updateJoysticks(this: SDL) {
  this.symbols.SDL_UpdateJoysticks();
}

// Close

export function closeJoystick(this: SDL, joystick: Pointer) {
  this.symbols.SDL_CloseJoystick(joystick);
}

// Connection/Power State

export function getJoystickConnectionState(this: SDL, joystick: Pointer) {
  return this.symbols.SDL_GetJoystickConnectionState(
    joystick
  ) as JoystickConnectionState;
}

export function getJoystickPowerInfo(this: SDL, joystick: Pointer) {
  const percentStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const state = this.symbols.SDL_GetJoystickPowerInfo(
    joystick,
    percentStruct.$address
  ) as PowerState;
  const percent = percentStruct.getValue(0, 'i32');

  return {
    state,
    percent,
  };
}
