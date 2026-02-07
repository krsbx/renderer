export const ByteOffset = {
  x: 0,
  y: 4,
  z: 8,
  w: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
