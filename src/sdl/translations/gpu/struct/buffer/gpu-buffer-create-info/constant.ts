export const ByteOffset = {
  usage: 0,
  size: 4,
  props: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
