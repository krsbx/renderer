export const ByteOffset = {
  transfer_buffer: 0,
  offset: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
