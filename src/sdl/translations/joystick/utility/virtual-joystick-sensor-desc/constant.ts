export const ByteOffset = {
  type: 0,
  rate: 4,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
