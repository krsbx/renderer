export const ByteOffset = {
  status: 0,
  thread: 8,
  reserved: 16,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
