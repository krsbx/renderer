export const ByteOffset = {
  groupcount_x: 0,
  groupcount_y: 4,
  groupcount_z: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
