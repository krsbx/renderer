export const ByteOffset = {
  fill_mode: 0,
  cull_mode: 4,
  front_face: 8,
  depth_bias_constant_factor: 12,
  depth_bias_clamp: 16,
  depth_bias_slope_factor: 20,
  enable_depth_bias: 24,
  enable_depth_clip: 25,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
