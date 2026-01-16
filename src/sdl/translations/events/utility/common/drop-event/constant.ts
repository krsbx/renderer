export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  windowID: 16,
  x: 20,
  y: 24,
  source: 32,
  data: 40,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
