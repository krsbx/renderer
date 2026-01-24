import type { Brand } from '@/types/shared';

const RawSurfaceFlags = {
  PREALLOCATED: 0x00000001 /**< Surface uses preallocated pixel memory */,
  LOCK_NEEDED: 0x00000002 /**< Surface needs to be locked to access pixels */,
  LOCKED: 0x00000004 /**< Surface is currently locked */,
  SIMD_ALIGNED: 0x00000008 /**< Surface uses pixel memory allocated with SDL_aligned_alloc() */,
} as const;

export const SurfaceFlags = RawSurfaceFlags as Readonly<
  Record<keyof typeof RawSurfaceFlags, Brand<number, 'SurfaceFlags'>>
>;

export type SurfaceFlags = (typeof SurfaceFlags)[keyof typeof SurfaceFlags];

const RawScaleMode = {
  INVALID: -1,
  NEAREST: 0 /**< nearest pixel sampling */,
  LINEAR: 1 /**< linear filtering */,
  PIXELART: 2 /**< nearest pixel sampling with improved scaling for pixel art, available since SDL 3.4.0 */,
} as const;

export const ScaleMode = RawScaleMode as Readonly<
  Record<keyof typeof RawScaleMode, Brand<number, 'ScaleMode'>>
>;

export type ScaleMode = (typeof ScaleMode)[keyof typeof ScaleMode];

const RawFlipMode = {
  NONE: 0 /**< Do not flip */,
  HORIZONTAL: 1 /**< flip horizontally */,
  VERTICAL: 2 /**< flip vertically */,
  HORIZONTAL_AND_VERTICAL:
    1 | 2 /**< flip horizontally and vertically (not a diagonal flip) */,
} as const;

export const FlipMode = RawFlipMode as Readonly<
  Record<keyof typeof RawFlipMode, Brand<number, 'FlipMode'>>
>;

export type FlipMode = (typeof FlipMode)[keyof typeof FlipMode];
