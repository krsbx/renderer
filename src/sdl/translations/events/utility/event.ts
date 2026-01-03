import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { EventType } from '../../../ffi/events/constant';
import {
  AudioDeviceEvent,
  CameraDeviceEvent,
  ClipboardEvent,
  CommonEvent,
  DisplayEvent,
  DropEvent,
  GamepadAxisEvent,
  GamepadButtonEvent,
  GamepadDeviceEvent,
  GamepadSensorEvent,
  GamepadTouchpadEvent,
  JoyAxisEvent,
  JoyBallEvent,
  JoyBatteryEvent,
  JoyButtonEvent,
  JoyDeviceEvent,
  JoyHatEvent,
  KeyboardDeviceEvent,
  KeyboardEvent,
  MouseButtonEvent,
  MouseDeviceEvent,
  MouseMotionEvent,
  MouseWheelEvent,
  PenAxisEvent,
  PenButtonEvent,
  PenMotionEvent,
  PenProximityEvent,
  PenTouchEvent,
  PinchFingerEvent,
  QuitEvent,
  RenderEvent,
  SensorEvent,
  TextEditingCandidatesEvent,
  TextEditingEvent,
  TextInputEvent,
  TouchFingerEvent,
  UserEvent,
  WindowEvent,
} from './index';

