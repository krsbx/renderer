export const ByteOffset = {
  language: 0,
  country: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
