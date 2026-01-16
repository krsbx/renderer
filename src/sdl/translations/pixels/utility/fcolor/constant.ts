export const ByteOffset = {
  r: 0,
  g: 4,
  b: 8,
  a: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