export class Event {
  public static readonly BYTE_SIZE = 128;

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(...args: [pointer: Pointer, sdl: BaseSDL]) {
    const type = read.u32(args[0], 0) as EventType;

    switch (type) {
      case EventType.QUIT:
        return QuitEvent.fromPointer(...args);

      case EventType.TERMINATING:
      case EventType.LOW_MEMORY:
      case EventType.WILL_ENTER_BACKGROUND:
      case EventType.DID_ENTER_BACKGROUND:
      case EventType.WILL_ENTER_FOREGROUND:
      case EventType.DID_ENTER_FOREGROUND:
      case EventType.LOCALE_CHANGED:
      case EventType.SYSTEM_THEME_CHANGED:
        return CommonEvent.fromPointer(...args);

      case EventType.DISPLAY_ORIENTATION:
      case EventType.DISPLAY_ADDED:
      case EventType.DISPLAY_REMOVED:
      case EventType.DISPLAY_MOVED:
      case EventType.DISPLAY_DESKTOP_MODE_CHANGED:
      case EventType.DISPLAY_CURRENT_MODE_CHANGED:
      case EventType.DISPLAY_CONTENT_SCALE_CHANGED:
      case EventType.DISPLAY_USABLE_BOUNDS_CHANGED:
        return DisplayEvent.fromPointer(...args);

      case EventType.WINDOW_SHOWN:
      case EventType.WINDOW_HIDDEN:
      case EventType.WINDOW_EXPOSED:
      case EventType.WINDOW_MOVED:
      case EventType.WINDOW_RESIZED:
      case EventType.WINDOW_PIXEL_SIZE_CHANGED:
      case EventType.WINDOW_METAL_VIEW_RESIZED:
      case EventType.WINDOW_MINIMIZED:
      case EventType.WINDOW_MAXIMIZED:
      case EventType.WINDOW_RESTORED:
      case EventType.WINDOW_MOUSE_ENTER:
      case EventType.WINDOW_MOUSE_LEAVE:
      case EventType.WINDOW_FOCUS_GAINED:
      case EventType.WINDOW_FOCUS_LOST:
      case EventType.WINDOW_CLOSE_REQUESTED:
      case EventType.WINDOW_HIT_TEST:
      case EventType.WINDOW_ICCPROF_CHANGED:
      case EventType.WINDOW_DISPLAY_CHANGED:
      case EventType.WINDOW_DISPLAY_SCALE_CHANGED:
      case EventType.WINDOW_SAFE_AREA_CHANGED:
      case EventType.WINDOW_OCCLUDED:
      case EventType.WINDOW_ENTER_FULLSCREEN:
      case EventType.WINDOW_LEAVE_FULLSCREEN:
      case EventType.WINDOW_DESTROYED:
      case EventType.WINDOW_HDR_STATE_CHANGED:
        return WindowEvent.fromPointer(...args);

      // #region Keyboard Event related
      case EventType.KEY_DOWN:
      case EventType.KEY_UP:
        return KeyboardEvent.fromPointer(...args);

      case EventType.TEXT_EDITING:
        return TextEditingEvent.fromPointer(...args);

      case EventType.TEXT_INPUT:
        return TextInputEvent.fromPointer(...args);

      case EventType.TEXT_EDITING_CANDIDATES:
        return TextEditingCandidatesEvent.fromPointer(...args);

      case EventType.KEYBOARD_ADDED:
      case EventType.KEYBOARD_REMOVED:
        return KeyboardDeviceEvent.fromPointer(...args);

      case EventType.KEYMAP_CHANGED:
      case EventType.SCREEN_KEYBOARD_SHOWN:
      case EventType.SCREEN_KEYBOARD_HIDDEN:
        return CommonEvent.fromPointer(...args);
      // #endregion Keyboard Event related

      // #region Mouse Event related
      case EventType.MOUSE_MOTION:
        return MouseMotionEvent.fromPointer(...args);

      case EventType.MOUSE_BUTTON_DOWN:
      case EventType.MOUSE_BUTTON_UP:
        return MouseButtonEvent.fromPointer(...args);

      case EventType.MOUSE_WHEEL:
        return MouseWheelEvent.fromPointer(...args);

      case EventType.MOUSE_ADDED:
      case EventType.MOUSE_REMOVED:
        return MouseDeviceEvent.fromPointer(...args);
      // #endregion Mouse Event related

      // #region Joy Stick Event related
      case EventType.JOYSTICK_AXIS_MOTION:
        return JoyAxisEvent.fromPointer(...args);

      case EventType.JOYSTICK_BALL_MOTION:
        return JoyBallEvent.fromPointer(...args);

      case EventType.JOYSTICK_HAT_MOTION:
        return JoyHatEvent.fromPointer(...args);

      case EventType.JOYSTICK_BUTTON_DOWN:
      case EventType.JOYSTICK_BUTTON_UP:
        return JoyButtonEvent.fromPointer(...args);

      case EventType.JOYSTICK_ADDED:
      case EventType.JOYSTICK_REMOVED:
        return JoyDeviceEvent.fromPointer(...args);

      case EventType.JOYSTICK_BATTERY_UPDATED:
        return JoyBatteryEvent.fromPointer(...args);

      case EventType.JOYSTICK_UPDATE_COMPLETE:
        return CommonEvent.fromPointer(...args);
      // #endregion Joy Stick Event related

      // #region Gamepad Event related
      case EventType.GAMEPAD_AXIS_MOTION:
        return GamepadAxisEvent.fromPointer(...args);

      case EventType.GAMEPAD_BUTTON_DOWN:
      case EventType.GAMEPAD_BUTTON_UP:
        return GamepadButtonEvent.fromPointer(...args);

      case EventType.GAMEPAD_ADDED:
      case EventType.GAMEPAD_REMOVED:
      case EventType.GAMEPAD_REMAPPED:
      case EventType.GAMEPAD_STEAM_HANDLE_UPDATED:
        return GamepadDeviceEvent.fromPointer(...args);

      case EventType.GAMEPAD_TOUCHPAD_DOWN:
      case EventType.GAMEPAD_TOUCHPAD_MOTION:
      case EventType.GAMEPAD_TOUCHPAD_UP:
        return GamepadTouchpadEvent.fromPointer(...args);

      case EventType.GAMEPAD_SENSOR_UPDATE:
        return GamepadSensorEvent.fromPointer(...args);

      case EventType.GAMEPAD_UPDATE_COMPLETE:
        return CommonEvent.fromPointer(...args);
      // #endregion Gamepad Event related

      // #region Touch Event related
      case EventType.FINGER_DOWN:
      case EventType.FINGER_UP:
      case EventType.FINGER_MOTION:
      case EventType.FINGER_CANCELED:
        return TouchFingerEvent.fromPointer(...args);
      // #endregion Touch Event related

      // #region Finger Event related
      case EventType.PINCH_BEGIN:
      case EventType.PINCH_UPDATE:
      case EventType.PINCH_END:
        return PinchFingerEvent.fromPointer(...args);
      // #endregion Finger Event related

      // #region Clipboard Event related
      case EventType.CLIPBOARD_UPDATE:
        return ClipboardEvent.fromPointer(...args);
      // #endregion Clipboard Event related

      // #region Drop Event related
      case EventType.DROP_FILE:
      case EventType.DROP_TEXT:
      case EventType.DROP_BEGIN:
      case EventType.DROP_COMPLETE:
      case EventType.DROP_POSITION:
        return DropEvent.fromPointer(...args);
      // #endregion Drop Event related

      // #region Audio Event related
      case EventType.AUDIO_DEVICE_ADDED:
      case EventType.AUDIO_DEVICE_REMOVED:
      case EventType.AUDIO_DEVICE_FORMAT_CHANGED:
        return AudioDeviceEvent.fromPointer(...args);
      // #endregion Audio Event related

      // #region Sensor Event related
      case EventType.SENSOR_UPDATE:
        return SensorEvent.fromPointer(...args);
      // #endregion Sensor Event related

      // #region Pen Event related
      case EventType.PEN_PROXIMITY_IN:
      case EventType.PEN_PROXIMITY_OUT:
        return PenProximityEvent.fromPointer(...args);

      case EventType.PEN_DOWN:
      case EventType.PEN_UP:
        return PenTouchEvent.fromPointer(...args);

      case EventType.PEN_BUTTON_DOWN:
      case EventType.PEN_BUTTON_UP:
        return PenButtonEvent.fromPointer(...args);

      case EventType.PEN_MOTION:
        return PenMotionEvent.fromPointer(...args);

      case EventType.PEN_AXIS:
        return PenAxisEvent.fromPointer(...args);
      // #endregion Pen Event related

      // #region Camera Event related
      case EventType.CAMERA_DEVICE_ADDED:
      case EventType.CAMERA_DEVICE_REMOVED:
      case EventType.CAMERA_DEVICE_APPROVED:
      case EventType.CAMERA_DEVICE_DENIED:
        return CameraDeviceEvent.fromPointer(...args);
      // #endregion Camera Event related

      // #region Render Event related
      case EventType.RENDER_TARGETS_RESET:
      case EventType.RENDER_DEVICE_RESET:
      case EventType.RENDER_DEVICE_LOST:
        return RenderEvent.fromPointer(...args);
      // #endregion Render Event related

      // #region Sentinel Event related
      case EventType.POLL_SENTINEL:
        return CommonEvent.fromPointer(...args);
      // #endregion Sentinel Event related

      // #region User Event related
      case EventType.USER:
      case EventType.LAST:
        return UserEvent.fromPointer(...args);
      // #endregion User Event related
    }
  }
}
