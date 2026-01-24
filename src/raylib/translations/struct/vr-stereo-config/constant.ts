export const ByteOffset = {
  projection: 0, // Matrix[2] (128 bytes)
  viewOffset: 128, // Matrix[2] (128 bytes)
  leftLensCenter: 256, // float[2] (8 bytes)
  rightLensCenter: 264, // float[2] (8 bytes)
  leftScreenCenter: 272, // float[2] (8 bytes)
  rightScreenCenter: 280, // float[2] (8 bytes)
  scale: 288, // float[2] (8 bytes)
  scaleIn: 296, // float[2] (8 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
