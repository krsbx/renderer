export const ByteOffset = {
  format: 0,
  bits_per_pixel: 4,
  bytes_per_pixel: 5,
  Rmask: 8,
  Gmask: 12,
  Bmask: 16,
  Amask: 20,
  Rbits: 24,
  Gbits: 25,
  Bbits: 26,
  Abits: 27,
  Rshift: 28,
  Gshift: 29,
  Bshift: 30,
  Ashift: 31,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
