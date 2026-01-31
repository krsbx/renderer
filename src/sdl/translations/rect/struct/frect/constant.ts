export const ByteOffset = {
  x: 0,
  y: 4,
  w: 8,
  h: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
