export const ByteOffset = {
  hit: 0, // bool (1 byte, but padded to 4)
  distance: 4, // float
  point: 8, // Vector3 (12 bytes)
  normal: 20, // Vector3 (12 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
