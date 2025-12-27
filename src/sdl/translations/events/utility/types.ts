import type {
  EventType,
  JoyHatPosition,
  MouseWheelDirection,
  PenAxis,
  PenInputFlags,
} from '../../../ffi/events/constant';
import type {
  MouseButton,
  MouseButtonFlags,
} from '../../../ffi/mouse/constant';
import type { PowerState } from '../../../ffi/power/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface SharedEvent extends FreeAddress, MemoryAddress {
  reserved: number;
  timestamp: bigint;
}

export type CommonEventType =
  | typeof EventType.SDL_TERMINATING
  | typeof EventType.SDL_LOW_MEMORY
  | typeof EventType.SDL_WILL_ENTER_BACKGROUND
  | typeof EventType.SDL_DID_ENTER_BACKGROUND
  | typeof EventType.SDL_WILL_ENTER_FOREGROUND
  | typeof EventType.SDL_DID_ENTER_FOREGROUND
  | typeof EventType.SDL_LOCALE_CHANGED
  | typeof EventType.SDL_SYSTEM_THEME_CHANGED
  | typeof EventType.SDL_KEYMAP_CHANGED
  | typeof EventType.SDL_SCREEN_KEYBOARD_SHOWN
  | typeof EventType.SDL_SCREEN_KEYBOARD_HIDDEN
  | typeof EventType.SDL_JOYSTICK_UPDATE_COMPLETE
  | typeof EventType.SDL_GAMEPAD_UPDATE_COMPLETE
  | typeof EventType.SDL_POLL_SENTINEL;

export interface RawCommonEvent extends FreeAddress, MemoryAddress {
  type: CommonEventType;
  reserved: number;
  timestamp: bigint;
}

export type DisplayEventType =
  | typeof EventType.SDL_DISPLAY_ORIENTATION
  | typeof EventType.SDL_DISPLAY_ADDED
  | typeof EventType.SDL_DISPLAY_REMOVED
  | typeof EventType.SDL_DISPLAY_MOVED
  | typeof EventType.SDL_DISPLAY_DESKTOP_MODE_CHANGED
  | typeof EventType.SDL_DISPLAY_CURRENT_MODE_CHANGED
  | typeof EventType.SDL_DISPLAY_CONTENT_SCALE_CHANGED
  | typeof EventType.SDL_DISPLAY_USABLE_BOUNDS_CHANGED;

export interface RawDisplayEvent extends SharedEvent {
  type: DisplayEventType;
  displayID: number;
  data1: number;
  data2: number;
}

export type WindowEventType =
  | typeof EventType.SDL_WINDOW_SHOWN
  | typeof EventType.SDL_WINDOW_HIDDEN
  | typeof EventType.SDL_WINDOW_EXPOSED
  | typeof EventType.SDL_WINDOW_MOVED
  | typeof EventType.SDL_WINDOW_RESIZED
  | typeof EventType.SDL_WINDOW_PIXEL_SIZE_CHANGED
  | typeof EventType.SDL_WINDOW_METAL_VIEW_RESIZED
  | typeof EventType.SDL_WINDOW_MINIMIZED
  | typeof EventType.SDL_WINDOW_MAXIMIZED
  | typeof EventType.SDL_WINDOW_RESTORED
  | typeof EventType.SDL_WINDOW_MOUSE_ENTER
  | typeof EventType.SDL_WINDOW_MOUSE_LEAVE
  | typeof EventType.SDL_WINDOW_FOCUS_GAINED
  | typeof EventType.SDL_WINDOW_FOCUS_LOST
  | typeof EventType.SDL_WINDOW_CLOSE_REQUESTED
  | typeof EventType.SDL_WINDOW_HIT_TEST
  | typeof EventType.SDL_WINDOW_ICCPROF_CHANGED
  | typeof EventType.SDL_WINDOW_DISPLAY_CHANGED
  | typeof EventType.SDL_WINDOW_DISPLAY_SCALE_CHANGED
  | typeof EventType.SDL_WINDOW_SAFE_AREA_CHANGED
  | typeof EventType.SDL_WINDOW_OCCLUDED
  | typeof EventType.SDL_WINDOW_ENTER_FULLSCREEN
  | typeof EventType.SDL_WINDOW_LEAVE_FULLSCREEN
  | typeof EventType.SDL_WINDOW_DESTROYED
  | typeof EventType.SDL_WINDOW_HDR_STATE_CHANGED;

export interface RawWindowEvent extends SharedEvent {
  type: WindowEventType;
  displayID: number;
  data1: number;
  data2: number;
}

