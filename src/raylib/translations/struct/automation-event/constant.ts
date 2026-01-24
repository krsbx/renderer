export const ByteOffset = {
  frame: 0, // unsigned int (4 bytes)
  type: 4, // unsigned int (4 bytes)
  params: 8, // int[4] (16 bytes)
} as const;
