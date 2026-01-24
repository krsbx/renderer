export const ByteOffset = {
  hResolution: 0, // int
  vResolution: 4, // int
  hScreenSize: 8, // float
  vScreenSize: 12, // float
  eyeToScreenDistance: 16, // float
  lensSeparationDistance: 20, // float
  interpupillaryDistance: 24, // float
  lensDistortionValues: 28, // float[4] (16 bytes)
  chromaAbCorrection: 44, // float[4] (16 bytes)
} as const;

export type ByteOffset = (typeof ByteOffset)[keyof typeof ByteOffset];
