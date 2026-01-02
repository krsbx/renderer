export const BlendMode = {
  NONE: 0x00000000 /**< no blending: dstRGBA = srcRGBA */,
  BLEND: 0x00000001 /**< alpha blending: dstRGB = (srcRGB * srcA) + (dstRGB * (1-srcA)), dstA = srcA + (dstA * (1-srcA)) */,
  BLEND_PREMULTIPLIED: 0x00000010 /**< pre-multiplied alpha blending: dstRGBA = srcRGBA + (dstRGBA * (1-srcA)) */,
  ADD: 0x00000002 /**< additive blending: dstRGB = (srcRGB * srcA) + dstRGB, dstA = dstA */,
  ADD_PREMULTIPLIED: 0x00000020 /**< pre-multiplied additive blending: dstRGB = srcRGB + dstRGB, dstA = dstA */,
  MOD: 0x00000004 /**< color modulate: dstRGB = srcRGB * dstRGB, dstA = dstA */,
  MUL: 0x00000008 /**< color multiply: dstRGB = (srcRGB * dstRGB) + (dstRGB * (1-srcA)), dstA = dstA */,
  INVALID: 0x7fffffff,
} as const;

export type BlendMode = (typeof BlendMode)[keyof typeof BlendMode];

export const BlendOperation = {
  ADD: 0x1,
  SUBTRACT: 0x2,
  REV_SUBTRACT: 0x3,
  MINIMUM: 0x4,
  MAXIMUM: 0x5,
} as const;

export type BlendOperation =
  (typeof BlendOperation)[keyof typeof BlendOperation];

export const BlendFactor = {
  SDL_BLENDFACTOR_ZERO: 0x1 /**< 0, 0, 0, 0 */,
  SDL_BLENDFACTOR_ONE: 0x2 /**< 1, 1, 1, 1 */,
  SDL_BLENDFACTOR_SRC_COLOR: 0x3 /**< srcR, srcG, srcB, srcA */,
  SDL_BLENDFACTOR_ONE_MINUS_SRC_COLOR: 0x4 /**< 1-srcR, 1-srcG, 1-srcB, 1-srcA */,
  SDL_BLENDFACTOR_SRC_ALPHA: 0x5 /**< srcA, srcA, srcA, srcA */,
  SDL_BLENDFACTOR_ONE_MINUS_SRC_ALPHA: 0x6 /**< 1-srcA, 1-srcA, 1-srcA, 1-srcA */,
  SDL_BLENDFACTOR_DST_COLOR: 0x7 /**< dstR, dstG, dstB, dstA */,
  SDL_BLENDFACTOR_ONE_MINUS_DST_COLOR: 0x8 /**< 1-dstR, 1-dstG, 1-dstB, 1-dstA */,
  SDL_BLENDFACTOR_DST_ALPHA: 0x9 /**< dstA, dstA, dstA, dstA */,
  SDL_BLENDFACTOR_ONE_MINUS_DST_ALPHA: 0xa /**< 1-dstA, 1-dstA, 1-dstA, 1-dstA */,
} as const;

export type BlendFactor = (typeof BlendFactor)[keyof typeof BlendFactor];
