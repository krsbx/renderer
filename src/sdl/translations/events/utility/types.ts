import type { EventType } from '../../../ffi/events/constant';
import type { JoyHatPosition } from '../../../ffi/joystick/constant';
import type {
  MouseButton,
  MouseButtonFlags,
  MouseWheelDirection,
} from '../../../ffi/mouse/constant';
import type { PenAxis, PenInputFlags } from '../../../ffi/pen/constant';
import type { PowerState } from '../../../ffi/power/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface SharedEvent extends FreeAddress, MemoryAddress {
  reserved: number;
  timestamp: bigint;
}

export type CommonEventType =
  | typeof EventType.TERMINATING
  | typeof EventType.LOW_MEMORY
  | typeof EventType.WILL_ENTER_BACKGROUND
  | typeof EventType.DID_ENTER_BACKGROUND
  | typeof EventType.WILL_ENTER_FOREGROUND
  | typeof EventType.DID_ENTER_FOREGROUND
  | typeof EventType.LOCALE_CHANGED
  | typeof EventType.SYSTEM_THEME_CHANGED
  | typeof EventType.KEYMAP_CHANGED
  | typeof EventType.SCREEN_KEYBOARD_SHOWN
  | typeof EventType.SCREEN_KEYBOARD_HIDDEN
  | typeof EventType.JOYSTICK_UPDATE_COMPLETE
  | typeof EventType.GAMEPAD_UPDATE_COMPLETE
  | typeof EventType.POLL_SENTINEL;

export interface RawCommonEvent extends FreeAddress, MemoryAddress {
  type: CommonEventType;
  reserved: number;
  timestamp: bigint;
}

export type DisplayEventType =
  | typeof EventType.DISPLAY_ORIENTATION
  | typeof EventType.DISPLAY_ADDED
  | typeof EventType.DISPLAY_REMOVED
  | typeof EventType.DISPLAY_MOVED
  | typeof EventType.DISPLAY_DESKTOP_MODE_CHANGED
  | typeof EventType.DISPLAY_CURRENT_MODE_CHANGED
  | typeof EventType.DISPLAY_CONTENT_SCALE_CHANGED
  | typeof EventType.DISPLAY_USABLE_BOUNDS_CHANGED;

export interface RawDisplayEvent extends SharedEvent {
  type: DisplayEventType;
  displayID: number;
  data1: number;
  data2: number;
}

export type WindowEventType =
  | typeof EventType.WINDOW_SHOWN
  | typeof EventType.WINDOW_HIDDEN
  | typeof EventType.WINDOW_EXPOSED
  | typeof EventType.WINDOW_MOVED
  | typeof EventType.WINDOW_RESIZED
  | typeof EventType.WINDOW_PIXEL_SIZE_CHANGED
  | typeof EventType.WINDOW_METAL_VIEW_RESIZED
  | typeof EventType.WINDOW_MINIMIZED
  | typeof EventType.WINDOW_MAXIMIZED
  | typeof EventType.WINDOW_RESTORED
  | typeof EventType.WINDOW_MOUSE_ENTER
  | typeof EventType.WINDOW_MOUSE_LEAVE
  | typeof EventType.WINDOW_FOCUS_GAINED
  | typeof EventType.WINDOW_FOCUS_LOST
  | typeof EventType.WINDOW_CLOSE_REQUESTED
  | typeof EventType.WINDOW_HIT_TEST
  | typeof EventType.WINDOW_ICCPROF_CHANGED
  | typeof EventType.WINDOW_DISPLAY_CHANGED
  | typeof EventType.WINDOW_DISPLAY_SCALE_CHANGED
  | typeof EventType.WINDOW_SAFE_AREA_CHANGED
  | typeof EventType.WINDOW_OCCLUDED
  | typeof EventType.WINDOW_ENTER_FULLSCREEN
  | typeof EventType.WINDOW_LEAVE_FULLSCREEN
  | typeof EventType.WINDOW_DESTROYED
  | typeof EventType.WINDOW_HDR_STATE_CHANGED;

