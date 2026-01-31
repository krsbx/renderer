export const ByteOffset = {
  fragment_shader: 0,
  num_sampler_bindings: 8,
  sampler_bindings: 16,
  num_storage_textures: 24,
  storage_textures: 32,
  num_storage_buffers: 40,
  storage_buffers: 48,
  props: 56,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
