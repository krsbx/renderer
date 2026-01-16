export const ByteOffset = {
  texture: 0,
  mip_level: 8,
  layer: 12,
  cycle: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
