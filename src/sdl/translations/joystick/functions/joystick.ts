import type { SDL } from '@/sdl';
import type {
  Joystick,
  JoystickID,
  PropertiesID,
} from '@/sdl/types/definition';
import type { Int32, UInt16 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type {
  JoystickConnectionState,
  JoystickType,
} from '../../../ffi/joystick/constant';
import type { PowerState } from '../../../ffi/power/constant';
import { GUID } from '../../guid/struct';

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

  const listPtr = this.symbols.SDL_GetJoysticks(struct.$memory);

  if (!listPtr) return [];

  const count = struct.getValue(0, 'i32');
  const joysticks = CStruct.readArrayPrimitive(listPtr, count, 'u32');

  this.symbols.SDL_free(listPtr);

  return joysticks;
}

// Info by Instance ID

export function getJoystickNameForID(this: SDL, instanceId: JoystickID) {
  return this.symbols.SDL_GetJoystickNameForID(instanceId).toString();
}

export function getJoystickPathForID(this: SDL, instanceId: JoystickID) {
  return this.symbols.SDL_GetJoystickPathForID(instanceId).toString();
}

export function getJoystickPlayerIndexForID(this: SDL, instanceId: JoystickID) {
  return this.symbols.SDL_GetJoystickPlayerIndexForID(instanceId) as Int32;
}

export function getJoystickGUIDForID(this: SDL, instanceId: JoystickID) {
  const guid = this.symbols.SDL_GetJoystickGUIDForID(instanceId);

  if (!guid) return null;

  return new GUID(guid);
}

export function getJoystickVendorForID(this: SDL, instanceId: JoystickID) {
  return this.symbols.SDL_GetJoystickVendorForID(instanceId) as UInt16;
}

export function getJoystickProductForID(this: SDL, instanceId: JoystickID) {
  return this.symbols.SDL_GetJoystickProductForID(instanceId) as UInt16;
}

export function getJoystickProductVersionForID(
  this: SDL,
  instanceId: JoystickID
) {
  return this.symbols.SDL_GetJoystickProductVersionForID(instanceId) as UInt16;
}

export function getJoystickTypeForID(this: SDL, instanceId: JoystickID) {
  return this.symbols.SDL_GetJoystickTypeForID(instanceId) as JoystickType;
}

// Open/Get Joystick

export function openJoystick(this: SDL, instanceId: JoystickID) {
  return this.symbols.SDL_OpenJoystick(instanceId) as Joystick | null;
}

export function getJoystickFromID(this: SDL, instanceId: JoystickID) {
  return this.symbols.SDL_GetJoystickFromID(instanceId) as Joystick | null;
}

export function getJoystickFromPlayerIndex(this: SDL, playerIndex: Int32) {
  return this.symbols.SDL_GetJoystickFromPlayerIndex(
    playerIndex
  ) as Joystick | null;
}

// Properties

export function getJoystickProperties(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickProperties(joystick) as PropertiesID;
}

// Info by Joystick Pointer

export function getJoystickName(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickName(joystick).toString();
}

export function getJoystickPath(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickPath(joystick).toString();
}

export function getJoystickPlayerIndex(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickPlayerIndex(joystick) as Int32;
}

export function setJoystickPlayerIndex(
  this: SDL,
  options: {
    joystick: Joystick;
    playerIndex: Int32;
  }
) {
  return this.symbols.SDL_SetJoystickPlayerIndex(
    options.joystick,
    options.playerIndex
  );
}

export function getJoystickGUID(this: SDL, joystick: Joystick) {
  const guid = this.symbols.SDL_GetJoystickGUID(joystick);

  if (!guid) return null;

  return new GUID(guid);
}

export function getJoystickVendor(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickVendor(joystick) as UInt16;
}

export function getJoystickProduct(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickProduct(joystick) as UInt16;
}

export function getJoystickProductVersion(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickProductVersion(joystick) as UInt16;
}

export function getJoystickFirmwareVersion(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickFirmwareVersion(joystick) as UInt16;
}

export function getJoystickSerial(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickSerial(joystick).toString();
}

export function getJoystickType(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickType(joystick) as JoystickType;
}

export function getJoystickGUIDInfo(this: SDL, guid: GUID) {
  const vendorStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const productStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const versionStruct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });
  const crc16Struct = new CStruct({ length: CStruct.BYTE_SIZE.u16 });

  this.symbols.SDL_GetJoystickGUIDInfo(
    guid.$memory,
    vendorStruct.$memory,
    productStruct.$memory,
    versionStruct.$memory,
    crc16Struct.$memory
  );

  return {
    vendor: vendorStruct.getValue(0, 'u16') as UInt16,
    product: productStruct.getValue(0, 'u16') as UInt16,
    version: versionStruct.getValue(0, 'u16') as UInt16,
    crc16: crc16Struct.getValue(0, 'u16') as UInt16,
  };
}

// Status

export function joystickConnected(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_JoystickConnected(joystick);
}

export function getJoystickID(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickID(joystick) as JoystickID;
}

// Counts

export function getNumJoystickAxes(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetNumJoystickAxes(joystick) as Int32;
}

export function getNumJoystickBalls(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetNumJoystickBalls(joystick) as Int32;
}

export function getNumJoystickHats(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetNumJoystickHats(joystick) as Int32;
}

export function getNumJoystickButtons(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetNumJoystickButtons(joystick) as Int32;
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

export function closeJoystick(this: SDL, joystick: Joystick) {
  this.symbols.SDL_CloseJoystick(joystick);
}

// Connection/Power State

export function getJoystickConnectionState(this: SDL, joystick: Joystick) {
  return this.symbols.SDL_GetJoystickConnectionState(
    joystick
  ) as JoystickConnectionState;
}

export function getJoystickPowerInfo(this: SDL, joystick: Joystick) {
  const percentStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const state = this.symbols.SDL_GetJoystickPowerInfo(
    joystick,
    percentStruct.$memory
  ) as PowerState;
  const percent = percentStruct.getValue(0, 'i32') as Int32;

  return {
    state,
    percent,
  };
}
