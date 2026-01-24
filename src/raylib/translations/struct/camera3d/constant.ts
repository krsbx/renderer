export const ByteOffset = {
  position: 0, // Vector3 (12 bytes)
  target: 12, // Vector3 (12 bytes)
  up: 24, // Vector3 (12 bytes)
  fovy: 36, // float
  projection: 40, // int
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
