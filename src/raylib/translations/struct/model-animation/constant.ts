export const ByteOffset = {
  boneCount: 0, // int
  frameCount: 4, // int
  bones: 8, // BoneInfo* (8 bytes)
  framePoses: 16, // Transform** (8 bytes)
  name: 24, // char[32] (32 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
