export const ByteOffset = {
  buffer: 0,
  cycle: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
