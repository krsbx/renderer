export const ByteOffset = {
  num_indices: 0,
  num_instances: 4,
  first_index: 8,
  vertex_offset: 12,
  first_instance: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
