export const ByteOffset = {
  texture: 0, // Texture2D (20 bytes)
  color: 20, // Color (4 bytes)
  value: 24, // float
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
