export const ByteOffset = {
  location: 0,
  buffer_slot: 4,
  format: 8,
  offset: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