export type KeyboardDeviceEventType =
  | typeof EventType.SDL_KEYBOARD_ADDED
  | typeof EventType.SDL_KEYBOARD_REMOVED;

export interface RawKeyboardDeviceEvent extends SharedEvent {
  type: KeyboardDeviceEventType;
  which: number;
}

export type KeyboardEventType =
  | typeof EventType.SDL_KEY_DOWN
  | typeof EventType.SDL_KEY_UP;

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

export type TextEditingEventType = typeof EventType.SDL_TEXT_EDITING;

export interface RawTextEditingEvent extends SharedEvent {
  type: TextEditingEventType;
  windowID: number;
  text: string;
  start: number;
  length: number;
}

export type TextEditingCandidatesEventType =
  typeof EventType.SDL_TEXT_EDITING_CANDIDATES;

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

export type TextInputEventType = typeof EventType.SDL_TEXT_INPUT;

export interface RawTextInputEvent extends SharedEvent {
  type: TextInputEventType;
  windowID: number;
  text: string;
}

export type MouseDeviceEventType =
  | typeof EventType.SDL_MOUSE_ADDED
  | typeof EventType.SDL_MOUSE_REMOVED;

export interface RawMouseDeviceEvent extends SharedEvent {
  type: MouseDeviceEventType;
  which: number;
}

export type MouseMotionEventType = typeof EventType.SDL_MOUSE_MOTION;

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
  | typeof EventType.SDL_MOUSE_BUTTON_DOWN
  | typeof EventType.SDL_MOUSE_BUTTON_UP;

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

export type MouseWheelEventType = typeof EventType.SDL_MOUSE_WHEEL;

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

export type JoyAxisEventType = typeof EventType.SDL_JOYSTICK_AXIS_MOTION;

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

export type JoyBallEventType = typeof EventType.SDL_JOYSTICK_BALL_MOTION;

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

export type JoyHatEventType = typeof EventType.SDL_JOYSTICK_HAT_MOTION;

export interface RawJoyHatEvent extends SharedEvent {
  type: JoyHatEventType;
  which: number;
  hat: number;
  value: JoyHatPosition;
  padding1: number;
  padding2: number;
}

export type JoyButtonEventType =
  | typeof EventType.SDL_JOYSTICK_BUTTON_DOWN
  | typeof EventType.SDL_JOYSTICK_BUTTON_UP;

export interface RawJoyButtonEvent extends SharedEvent {
  type: JoyButtonEventType;
  which: number;
  button: number;
  down: boolean;
  padding1: number;
  padding2: number;
}

export type JoyDeviceEventType =
  | typeof EventType.SDL_JOYSTICK_ADDED
  | typeof EventType.SDL_JOYSTICK_REMOVED;

export interface RawJoyDeviceEvent extends SharedEvent {
  type: JoyDeviceEventType;
  which: number;
}

export type JoyBatteryEventType = typeof EventType.SDL_JOYSTICK_BATTERY_UPDATED;

export interface RawJoyBatteryEvent extends SharedEvent {
  type: JoyBatteryEventType;
  which: number;
  state: PowerState;
  percent: number;
}

export type GamepadAxisEventType = typeof EventType.SDL_GAMEPAD_AXIS_MOTION;

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
  | typeof EventType.SDL_GAMEPAD_BUTTON_DOWN
  | typeof EventType.SDL_GAMEPAD_BUTTON_UP;

export interface RawGamepadButtonEvent extends SharedEvent {
  type: GamepadButtonEventType;
  which: number;
  button: number;
  down: boolean;
  padding1: number;
  padding2: number;
}

export type GamepadDeviceEventType =
  | typeof EventType.SDL_GAMEPAD_ADDED
  | typeof EventType.SDL_GAMEPAD_REMOVED
  | typeof EventType.SDL_GAMEPAD_REMAPPED
  | typeof EventType.SDL_GAMEPAD_STEAM_HANDLE_UPDATED;

export interface RawGamepadDeviceEvent extends SharedEvent {
  type: GamepadDeviceEventType;
  which: number;
}

export type GamepadTouchpadEventType =
  | typeof EventType.SDL_GAMEPAD_TOUCHPAD_DOWN
  | typeof EventType.SDL_GAMEPAD_TOUCHPAD_MOTION
  | typeof EventType.SDL_GAMEPAD_TOUCHPAD_UP;

