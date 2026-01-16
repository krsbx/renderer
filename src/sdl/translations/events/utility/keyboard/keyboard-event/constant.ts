export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  windowID: 16,
  which: 20,
  scancode: 24,
  key: 28,
  mod: 32,
  raw: 34,
  down: 36,
  repeat: 37,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
