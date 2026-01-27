import { FFIType, type FFIFunction } from 'bun:ffi';

export const MaterialDefinition = {
  // Material *LoadMaterials(const char *fileName, int *materialCount);
  LoadMaterials: {
    args: [FFIType.cstring, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // Material LoadMaterialDefault(void);
  // SHIMMED - see src/raylib/ffi/shims/definition.ts

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
} satisfies Record<string, FFIFunction>;
