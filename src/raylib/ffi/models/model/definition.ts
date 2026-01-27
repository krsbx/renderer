import { FFIType, type FFIFunction } from 'bun:ffi';

export const ModelManagementDefinition = {
  // Model LoadModel(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Model LoadModelFromMesh(Mesh mesh);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // bool IsModelValid(Model model);
  IsModelValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadModel(Model model);
  UnloadModel: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // BoundingBox GetModelBoundingBox(Model model);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

  // void DrawModel(Model model, Vector3 position, float scale, Color tint);
  DrawModel: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawModelEx(Model model, Vector3 position, Vector3 rotationAxis, float rotationAngle, Vector3 scale, Color tint);
  DrawModelEx: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawModelWires(Model model, Vector3 position, float scale, Color tint);
  DrawModelWires: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawModelWiresEx(Model model, Vector3 position, Vector3 rotationAxis, float rotationAngle, Vector3 scale, Color tint);
  DrawModelWiresEx: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.ptr,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawModelPoints(Model model, Vector3 position, float scale, Color tint);
  DrawModelPoints: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawModelPointsEx(Model model, Vector3 position, Vector3 rotationAxis, float rotationAngle, Vector3 scale, Color tint);
  DrawModelPointsEx: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawBoundingBox(BoundingBox box, Color color);
  DrawBoundingBox: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawBillboard(Camera camera, Texture2D texture, Vector3 position, float scale, Color tint);
  DrawBillboard: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawBillboardRec(Camera camera, Texture2D texture, Rectangle source, Vector3 position, Vector2 size, Color tint);
  DrawBillboardRec: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
  // void DrawBillboardPro(Camera camera, Texture2D texture, Rectangle source, Vector3 position, Vector3 up, Vector2 size, Vector2 origin, float rotation, Color tint);
  DrawBillboardPro: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.f32,
      FFIType.ptr,
    ],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
