export const ByteOffset = {
  position: 0,
  color: 8,
  tex_coord: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
