export const ByteOffset = {
  code_size: 0,
  code: 8,
  entrypoint: 16,
  format: 24,
  num_samplers: 28,
  num_readonly_storage_textures: 32,
  num_readonly_storage_buffers: 36,
  num_readwrite_storage_textures: 40,
  num_readwrite_storage_buffers: 44,
  num_uniform_buffers: 48,
  threadcount_x: 52,
  threadcount_y: 56,
  threadcount_z: 60,
  props: 64,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
