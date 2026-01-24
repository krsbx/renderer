export const ByteOffset = {
  vertexCount: 0, // int
  triangleCount: 4, // int
  vertices: 8, // float* (8 bytes)
  texcoords: 16, // float* (8 bytes)
  texcoords2: 24, // float* (8 bytes)
  normals: 32, // float* (8 bytes)
  tangents: 40, // float* (8 bytes)
  colors: 48, // unsigned char* (8 bytes)
  indices: 56, // unsigned short* (8 bytes)
  animVertices: 64, // float* (8 bytes)
  animNormals: 72, // float* (8 bytes)
  boneIds: 80, // unsigned char* (8 bytes)
  boneWeights: 88, // float* (8 bytes)
  boneMatrices: 96, // Matrix* (8 bytes)
  boneCount: 104, // int
  vaoId: 108, // unsigned int
  vboId: 112, // unsigned int* (8 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
