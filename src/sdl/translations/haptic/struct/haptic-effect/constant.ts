export const ByteOffset = {
  type: 0,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
