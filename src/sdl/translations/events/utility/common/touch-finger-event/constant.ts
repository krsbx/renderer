export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  touchID: 16,
  fingerID: 24,
  x: 32,
  y: 36,
  dx: 40,
  dy: 44,
  pressure: 48,
  windowID: 52,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
