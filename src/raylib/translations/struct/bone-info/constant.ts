export const ByteOffset = {
  name: 0, // char[32] (32 bytes)
  parent: 32, // int
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
