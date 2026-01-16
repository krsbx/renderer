export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  windowID: 16,
  code: 20,
  data1: 24,
  data2: 32,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
