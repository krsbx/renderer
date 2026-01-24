export const ByteOffset = {
  stream: 0, // AudioStream (28 bytes)
  frameCount: 28, // unsigned int
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
