export const ByteOffset = {
  texture: 0,
  mip_level: 8,
  layer_or_depth_plane: 12,
  x: 16,
  y: 20,
  w: 24,
  h: 28,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
