export const ByteOffset = {
  type: 0,
  dir1: 4,
  dir2: 8,
  dir3: 12,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
