import type { EventType } from '../../../../../ffi/events/constant';

export type CameraDeviceEventType =
  | EventType.CAMERA_DEVICE_ADDED
  | EventType.CAMERA_DEVICE_REMOVED
  | EventType.CAMERA_DEVICE_APPROVED
  | EventType.CAMERA_DEVICE_DENIED;
