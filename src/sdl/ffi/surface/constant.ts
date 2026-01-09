export enum SurfaceFlags {
  PREALLOCATED = 0x00000001 /**< Surface uses preallocated pixel memory */,
  LOCK_NEEDED = 0x00000002 /**< Surface needs to be locked to access pixels */,
  LOCKED = 0x00000004 /**< Surface is currently locked */,
  SIMD_ALIGNED = 0x00000008 /**< Surface uses pixel memory allocated with SDL_aligned_alloc() */,
}

export enum ScaleMode {
  INVALID = -1,
  NEAREST = 0 /**< nearest pixel sampling */,
  LINEAR = 1 /**< linear filtering */,
  PIXELART = 2 /**< nearest pixel sampling with improved scaling for pixel art, available since SDL 3.4.0 */,
}

export enum FlipMode {
  NONE = 0 /**< Do not flip */,
  HORIZONTAL = 1 /**< flip horizontally */,
  VERTICAL = 2 /**< flip vertically */,
  HORIZONTAL_AND_VERTICAL = FlipMode.HORIZONTAL |
    FlipMode.VERTICAL /**< flip horizontally and vertically (not a diagonal flip) */,
}
