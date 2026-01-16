export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  windowID: 16,
  which: 20,
  pen_state: 24,
  x: 28,
  y: 32,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
