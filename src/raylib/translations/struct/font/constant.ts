export const ByteOffset = {
  baseSize: 0,
  glyphCount: 4,
  glyphPadding: 8,
  texture: 12,
  recs: 32,
  glyphs: 40,
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
