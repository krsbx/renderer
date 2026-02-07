export const ByteOffset = {
  m00: 0,
  m01: 4,
  m02: 8,
  m10: 12,
  m11: 16,
  m12: 20,
  m20: 24,
  m21: 28,
  m22: 32,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
