export const ByteOffset = {
  source: 0,
  left: 16,
  top: 20,
  right: 24,
  bottom: 28,
  layout: 32,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
