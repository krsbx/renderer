export const ByteOffset = {
  compare_op: 0,
  back_stencil_state: 4,
  front_stencil_state: 20,
  compare_mask: 36,
  write_mask: 37,
  enable_depth_test: 38,
  enable_depth_write: 39,
  enable_stencil_test: 40,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
