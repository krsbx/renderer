export const ByteOffset = {
  texture: 0,
  mip_level: 8,
  layer_or_depth_plane: 12,
  clear_color: 16,
  load_op: 32,
  store_op: 36,
  resolve_texture: 40,
  resolve_mip_level: 48,
  resolve_layer: 52,
  cycle: 56,
  cycle_resolve_texture: 57,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
