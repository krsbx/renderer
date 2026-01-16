export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  displayID: 16,
  data1: 20,
  data2: 24,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
