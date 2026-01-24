export const ByteOffset = {
  data: 0,
  width: 8,
  height: 12,
  mipmaps: 16,
  format: 20,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
