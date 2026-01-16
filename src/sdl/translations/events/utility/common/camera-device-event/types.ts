import type { EventType } from '../../../../../ffi/events/constant';

export type CameraDeviceEventType =
  | typeof EventType.CAMERA_DEVICE_ADDED
  | typeof EventType.CAMERA_DEVICE_REMOVED
  | typeof EventType.CAMERA_DEVICE_APPROVED
  | typeof EventType.CAMERA_DEVICE_DENIED;
