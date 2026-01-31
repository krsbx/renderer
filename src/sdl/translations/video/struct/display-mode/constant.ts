export const ByteOffset = {
  displayID: 0,
  format: 4,
  w: 8,
  h: 12,
  pixel_density: 16,
  refresh_rate: 20,
  refresh_rate_numerator: 24,
  refresh_rate_denominator: 28,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
