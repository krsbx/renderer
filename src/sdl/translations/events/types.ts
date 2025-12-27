import type {
  EventType,
  JoyHatPosition,
  MouseWheelDirection,
} from '../../ffi/events/constant';
import type { MouseButton, MouseButtonFlags } from '../../ffi/mouse/constant';
import type { PowerState } from '../../ffi/power/constant';
import type { FreeAddress, MemoryAddress } from '../../types/shared';

export interface RawCommonEvent extends FreeAddress, MemoryAddress {
  type: EventType;
  reserved: number;
  timestamp: bigint;
}

export interface RawDisplayEvent extends RawCommonEvent {
  displayID: number;
  data1: number;
  data2: number;
}

export interface RawWindowEvent extends RawCommonEvent {
  displayID: number;
  data1: number;
  data2: number;
}

export interface RawKeyboardDeviceEvent extends RawCommonEvent {
  which: number;
}

export interface RawKeyboardEvent extends RawKeyboardDeviceEvent {
  windowID: number;
  scancode: number;
  key: number;
  mod: number;
  raw: number;
  down: boolean;
  repeat: boolean;
}

export interface RawTextEditingEvent extends RawCommonEvent {
  windowID: number;
  text: string;
  start: number;
  length: number;
}

export interface RawTextEditingCandidatesEvent extends RawCommonEvent {
  windowID: number;
  candidates: string[];
  num_candidates: number;
  selected_candidate: number;
  horizontal: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export interface RawTextInputEvent extends RawCommonEvent {
  windowID: number;
  text: string;
}

export interface RawMouseDeviceEvent extends RawCommonEvent {
  which: number;
}

export interface RawMouseMotionEvent extends RawMouseDeviceEvent {
  windowID: number;
  which: number;
  state: MouseButtonFlags;
  x: number;
  y: number;
  xrel: number;
  yrel: number;
}

export interface RawMouseButtonEvent extends RawCommonEvent {
  windowID: number;
  which: number;
  button: MouseButton;
  down: boolean;
  clicks: number;
  padding: number;
  x: number;
  y: number;
}

export interface RawMouseWheelEvent extends RawCommonEvent {
  windowID: number;
  which: number;
  x: number;
  y: number;
  direction: MouseWheelDirection;
  mouse_x: number;
  mouse_y: number;
  integer_x: number;
  integer_y: number;
}

export interface RawJoyAxisEvent extends RawCommonEvent {
  which: number;
  axis: number;
  padding1: number;
  padding2: number;
  padding3: number;
  value: number;
  padding4: number;
}

export interface RawJoyBallEvent extends RawCommonEvent {
  which: number;
  ball: number;
  padding1: number;
  padding2: number;
  padding3: number;
  xrel: number;
  yrel: number;
}

export interface RawJoyHatEvent extends RawCommonEvent {
  which: number;
  hat: number;
  value: JoyHatPosition;
  padding1: number;
  padding2: number;
}

export interface RawJoyButtonEvent extends RawCommonEvent {
  which: number;
  button: number;
  down: boolean;
  padding1: number;
  padding2: number;
}

export interface RawJoyDeviceEvent extends RawCommonEvent {
  which: number;
}

export interface RawJoyBatteryEvent extends RawCommonEvent {
  which: number;
  state: PowerState;
  percent: number;
}

export interface RawGamepadAxisEvent extends RawCommonEvent {
  which: number;
  axis: number;
  padding1: number;
  padding2: number;
  padding3: number;
  value: number;
  padding4: number;
}

export interface RawGamepadButtonEvent extends RawCommonEvent {
  which: number;
  button: number;
  down: boolean;
  padding1: number;
  padding2: number;
}

export interface RawGamepadDeviceEvent extends RawCommonEvent {
  which: number;
}

export interface RawGamepadTouchpadEvent extends RawCommonEvent {
  which: number;
  touchpad: number;
  finger: number;
  x: number;
  y: number;
  pressure: number;
}

export interface RawGamepadSensorEvent extends RawCommonEvent {
  which: number;
  sensor: number;
  data: [x_gravity: number, y_pitch: number, z_roll: number];
  sensor_timestamp: bigint;
}

export interface RawAudioDeviceEvent extends RawCommonEvent {
  which: number;
  recording: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export interface RawCameraDeviceEvent extends RawCommonEvent {
  which: number;
}

export interface RawRenderEvent extends RawCommonEvent {
  windowID: number;
}

export interface RawTouchFingerEvent extends RawCommonEvent {
  touchID: bigint;
  fingerID: bigint;
  x: number;
  y: number;
  dx: number;
  dy: number;
  pressure: number;
  windowID: number;
}

export interface RawPinchFingerEvent extends RawCommonEvent {
  scale: number;
  windowID: number;
}

export interface RawPenProximityEvent extends RawCommonEvent {
  windowID: number;
  which: number;
}

export interface RawPenMotionEvent extends RawCommonEvent {
  windowID: number;
  which: number;
  pen_state: number;
  x: number;
  y: number;
}