export interface RawWindowEvent extends SharedEvent {
  type: WindowEventType;
  displayID: number;
  data1: number;
  data2: number;
}

export type KeyboardDeviceEventType =
  | typeof EventType.KEYBOARD_ADDED
  | typeof EventType.KEYBOARD_REMOVED;

export interface RawKeyboardDeviceEvent extends SharedEvent {
  type: KeyboardDeviceEventType;
  which: number;
}

export type KeyboardEventType =
  | typeof EventType.KEY_DOWN
  | typeof EventType.KEY_UP;

export interface RawKeyboardEvent extends SharedEvent {
  type: KeyboardEventType;
  which: number;
  windowID: number;
  scancode: number;
  key: number;
  mod: number;
  raw: number;
  down: boolean;
  repeat: boolean;
}

export type TextEditingEventType = typeof EventType.TEXT_EDITING;

export interface RawTextEditingEvent extends SharedEvent {
  type: TextEditingEventType;
  windowID: number;
  text: string;
  start: number;
  length: number;
}

export type TextEditingCandidatesEventType =
  typeof EventType.TEXT_EDITING_CANDIDATES;

export interface RawTextEditingCandidatesEvent extends SharedEvent {
  type: TextEditingCandidatesEventType;
  windowID: number;
  candidates: string[];
  num_candidates: number;
  selected_candidate: number;
  horizontal: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export type TextInputEventType = typeof EventType.TEXT_INPUT;

export interface RawTextInputEvent extends SharedEvent {
  type: TextInputEventType;
  windowID: number;
  text: string;
}

export type MouseDeviceEventType =
  | typeof EventType.MOUSE_ADDED
  | typeof EventType.MOUSE_REMOVED;

export interface RawMouseDeviceEvent extends SharedEvent {
  type: MouseDeviceEventType;
  which: number;
}

export type MouseMotionEventType = typeof EventType.MOUSE_MOTION;

export interface RawMouseMotionEvent extends SharedEvent {
  type: MouseMotionEventType;
  windowID: number;
  which: number;
  state: MouseButtonFlags;
  x: number;
  y: number;
  xrel: number;
  yrel: number;
}

export type MouseButtonEventType =
  | typeof EventType.MOUSE_BUTTON_DOWN
  | typeof EventType.MOUSE_BUTTON_UP;

export interface RawMouseButtonEvent extends SharedEvent {
  type: MouseButtonEventType;
  windowID: number;
  which: number;
  button: MouseButton;
  down: boolean;
  clicks: number;
  padding: number;
  x: number;
  y: number;
}

export type MouseWheelEventType = typeof EventType.MOUSE_WHEEL;

export interface RawMouseWheelEvent extends SharedEvent {
  type: MouseWheelEventType;
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

export type JoyAxisEventType = typeof EventType.JOYSTICK_AXIS_MOTION;

export interface RawJoyAxisEvent extends SharedEvent {
  type: JoyAxisEventType;
  which: number;
  axis: number;
  padding1: number;
  padding2: number;
  padding3: number;
  value: number;
  padding4: number;
}

export type JoyBallEventType = typeof EventType.JOYSTICK_BALL_MOTION;

export interface RawJoyBallEvent extends SharedEvent {
  type: JoyBallEventType;
  which: number;
  ball: number;
  padding1: number;
  padding2: number;
  padding3: number;
  xrel: number;
  yrel: number;
}

export type JoyHatEventType = typeof EventType.JOYSTICK_HAT_MOTION;

export interface RawJoyHatEvent extends SharedEvent {
  type: JoyHatEventType;
  which: number;
  hat: number;
  value: JoyHatPosition;
  padding1: number;
  padding2: number;
}

export type JoyButtonEventType =
  | typeof EventType.JOYSTICK_BUTTON_DOWN
  | typeof EventType.JOYSTICK_BUTTON_UP;

export interface RawJoyButtonEvent extends SharedEvent {
  type: JoyButtonEventType;
  which: number;
  button: number;
  down: boolean;
  padding1: number;
  padding2: number;
}

export type JoyDeviceEventType =
  | typeof EventType.JOYSTICK_ADDED
  | typeof EventType.JOYSTICK_REMOVED;

export interface RawJoyDeviceEvent extends SharedEvent {
  type: JoyDeviceEventType;
  which: number;
}

export type JoyBatteryEventType = typeof EventType.JOYSTICK_BATTERY_UPDATED;

export interface RawJoyBatteryEvent extends SharedEvent {
  type: JoyBatteryEventType;
  which: number;
  state: PowerState;
  percent: number;
}

export type GamepadAxisEventType = typeof EventType.GAMEPAD_AXIS_MOTION;

export interface RawGamepadAxisEvent extends SharedEvent {
  type: GamepadAxisEventType;
  which: number;
  axis: number;
  padding1: number;
  padding2: number;
  padding3: number;
  value: number;
  padding4: number;
}

export type GamepadButtonEventType =
  | typeof EventType.GAMEPAD_BUTTON_DOWN
  | typeof EventType.GAMEPAD_BUTTON_UP;

export interface RawGamepadButtonEvent extends SharedEvent {
  type: GamepadButtonEventType;
  which: number;
  button: number;
  down: boolean;
  padding1: number;
  padding2: number;
}

export type GamepadDeviceEventType =
  | typeof EventType.GAMEPAD_ADDED
  | typeof EventType.GAMEPAD_REMOVED
  | typeof EventType.GAMEPAD_REMAPPED
  | typeof EventType.GAMEPAD_STEAM_HANDLE_UPDATED;

export interface RawGamepadDeviceEvent extends SharedEvent {
  type: GamepadDeviceEventType;
  which: number;
}

export type GamepadTouchpadEventType =
  | typeof EventType.GAMEPAD_TOUCHPAD_DOWN
  | typeof EventType.GAMEPAD_TOUCHPAD_MOTION
  | typeof EventType.GAMEPAD_TOUCHPAD_UP;

export interface RawGamepadTouchpadEvent extends SharedEvent {
  type: GamepadTouchpadEventType;
  which: number;
  touchpad: number;
  finger: number;
  x: number;
  y: number;
  pressure: number;
}

export type GamepadSensorEventType = typeof EventType.GAMEPAD_SENSOR_UPDATE;

export interface RawGamepadSensorEvent extends SharedEvent {
  type: GamepadSensorEventType;
  which: number;
  sensor: number;
  data: [x_gravity: number, y_pitch: number, z_roll: number];
  sensor_timestamp: bigint;
}

export type AudioDeviceEventType =
  | typeof EventType.AUDIO_DEVICE_ADDED
  | typeof EventType.AUDIO_DEVICE_REMOVED
  | typeof EventType.AUDIO_DEVICE_FORMAT_CHANGED;

export interface RawAudioDeviceEvent extends SharedEvent {
  type: AudioDeviceEventType;
  which: number;
  recording: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export type CameraDeviceEventType =
  | typeof EventType.CAMERA_DEVICE_ADDED
  | typeof EventType.CAMERA_DEVICE_REMOVED
  | typeof EventType.CAMERA_DEVICE_APPROVED
  | typeof EventType.CAMERA_DEVICE_DENIED;

export interface RawCameraDeviceEvent extends SharedEvent {
  type: CameraDeviceEventType;
  which: number;
}

export type RenderEventType =
  | typeof EventType.RENDER_TARGETS_RESET
  | typeof EventType.RENDER_DEVICE_RESET
  | typeof EventType.RENDER_DEVICE_LOST;

export interface RawRenderEvent extends SharedEvent {
  type: RenderEventType;
  windowID: number;
}

export type TouchFingerEventType =
  | typeof EventType.FINGER_DOWN
  | typeof EventType.FINGER_UP
  | typeof EventType.FINGER_MOTION
  | typeof EventType.FINGER_CANCELED;

export interface RawTouchFingerEvent extends SharedEvent {
  type: TouchFingerEventType;
  touchID: bigint;
  fingerID: bigint;
  x: number;
  y: number;
  dx: number;
  dy: number;
  pressure: number;
  windowID: number;
}

export type PinchFingerEventType =
  | typeof EventType.PINCH_BEGIN
  | typeof EventType.PINCH_UPDATE
  | typeof EventType.PINCH_END;

export interface RawPinchFingerEvent extends SharedEvent {
  type: PinchFingerEventType;
  scale: number;
  windowID: number;
}

export type PenProximityEventType =
  | typeof EventType.PEN_PROXIMITY_IN
  | typeof EventType.PEN_PROXIMITY_OUT;

export interface RawPenProximityEvent extends SharedEvent {
  type: PenProximityEventType;
  windowID: number;
  which: number;
}

export type PenMotionEventType = typeof EventType.PEN_MOTION;

export interface RawPenMotionEvent extends SharedEvent {
  type: PenMotionEventType;
  windowID: number;
  which: number;
  pen_state: PenInputFlags;
  x: number;
  y: number;
}

export type PenTouchEventType =
  | typeof EventType.PEN_DOWN
  | typeof EventType.PEN_UP;

export interface RawPenTouchEvent extends SharedEvent {
  type: PenTouchEventType;
  windowID: number;
  which: number;
  pen_state: PenInputFlags;
  x: number;
  y: number;
  pressure: number;
  eraser: boolean;
  down: boolean;
}

export type PenButtonEventType =
  | typeof EventType.PEN_BUTTON_DOWN
  | typeof EventType.PEN_BUTTON_UP;

export interface RawPenButtonEvent extends SharedEvent {
  type: PenButtonEventType;
  windowID: number;
  which: number;
  pen_state: PenInputFlags;
  x: number;
  y: number;
  button: number;
  down: boolean;
}

export type PenAxisEventType = typeof EventType.PEN_AXIS;

export interface RawPenAxisEvent extends SharedEvent {
  type: PenAxisEventType;
  windowID: number;
  which: number;
  pen_state: PenInputFlags;
  x: number;
  y: number;
  axis: PenAxis;
  value: number;
}

export type DropEventType =
  | typeof EventType.DROP_FILE
  | typeof EventType.DROP_TEXT
  | typeof EventType.DROP_BEGIN
  | typeof EventType.DROP_COMPLETE
  | typeof EventType.DROP_POSITION;

export interface RawDropEvent extends SharedEvent {
  type: DropEventType;
  windowID: number;
  x: number;
  y: number;
  source: string;
  data: string;
}

export type ClipboardEventType = typeof EventType.CLIPBOARD_UPDATE;

export interface RawClipboardEvent extends SharedEvent {
  type: ClipboardEventType;
  owner: boolean;
  num_mime_types: number;
  mime_types: string[];
}

export type SensorEventType = typeof EventType.SENSOR_UPDATE;

export interface RawSensorEvent extends SharedEvent {
  type: SensorEventType;
  which: number;
  data: [
    sensor_1: number,
    sensor_2: number,
    sensor_3: number,
    sensor_4: number,
    sensor_5: number,
    sensor_6: number,
  ];
  sensor_timestamp: bigint;
}

export type QuitEventType = typeof EventType.QUIT;

export interface RawQuitEvent extends SharedEvent {
  type: QuitEventType;
}

export type UserEventType = typeof EventType.LAST | typeof EventType.USER;

export interface RawUserEvent extends SharedEvent {
  type: UserEventType;
  windowID: number;
  code: number;
  data1: bigint;
  data2: bigint;
}
