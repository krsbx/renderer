export const ByteOffset = {
  texture: 0,
  sampler: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
