export const ByteOffset = {
  year: 0,
  month: 4,
  day: 8,
  hour: 12,
  minute: 16,
  second: 20,
  nanosecond: 24,
  day_of_week: 28,
  utc_offset: 32,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
