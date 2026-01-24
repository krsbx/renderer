import { FFIType, type FFIFunction } from 'bun:ffi';

export const CameraDefinition = {
  // void UpdateCamera(Camera *camera, int mode);
  UpdateCamera: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void UpdateCameraPro(Camera *camera, Vector3 movement, Vector3 rotation, float zoom);
  UpdateCameraPro: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
