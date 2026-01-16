export const ByteOffset = {
  num_vertices: 0,
  num_instances: 4,
  first_vertex: 8,
  first_instance: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
