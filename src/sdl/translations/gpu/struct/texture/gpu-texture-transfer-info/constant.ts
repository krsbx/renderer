export const ByteOffset = {
  transfer_buffer: 0,
  offset: 8,
  pixels_per_row: 12,
  rows_per_layer: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
