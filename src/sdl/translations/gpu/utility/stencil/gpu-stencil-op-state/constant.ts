export const ByteOffset = {
  fail_op: 0,
  pass_op: 4,
  depth_fail_op: 8,
  compare_op: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
