export const ByteOffset = {
  texture: 0,
  mip_level: 8,
  layer: 12,
  x: 16,
  y: 20,
  z: 24,
  w: 28,
  h: 32,
  d: 36,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
