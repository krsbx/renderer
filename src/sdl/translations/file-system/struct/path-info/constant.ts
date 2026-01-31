export const ByteOffset = {
  type: 0,
  size: 8,
  create_time: 16,
  modify_time: 24,
  access_time: 32,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
