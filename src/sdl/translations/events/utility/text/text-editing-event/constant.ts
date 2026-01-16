export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  windowID: 16,
  text: 24,
  start: 32,
  length: 36,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
