export const ByteOffset = {
  transform: 0, // Matrix (64 bytes)
  meshCount: 64, // int
  materialCount: 68, // int
  meshes: 72, // Mesh* (8 bytes)
  materials: 80, // Material* (8 bytes)
  meshMaterial: 88, // int* (8 bytes)
  boneCount: 96, // int
  bones: 104, // BoneInfo* (8 bytes)
  bindPose: 112, // Transform* (8 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
