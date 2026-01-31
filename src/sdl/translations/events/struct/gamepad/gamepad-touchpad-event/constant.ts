export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  which: 16,
  touchpad: 20,
  finger: 24,
  x: 28,
  y: 32,
  pressure: 36,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
