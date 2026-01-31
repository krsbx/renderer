export const ByteOffset = {
  texture: 0,
  mip_level: 8,
  layer: 12,
  x: 16,
  y: 20,
  z: 24,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
