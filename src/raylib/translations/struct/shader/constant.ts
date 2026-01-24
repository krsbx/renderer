export const ByteOffset = {
  id: 0, // unsigned int (4 bytes)
  locs: 8, // int* pointer (8 bytes, aligned)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
