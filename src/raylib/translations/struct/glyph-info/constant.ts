export const ByteOffset = {
  value: 0,
  offsetX: 4,
  offsetY: 8,
  advanceX: 12,
  image: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
