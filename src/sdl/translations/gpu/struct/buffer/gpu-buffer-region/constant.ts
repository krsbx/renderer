export const ByteOffset = {
  buffer: 0,
  offset: 8,
  size: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
