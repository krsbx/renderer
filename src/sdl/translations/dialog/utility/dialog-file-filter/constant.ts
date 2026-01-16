export const ByteOffset = {
  name: 0,
  pattern: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
