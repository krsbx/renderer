import { FFIType, type FFIFunction } from 'bun:ffi';

export const MeshDefinition = {
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

  // Mesh generation functions - SHIMMED
  // Mesh GenMeshPoly(int sides, float radius);
  // Mesh GenMeshPlane(float width, float length, int resX, int resZ);
  // Mesh GenMeshCube(float width, float height, float length);
  // Mesh GenMeshSphere(float radius, int rings, int slices);
  // Mesh GenMeshHemiSphere(float radius, int rings, int slices);
  // Mesh GenMeshCylinder(float radius, float height, int slices);
  // Mesh GenMeshCone(float radius, float height, int slices);
  // Mesh GenMeshTorus(float radius, float size, int radSeg, int sides);
  // Mesh GenMeshKnot(float radius, float size, int radSeg, int sides);
  // Mesh GenMeshHeightmap(Image heightmap, Vector3 size);
  // Mesh GenMeshCubicmap(Image cubicmap, Vector3 cubeSize);
} satisfies Record<string, FFIFunction>;
