export const ByteOffset = {
  count: 0, // unsigned int (4 bytes)
  paths: 8, // char** (8 bytes, aligned)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
