export const ByteOffset = {
  a: 0,
  b: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
