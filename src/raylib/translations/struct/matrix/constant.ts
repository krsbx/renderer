export const ByteOffset = {
  m0: 0,
  m4: 4,
  m8: 8,
  m12: 12,
  m1: 16,
  m5: 20,
  m9: 24,
  m13: 28,
  m2: 32,
  m6: 36,
  m10: 40,
  m14: 44,
  m3: 48,
  m7: 52,
  m11: 56,
  m15: 60,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
