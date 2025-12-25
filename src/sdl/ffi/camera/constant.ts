export const CameraPosition = {
  SDL_CAMERA_POSITION_UNKNOWN: 0,
  SDL_CAMERA_POSITION_FRONT_FACING: 1,
  SDL_CAMERA_POSITION_BACK_FACING: 2,
} as const;

export type CameraPosition =
  (typeof CameraPosition)[keyof typeof CameraPosition];
