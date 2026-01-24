import { FFIType, type FFIFunction } from 'bun:ffi';

export const VRDefinition = {
  // VrStereoConfig LoadVrStereoConfig(VrDeviceInfo device);
  // Note: Both VrStereoConfig and VrDeviceInfo are large structs
  LoadVrStereoConfig: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void UnloadVrStereoConfig(VrStereoConfig config);
  UnloadVrStereoConfig: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
