export const ByteOffset = {
  x: 0,
  y: 4,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
