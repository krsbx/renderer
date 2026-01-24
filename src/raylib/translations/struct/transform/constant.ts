export const ByteOffset = {
  translation: 0, // Vector3 (12 bytes)
  rotation: 12, // Quaternion/Vector4 (16 bytes)
  scale: 28, // Vector3 (12 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
