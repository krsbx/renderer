export const ByteOffset = {
  x: 0,
  y: 4,
  width: 8,
  height: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
