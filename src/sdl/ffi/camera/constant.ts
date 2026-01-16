import type { Brand } from '../../types/shared';

const RawCameraPosition = {
  UNKNOWN: 0,
  FRONT_FACING: 1,
  BACK_FACING: 2,
} as const;

export const CameraPosition = RawCameraPosition as Readonly<
  Record<keyof typeof RawCameraPosition, Brand<number, 'CameraPosition'>>
>;

export type CameraPosition =
  (typeof CameraPosition)[keyof typeof CameraPosition];

const RawCameraPermissionState = {
  DENIED: -1,
  PENDING: 0,
  APPROVED: 1,
} as const;

export const CameraPermissionState = RawCameraPermissionState as Readonly<
  Record<
    keyof typeof RawCameraPermissionState,
    Brand<number, 'CameraPermissionState'>
  >
>;

export type CameraPermissionState =
  (typeof CameraPermissionState)[keyof typeof CameraPermissionState];
