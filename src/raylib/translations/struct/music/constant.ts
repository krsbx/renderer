export const ByteOffset = {
  stream: 0, // AudioStream (28 bytes)
  frameCount: 28, // unsigned int
  looping: 32, // bool
  ctxType: 36, // int
  ctxData: 40, // void* pointer (8 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
