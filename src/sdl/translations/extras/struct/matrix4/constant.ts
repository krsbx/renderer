export const ByteOffset = {
  m00: 0,
  m01: 4,
  m02: 8,
  m03: 12,
  m10: 16,
  m11: 20,
  m12: 24,
  m13: 28,
  m20: 32,
  m21: 36,
  m22: 40,
  m23: 44,
  m30: 48,
  m31: 52,
  m32: 56,
  m33: 60,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
