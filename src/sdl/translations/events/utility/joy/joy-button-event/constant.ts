export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  which: 16,
  button: 20,
  down: 21,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
