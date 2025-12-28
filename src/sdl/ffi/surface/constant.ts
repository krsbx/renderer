export const ScaleMode = {
  SDL_SCALEMODE_INVALID: -1,
  SDL_SCALEMODE_NEAREST: 0 /**< nearest pixel sampling */,
  SDL_SCALEMODE_LINEAR: 1 /**< linear filtering */,
  SDL_SCALEMODE_PIXELART: 2 /**< nearest pixel sampling with improved scaling for pixel art, available since SDL 3.4.0 */,
} as const;

export type ScaleMode = (typeof ScaleMode)[keyof typeof ScaleMode];
