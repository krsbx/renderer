export const ByteOffset = {
  position: 0, // Vector3 (12 bytes)
  direction: 12, // Vector3 (12 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
