export const ByteOffset = {
  color_target_descriptions: 0,
  num_color_targets: 8,
  depth_stencil_format: 12,
  has_depth_stencil_target: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
