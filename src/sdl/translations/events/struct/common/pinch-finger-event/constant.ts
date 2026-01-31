export const ByteOffset = {
  type: 0,
  reserved: 4,
  timestamp: 8,
  scale: 16,
  windowID: 20,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
