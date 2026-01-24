export const ByteOffset = {
  id: 0,
  width: 4,
  height: 8,
  mipmaps: 12,
  format: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
