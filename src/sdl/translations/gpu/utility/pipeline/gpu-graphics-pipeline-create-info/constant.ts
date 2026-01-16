export const ByteOffset = {
  vertex_shader: 0,
  fragment_shader: 8,
  vertex_input_state: 16,
  primitive_type: 48,
  rasterizer_state: 52,
  multisample_state: 80,
  depth_stencil_state: 92,
  target_info: 136,
  props: 160,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
