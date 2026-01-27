import { FFIType, type FFIFunction } from 'bun:ffi';

export const ModelCollisionDefinition = {
  // bool CheckCollisionSpheres(Vector3 center1, float radius1, Vector3 center2, float radius2);
  CheckCollisionSpheres: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // bool CheckCollisionBoxes(BoundingBox box1, BoundingBox box2);
  CheckCollisionBoxes: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool CheckCollisionBoxSphere(BoundingBox box, Vector3 center, float radius);
  CheckCollisionBoxSphere: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32],
    returns: FFIType.bool,
  },
  // RayCollision GetRayCollisionSphere(Ray ray, Vector3 center, float radius);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // RayCollision GetRayCollisionBox(Ray ray, BoundingBox box);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // RayCollision GetRayCollisionMesh(Ray ray, Mesh mesh, Matrix transform);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // RayCollision GetRayCollisionTriangle(Ray ray, Vector3 p1, Vector3 p2, Vector3 p3);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // RayCollision GetRayCollisionQuad(Ray ray, Vector3 p1, Vector3 p2, Vector3 p3, Vector3 p4);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
} satisfies Record<string, FFIFunction>;
