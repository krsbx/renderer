export const ByteOffset = {
  min: 0, // Vector3 (12 bytes)
  max: 12, // Vector3 (12 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
