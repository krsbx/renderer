import { FFIType, type FFIFunction } from 'bun:ffi';

export const Basic3DDefinition = {
  // void DrawLine3D(Vector3 startPos, Vector3 endPos, Color color);
  DrawLine3D: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawPoint3D(Vector3 position, Color color);
  DrawPoint3D: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCircle3D(Vector3 center, float radius, Vector3 rotationAxis, float rotationAngle, Color color);
  DrawCircle3D: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawTriangle3D(Vector3 v1, Vector3 v2, Vector3 v3, Color color);
  DrawTriangle3D: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawTriangleStrip3D(const Vector3 *points, int pointCount, Color color);
  DrawTriangleStrip3D: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCube(Vector3 position, float width, float height, float length, Color color);
  DrawCube: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCubeV(Vector3 position, Vector3 size, Color color);
  DrawCubeV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCubeWires(Vector3 position, float width, float height, float length, Color color);
  DrawCubeWires: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCubeWiresV(Vector3 position, Vector3 size, Color color);
  DrawCubeWiresV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawSphere(Vector3 centerPos, float radius, Color color);
  DrawSphere: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawSphereEx(Vector3 centerPos, float radius, int rings, int slices, Color color);
  DrawSphereEx: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawSphereWires(Vector3 centerPos, float radius, int rings, int slices, Color color);
  DrawSphereWires: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawCylinder(Vector3 position, float radiusTop, float radiusBottom, float height, int slices, Color color);
  DrawCylinder: {
    args: [
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawCylinderEx(Vector3 startPos, Vector3 endPos, float startRadius, float endRadius, int sides, Color color);
  DrawCylinderEx: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawCylinderWires(Vector3 position, float radiusTop, float radiusBottom, float height, int slices, Color color);
  DrawCylinderWires: {
    args: [
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.f32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawCylinderWiresEx(Vector3 startPos, Vector3 endPos, float startRadius, float endRadius, int sides, Color color);
  DrawCylinderWiresEx: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.f32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawCapsule(Vector3 startPos, Vector3 endPos, float radius, int slices, int rings, Color color);
  DrawCapsule: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawCapsuleWires(Vector3 startPos, Vector3 endPos, float radius, int slices, int rings, Color color);
  DrawCapsuleWires: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.i32,
      FFIType.i32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawPlane(Vector3 centerPos, Vector2 size, Color color);
  DrawPlane: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawRay(Ray ray, Color color);
  DrawRay: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawGrid(int slices, float spacing);
  DrawGrid: {
    args: [FFIType.i32, FFIType.f32],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
