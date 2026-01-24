export const ByteOffset = {
  offset: 0, // Vector2 (8 bytes)
  target: 8, // Vector2 (8 bytes)
  rotation: 16, // float
  zoom: 20, // float
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
