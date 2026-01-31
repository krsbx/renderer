export const ByteOffset = {
  flags: 0,
  buttonID: 4,
  text: 8,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
