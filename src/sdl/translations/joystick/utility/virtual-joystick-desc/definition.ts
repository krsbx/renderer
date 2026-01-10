import { FFIType, type FFIFunction } from 'bun:ffi';

export const VirtualJoystickDescDefinition = {
  Update: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  SetPlayerIndex: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  Rumble: {
    args: [FFIType.ptr, FFIType.u16, FFIType.u16],
    returns: FFIType.bool,
  },
  RumbleTriggers: {
    args: [FFIType.ptr, FFIType.u16, FFIType.u16],
    returns: FFIType.bool,
  },
  SetLED: {
    args: [FFIType.ptr, FFIType.u8, FFIType.u8, FFIType.u8],
    returns: FFIType.bool,
  },
  SendEffect: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  SetSensorsEnabled: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  Cleanup: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;

export type VirtualJoystickDescDefinition =
  typeof VirtualJoystickDescDefinition;
