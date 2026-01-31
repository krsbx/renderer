export const ByteOffset = {
  flags: 0,
  format: 4,
  w: 8,
  h: 12,
  pitch: 16,
  pixels: 24,
  refcount: 32,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
