export const ByteOffset = {
  r: 0,
  g: 1,
  b: 2,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
