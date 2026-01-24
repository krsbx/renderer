export const ByteOffset = {
  buffer: 0, // rAudioBuffer* pointer (8 bytes)
  processor: 8, // rAudioProcessor* pointer (8 bytes)
  sampleRate: 16, // unsigned int
  sampleSize: 20, // unsigned int
  channels: 24, // unsigned int
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
