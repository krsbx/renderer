export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  which: 16,
  data1: 20,
  data2: 24,
  data3: 28,
  data4: 32,
  data5: 36,
  data6: 40,
  sensor_timestamp: 48,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