export interface RawGamepadTouchpadEvent extends SharedEvent {
  type: GamepadTouchpadEventType;
  which: number;
  touchpad: number;
  finger: number;
  x: number;
  y: number;
  pressure: number;
}

export type GamepadSensorEventType = typeof EventType.SDL_GAMEPAD_SENSOR_UPDATE;

export interface RawGamepadSensorEvent extends SharedEvent {
  type: GamepadSensorEventType;
  which: number;
  sensor: number;
  data: [x_gravity: number, y_pitch: number, z_roll: number];
  sensor_timestamp: bigint;
}

export type AudioDeviceEventType =
  | typeof EventType.SDL_AUDIO_DEVICE_ADDED
  | typeof EventType.SDL_AUDIO_DEVICE_REMOVED
  | typeof EventType.SDL_AUDIO_DEVICE_FORMAT_CHANGED;

export interface RawAudioDeviceEvent extends SharedEvent {
  type: AudioDeviceEventType;
  which: number;
  recording: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export type CameraDeviceEventType =
  | typeof EventType.SDL_CAMERA_DEVICE_ADDED
  | typeof EventType.SDL_CAMERA_DEVICE_REMOVED
  | typeof EventType.SDL_CAMERA_DEVICE_APPROVED
  | typeof EventType.SDL_CAMERA_DEVICE_DENIED;

export interface RawCameraDeviceEvent extends SharedEvent {
  type: CameraDeviceEventType;
  which: number;
}

export type RenderEventType =
  | typeof EventType.SDL_RENDER_TARGETS_RESET
  | typeof EventType.SDL_RENDER_DEVICE_RESET
  | typeof EventType.SDL_RENDER_DEVICE_LOST;

export interface RawRenderEvent extends SharedEvent {
  type: RenderEventType;
  windowID: number;
}

export type TouchFingerEventType =
  | typeof EventType.SDL_FINGER_DOWN
  | typeof EventType.SDL_FINGER_UP
  | typeof EventType.SDL_FINGER_MOTION
  | typeof EventType.SDL_FINGER_CANCELED;

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
  | typeof EventType.SDL_PINCH_BEGIN
  | typeof EventType.SDL_PINCH_UPDATE
  | typeof EventType.SDL_PINCH_END;

export interface RawPinchFingerEvent extends SharedEvent {
  type: PinchFingerEventType;
  scale: number;
  windowID: number;
}

export type PenProximityEventType =
  | typeof EventType.SDL_PEN_PROXIMITY_IN
  | typeof EventType.SDL_PEN_PROXIMITY_OUT;

export interface RawPenProximityEvent extends SharedEvent {
  type: PenProximityEventType;
  windowID: number;
  which: number;
}

export type PenMotionEventType = typeof EventType.SDL_PEN_MOTION;

export interface RawPenMotionEvent extends SharedEvent {
  type: PenMotionEventType;
  windowID: number;
  which: number;
  pen_state: PenInputFlags;
  x: number;
  y: number;
}

export type PenTouchEventType =
  | typeof EventType.SDL_PEN_DOWN
  | typeof EventType.SDL_PEN_UP;

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
  | typeof EventType.SDL_PEN_BUTTON_DOWN
  | typeof EventType.SDL_PEN_BUTTON_UP;

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

export type PenAxisEventType = typeof EventType.SDL_PEN_AXIS;

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
  | typeof EventType.SDL_DROP_FILE
  | typeof EventType.SDL_DROP_TEXT
  | typeof EventType.SDL_DROP_BEGIN
  | typeof EventType.SDL_DROP_COMPLETE
  | typeof EventType.SDL_DROP_POSITION;

export interface RawDropEvent extends SharedEvent {
  type: DropEventType;
  windowID: number;
  x: number;
  y: number;
  source: string;
  data: string;
}

export type ClipboardEventType = typeof EventType.SDL_CLIPBOARD_UPDATE;

export interface RawClipboardEvent extends SharedEvent {
  type: ClipboardEventType;
  owner: boolean;
  num_mime_types: number;
  mime_types: string[];
}

export type SensorEventType = typeof EventType.SDL_SENSOR_UPDATE;

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

export type QuitEventType = typeof EventType.SDL_QUIT;

export interface RawQuitEvent extends SharedEvent {
  type: QuitEventType;
}

export type UserEventType =
  | typeof EventType.SDL_LAST
  | typeof EventType.SDL_USER;

export interface RawUserEvent extends SharedEvent {
  type: UserEventType;
  windowID: number;
  code: number;
  data1: bigint;
  data2: bigint;
}
