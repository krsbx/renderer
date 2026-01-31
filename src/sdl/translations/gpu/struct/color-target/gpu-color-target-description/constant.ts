export const ByteOffset = {
  format: 0,
  blend_state: 4,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
