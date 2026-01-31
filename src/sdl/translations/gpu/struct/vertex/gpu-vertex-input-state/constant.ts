export const ByteOffset = {
  vertex_buffer_descriptions: 0,
  num_vertex_buffers: 8,
  vertex_attributes: 16,
  num_vertex_attributes: 24,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
