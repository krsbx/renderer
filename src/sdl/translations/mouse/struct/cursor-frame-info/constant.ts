export const ByteOffset = {
  surface: 0,
  duration: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
