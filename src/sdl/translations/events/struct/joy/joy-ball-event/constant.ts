export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  which: 16,
  ball: 20,
  xrel: 24,
  yrel: 26,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
