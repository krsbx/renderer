export const ByteOffset = {
  type: 0,
  format: 4,
  usage: 8,
  width: 12,
  height: 16,
  layer_count_or_depth: 20,
  num_levels: 24,
  sample_count: 28,
  props: 32,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
