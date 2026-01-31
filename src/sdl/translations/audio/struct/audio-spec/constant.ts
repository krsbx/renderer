export const ByteOffset = {
  format: 0,
  channels: 4,
  freq: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
