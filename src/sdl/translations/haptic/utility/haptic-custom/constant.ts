export const ByteOffset = {
  type: 0,
  direction: 4,
  length: 20,
  delay: 24,
  button: 26,
  interval: 28,
  channels: 30,
  period: 32,
  samples: 34,
  data: 40,
  attack_length: 48,
  attack_level: 50,
  fade_length: 52,
  fade_level: 54,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
