export const ByteOffset = {
  shader: 0, // Shader (16 bytes)
  maps: 16, // MaterialMap* pointer (8 bytes)
  params: 24, // float[4] (16 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
