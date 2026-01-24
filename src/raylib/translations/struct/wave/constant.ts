export const ByteOffset = {
  frameCount: 0, // unsigned int
  sampleRate: 4, // unsigned int
  sampleSize: 8, // unsigned int
  channels: 12, // unsigned int
  data: 16, // void* pointer (8 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
