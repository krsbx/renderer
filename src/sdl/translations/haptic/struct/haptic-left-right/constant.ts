export const ByteOffset = {
  type: 0,
  length: 4,
  large_magnitude: 8,
  small_magnitude: 10,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
