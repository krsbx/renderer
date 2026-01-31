export const ByteOffset = {
  id: 0,
  x: 8,
  y: 12,
  pressure: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
