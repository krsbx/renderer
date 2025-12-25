import { type FFIFunction, FFIType } from 'bun:ffi';

export const TouchDefinition = {
  // SDL_TouchID * SDL_GetTouchDevices(int *count);                       // Get a list of registered touch devices.
  SDL_GetTouchDevices: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // const char * SDL_GetTouchDeviceName(SDL_TouchID touchID);            // Get the touch device name as reported from the driver.
  SDL_GetTouchDeviceName: {
    args: [FFIType.u64],
    returns: FFIType.cstring,
  },
  // SDL_TouchDeviceType SDL_GetTouchDeviceType(SDL_TouchID touchID);     // Get the type of the given touch device.
  SDL_GetTouchDeviceType: {
    args: [FFIType.u64],
    returns: FFIType.i32,
  },
  // SDL_Finger ** SDL_GetTouchFingers(SDL_TouchID touchID, int *count);  // Get a list of active fingers for a given touch device.
  SDL_GetTouchFingers: {
    args: [FFIType.u64, FFIType.ptr],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
