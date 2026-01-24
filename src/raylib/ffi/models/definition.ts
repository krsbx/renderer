import { FFIType, type FFIFunction } from 'bun:ffi';

export const ModelDefinition = {
  // #region Basic geometric 3D shapes drawing functions

  // void DrawLine3D(Vector3 startPos, Vector3 endPos, Color color);
  DrawLine3D: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawPoint3D(Vector3 position, Color color);
  DrawPoint3D: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawCircle3D(Vector3 center, float radius, Vector3 rotationAxis, float rotationAngle, Color color);
  DrawCircle3D: {
    args: [FFIType.ptr, FFIType.f32, FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTriangle3D(Vector3 v1, Vector3 v2, Vector3 v3, Color color);
  DrawTriangle3D: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawTriangleStrip3D(const Vector3 *points, int pointCount, Color color);
  DrawTriangleStrip3D: {
    args: [FFIType.ptr, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawCube(Vector3 position, float width, float height, float length, Color color);
  DrawCube: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawCubeV(Vector3 position, Vector3 size, Color color);
  DrawCubeV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawCubeWires(Vector3 position, float width, float height, float length, Color color);
  DrawCubeWires: {
    args: [FFIType.ptr, FFIType.f32, FFIType.f32, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawCubeWiresV(Vector3 position, Vector3 size, Color color);
  DrawCubeWiresV: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSphere(Vector3 centerPos, float radius, Color color);
  DrawSphere: {
    args: [FFIType.ptr, FFIType.f32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSphereEx(Vector3 centerPos, float radius, int rings, int slices, Color color);
  DrawSphereEx: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawSphereWires(Vector3 centerPos, float radius, int rings, int slices, Color color);
  DrawSphereWires: {
    args: [FFIType.ptr, FFIType.f32, FFIType.i32, FFIType.i32, FFIType.u32],
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
      FFIType.u32,
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
      FFIType.u32,
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
      FFIType.u32,
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
      FFIType.u32,
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
      FFIType.u32,
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
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawPlane(Vector3 centerPos, Vector2 size, Color color);
  DrawPlane: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawRay(Ray ray, Color color);
  DrawRay: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawGrid(int slices, float spacing);
  DrawGrid: {
    args: [FFIType.i32, FFIType.f32],
    returns: FFIType.void,
  },

  // #endregion Basic geometric 3D shapes drawing functions

  // #region Model management functions

  // Model LoadModel(const char *fileName);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadModel: { args: [FFIType.cstring], returns: FFIType.ptr },

  // Model LoadModelFromMesh(Mesh mesh);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadModelFromMesh: { args: [FFIType.ptr], returns: FFIType.ptr },

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
  // GetModelBoundingBox: { args: [FFIType.ptr], returns: FFIType.ptr },

  // #endregion Model management functions

  // #region Model drawing functions

  // void DrawModel(Model model, Vector3 position, float scale, Color tint);
  DrawModel: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
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
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawModelWires(Model model, Vector3 position, float scale, Color tint);
  DrawModelWires: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
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
    args: [FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
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
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void DrawBoundingBox(BoundingBox box, Color color);
  DrawBoundingBox: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void DrawBillboard(Camera camera, Texture2D texture, Vector3 position, float scale, Color tint);
  DrawBillboard: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.f32, FFIType.u32],
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
      FFIType.u32,
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
      FFIType.u32,
    ],
    returns: FFIType.void,
  },

  // #endregion Model drawing functions

  // #region Mesh management functions

  // void UploadMesh(Mesh *mesh, bool dynamic);
  UploadMesh: {
    args: [FFIType.ptr, FFIType.bool],
    returns: FFIType.void,
  },
  // void UpdateMeshBuffer(Mesh mesh, int index, const void *data, int dataSize, int offset);
  UpdateMeshBuffer: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void UnloadMesh(Mesh mesh);
  UnloadMesh: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawMesh(Mesh mesh, Material material, Matrix transform);
  DrawMesh: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void DrawMeshInstanced(Mesh mesh, Material material, const Matrix *transforms, int instances);
  DrawMeshInstanced: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },

  // BoundingBox GetMeshBoundingBox(Mesh mesh);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetMeshBoundingBox: { args: [FFIType.ptr], returns: FFIType.ptr },

  // void GenMeshTangents(Mesh *mesh);
  GenMeshTangents: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // bool ExportMesh(Mesh mesh, const char *fileName);
  ExportMesh: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool ExportMeshAsCode(Mesh mesh, const char *fileName);
  ExportMeshAsCode: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.bool,
  },

  // #endregion Mesh management functions

  // #region Mesh generation functions
  // NOTE: These functions return Mesh structs and are SHIMMED - see src/raylib/ffi/shims/definition.ts

  // Mesh GenMeshPoly(int sides, float radius);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshPoly: { args: [FFIType.i32, FFIType.f32], returns: FFIType.ptr },

  // Mesh GenMeshPlane(float width, float length, int resX, int resZ);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshPlane: { args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32], returns: FFIType.ptr },

  // Mesh GenMeshCube(float width, float height, float length);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshCube: { args: [FFIType.f32, FFIType.f32, FFIType.f32], returns: FFIType.ptr },

  // Mesh GenMeshSphere(float radius, int rings, int slices);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshSphere: { args: [FFIType.f32, FFIType.i32, FFIType.i32], returns: FFIType.ptr },

  // Mesh GenMeshHemiSphere(float radius, int rings, int slices);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshHemiSphere: { args: [FFIType.f32, FFIType.i32, FFIType.i32], returns: FFIType.ptr },

  // Mesh GenMeshCylinder(float radius, float height, int slices);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshCylinder: { args: [FFIType.f32, FFIType.f32, FFIType.i32], returns: FFIType.ptr },

  // Mesh GenMeshCone(float radius, float height, int slices);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshCone: { args: [FFIType.f32, FFIType.f32, FFIType.i32], returns: FFIType.ptr },

  // Mesh GenMeshTorus(float radius, float size, int radSeg, int sides);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshTorus: { args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32], returns: FFIType.ptr },

  // Mesh GenMeshKnot(float radius, float size, int radSeg, int sides);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshKnot: { args: [FFIType.f32, FFIType.f32, FFIType.i32, FFIType.i32], returns: FFIType.ptr },

  // Mesh GenMeshHeightmap(Image heightmap, Vector3 size);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshHeightmap: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },

  // Mesh GenMeshCubicmap(Image cubicmap, Vector3 cubeSize);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GenMeshCubicmap: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },

  // #endregion Mesh generation functions

  // #region Material loading/unloading functions

  // Material *LoadMaterials(const char *fileName, int *materialCount);
  LoadMaterials: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },

  // Material LoadMaterialDefault(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // LoadMaterialDefault: { args: [], returns: FFIType.ptr },

  // bool IsMaterialValid(Material material);
  IsMaterialValid: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void UnloadMaterial(Material material);
  UnloadMaterial: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetMaterialTexture(Material *material, int mapType, Texture2D texture);
  SetMaterialTexture: {
    args: [FFIType.ptr, FFIType.i32, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SetModelMeshMaterial(Model *model, int meshId, int materialId);
  SetModelMeshMaterial: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },

  // #endregion Material loading/unloading functions

  // #region Model animations loading/unloading functions

  // ModelAnimation *LoadModelAnimations(const char *fileName, int *animCount);
  LoadModelAnimations: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void UpdateModelAnimation(Model model, ModelAnimation anim, int frame);
  UpdateModelAnimation: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void UpdateModelAnimationBones(Model model, ModelAnimation anim, int frame);
  UpdateModelAnimationBones: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // void UnloadModelAnimation(ModelAnimation anim);
  UnloadModelAnimation: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void UnloadModelAnimations(ModelAnimation *animations, int animCount);
  UnloadModelAnimations: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.void,
  },
  // bool IsModelAnimationValid(Model model, ModelAnimation anim);
  IsModelAnimationValid: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },

  // #endregion Model animations loading/unloading functions

  // #region Collision detection functions

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
  // GetRayCollisionSphere: { args: [FFIType.ptr, FFIType.ptr, FFIType.f32], returns: FFIType.ptr },

  // RayCollision GetRayCollisionBox(Ray ray, BoundingBox box);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetRayCollisionBox: { args: [FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },

  // RayCollision GetRayCollisionMesh(Ray ray, Mesh mesh, Matrix transform);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetRayCollisionMesh: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },

  // RayCollision GetRayCollisionTriangle(Ray ray, Vector3 p1, Vector3 p2, Vector3 p3);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetRayCollisionTriangle: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },

  // RayCollision GetRayCollisionQuad(Ray ray, Vector3 p1, Vector3 p2, Vector3 p3, Vector3 p4);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts
  // GetRayCollisionQuad: { args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr], returns: FFIType.ptr },

  // #endregion Collision detection functions
} satisfies Record<string, FFIFunction>;
