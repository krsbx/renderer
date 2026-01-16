export const ByteOffset = {
  code_size: 0,
  code: 8,
  entrypoint: 16,
  format: 24,
  stage: 28,
  num_samplers: 32,
  num_storage_textures: 36,
  num_storage_buffers: 40,
  num_uniform_buffers: 44,
  props: 48,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
