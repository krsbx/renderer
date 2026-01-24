export const ByteOffset = {
  id: 0,
  texture: 4,
  depth: 24,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
