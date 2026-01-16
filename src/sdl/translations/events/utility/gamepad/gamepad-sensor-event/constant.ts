export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  which: 16,
  sensor: 20,
  data1: 24,
  data2: 28,
  data3: 32,
  sensor_timestamp: 40,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
