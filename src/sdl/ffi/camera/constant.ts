export const CameraPosition = {
  UNKNOWN: 0,
  FRONT_FACING: 1,
  BACK_FACING: 2,
} as const;

export type CameraPosition =
  (typeof CameraPosition)[keyof typeof CameraPosition];

export const CameraPermissionState = {
  DENIED: -1,
  PENDING: 0,
  APPROVED: 1,
} as const;

export type CameraPositionState =
  (typeof CameraPermissionState)[keyof typeof CameraPermissionState];
