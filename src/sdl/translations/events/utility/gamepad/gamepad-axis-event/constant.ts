export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  which: 16,
  axis: 20,
  value: 24,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
