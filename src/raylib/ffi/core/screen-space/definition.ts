import { FFIType, type FFIFunction } from 'bun:ffi';

export const ScreenSpaceDefinition = {
  // Ray GetScreenToWorldRay(Vector2 position, Camera camera);
  // Note: Ray is 24 bytes (2 Vector3s), Vector2 is 8 bytes, Camera is 44 bytes
  GetScreenToWorldRay: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Ray GetScreenToWorldRayEx(Vector2 position, Camera camera, int width, int height);
  GetScreenToWorldRayEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.ptr,
  },
  // Vector2 GetWorldToScreen(Vector3 position, Camera camera);
  // Note: Vector3 is 12 bytes
  GetWorldToScreen: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Vector2 GetWorldToScreenEx(Vector3 position, Camera camera, int width, int height);
  GetWorldToScreenEx: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.ptr,
  },
  // Vector2 GetWorldToScreen2D(Vector2 position, Camera2D camera);
  GetWorldToScreen2D: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Vector2 GetScreenToWorld2D(Vector2 position, Camera2D camera);
  GetScreenToWorld2D: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Matrix GetCameraMatrix(Camera camera);
  // Note: Matrix is 64 bytes (16 floats), returned as struct
  GetCameraMatrix: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Matrix GetCameraMatrix2D(Camera2D camera);
  GetCameraMatrix2D: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
} satisfies Record<string, FFIFunction>;
