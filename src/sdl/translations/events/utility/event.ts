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
  public static allocMemory() {
    const buffer = new Uint8Array(128);

    return buffer;
  }

  public static fromPointer(...args: [pointer: Pointer, sdl: BaseSDL]) {
    const type = read.u32(args[0], 0) as EventType;

    switch (type) {
      case EventType.SDL_QUIT:
        return QuitEvent.fromPointer(...args);

      case EventType.SDL_TERMINATING:
      case EventType.SDL_LOW_MEMORY:
      case EventType.SDL_WILL_ENTER_BACKGROUND:
      case EventType.SDL_DID_ENTER_BACKGROUND:
      case EventType.SDL_WILL_ENTER_FOREGROUND:
      case EventType.SDL_DID_ENTER_FOREGROUND:
      case EventType.SDL_LOCALE_CHANGED:
      case EventType.SDL_SYSTEM_THEME_CHANGED:
        return CommonEvent.fromPointer(...args);

      case EventType.SDL_DISPLAY_ORIENTATION:
      case EventType.SDL_DISPLAY_ADDED:
      case EventType.SDL_DISPLAY_REMOVED:
      case EventType.SDL_DISPLAY_MOVED:
      case EventType.SDL_DISPLAY_DESKTOP_MODE_CHANGED:
      case EventType.SDL_DISPLAY_CURRENT_MODE_CHANGED:
      case EventType.SDL_DISPLAY_CONTENT_SCALE_CHANGED:
      case EventType.SDL_DISPLAY_USABLE_BOUNDS_CHANGED:
        return DisplayEvent.fromPointer(...args);

      case EventType.SDL_WINDOW_SHOWN:
      case EventType.SDL_WINDOW_HIDDEN:
      case EventType.SDL_WINDOW_EXPOSED:
      case EventType.SDL_WINDOW_MOVED:
      case EventType.SDL_WINDOW_RESIZED:
      case EventType.SDL_WINDOW_PIXEL_SIZE_CHANGED:
      case EventType.SDL_WINDOW_METAL_VIEW_RESIZED:
      case EventType.SDL_WINDOW_MINIMIZED:
      case EventType.SDL_WINDOW_MAXIMIZED:
      case EventType.SDL_WINDOW_RESTORED:
      case EventType.SDL_WINDOW_MOUSE_ENTER:
      case EventType.SDL_WINDOW_MOUSE_LEAVE:
      case EventType.SDL_WINDOW_FOCUS_GAINED:
      case EventType.SDL_WINDOW_FOCUS_LOST:
      case EventType.SDL_WINDOW_CLOSE_REQUESTED:
      case EventType.SDL_WINDOW_HIT_TEST:
      case EventType.SDL_WINDOW_ICCPROF_CHANGED:
      case EventType.SDL_WINDOW_DISPLAY_CHANGED:
      case EventType.SDL_WINDOW_DISPLAY_SCALE_CHANGED:
      case EventType.SDL_WINDOW_SAFE_AREA_CHANGED:
      case EventType.SDL_WINDOW_OCCLUDED:
      case EventType.SDL_WINDOW_ENTER_FULLSCREEN:
      case EventType.SDL_WINDOW_LEAVE_FULLSCREEN:
      case EventType.SDL_WINDOW_DESTROYED:
      case EventType.SDL_WINDOW_HDR_STATE_CHANGED:
        return WindowEvent.fromPointer(...args);

      // #region Keyboard Event related
      case EventType.SDL_KEY_DOWN:
      case EventType.SDL_KEY_UP:
        return KeyboardEvent.fromPointer(...args);

      case EventType.SDL_TEXT_EDITING:
        return TextEditingEvent.fromPointer(...args);

      case EventType.SDL_TEXT_INPUT:
        return TextInputEvent.fromPointer(...args);

      case EventType.SDL_TEXT_EDITING_CANDIDATES:
        return TextEditingCandidatesEvent.fromPointer(...args);

      case EventType.SDL_KEYBOARD_ADDED:
      case EventType.SDL_KEYBOARD_REMOVED:
        return KeyboardDeviceEvent.fromPointer(...args);

      case EventType.SDL_KEYMAP_CHANGED:
      case EventType.SDL_SCREEN_KEYBOARD_SHOWN:
      case EventType.SDL_SCREEN_KEYBOARD_HIDDEN:
        return CommonEvent.fromPointer(...args);
      // #endregion Keyboard Event related

      // #region Mouse Event related
      case EventType.SDL_MOUSE_MOTION:
        return MouseMotionEvent.fromPointer(...args);

      case EventType.SDL_MOUSE_BUTTON_DOWN:
      case EventType.SDL_MOUSE_BUTTON_UP:
        return MouseButtonEvent.fromPointer(...args);

      case EventType.SDL_MOUSE_WHEEL:
        return MouseWheelEvent.fromPointer(...args);

      case EventType.SDL_MOUSE_ADDED:
      case EventType.SDL_MOUSE_REMOVED:
        return MouseDeviceEvent.fromPointer(...args);
      // #endregion Mouse Event related

      // #region Joy Stick Event related
      case EventType.SDL_JOYSTICK_AXIS_MOTION:
        return JoyAxisEvent.fromPointer(...args);

      case EventType.SDL_JOYSTICK_BALL_MOTION:
        return JoyBallEvent.fromPointer(...args);

      case EventType.SDL_JOYSTICK_HAT_MOTION:
        return JoyHatEvent.fromPointer(...args);

      case EventType.SDL_JOYSTICK_BUTTON_DOWN:
      case EventType.SDL_JOYSTICK_BUTTON_UP:
        return JoyButtonEvent.fromPointer(...args);

      case EventType.SDL_JOYSTICK_ADDED:
      case EventType.SDL_JOYSTICK_REMOVED:
        return JoyDeviceEvent.fromPointer(...args);

      case EventType.SDL_JOYSTICK_BATTERY_UPDATED:
        return JoyBatteryEvent.fromPointer(...args);

      case EventType.SDL_JOYSTICK_UPDATE_COMPLETE:
        return CommonEvent.fromPointer(...args);
      // #endregion Joy Stick Event related

      // #region Gamepad Event related
      case EventType.SDL_GAMEPAD_AXIS_MOTION:
        return GamepadAxisEvent.fromPointer(...args);

      case EventType.SDL_GAMEPAD_BUTTON_DOWN:
      case EventType.SDL_GAMEPAD_BUTTON_UP:
        return GamepadButtonEvent.fromPointer(...args);

      case EventType.SDL_GAMEPAD_ADDED:
      case EventType.SDL_GAMEPAD_REMOVED:
      case EventType.SDL_GAMEPAD_REMAPPED:
      case EventType.SDL_GAMEPAD_STEAM_HANDLE_UPDATED:
        return GamepadDeviceEvent.fromPointer(...args);

      case EventType.SDL_GAMEPAD_TOUCHPAD_DOWN:
      case EventType.SDL_GAMEPAD_TOUCHPAD_MOTION:
      case EventType.SDL_GAMEPAD_TOUCHPAD_UP:
        return GamepadTouchpadEvent.fromPointer(...args);

      case EventType.SDL_GAMEPAD_SENSOR_UPDATE:
        return GamepadSensorEvent.fromPointer(...args);

      case EventType.SDL_GAMEPAD_UPDATE_COMPLETE:
        return CommonEvent.fromPointer(...args);
      // #endregion Gamepad Event related

      // #region Touch Event related
      case EventType.SDL_FINGER_DOWN:
      case EventType.SDL_FINGER_UP:
      case EventType.SDL_FINGER_MOTION:
      case EventType.SDL_FINGER_CANCELED:
        return TouchFingerEvent.fromPointer(...args);
      // #endregion Touch Event related

      // #region Finger Event related
      case EventType.SDL_PINCH_BEGIN:
      case EventType.SDL_PINCH_UPDATE:
      case EventType.SDL_PINCH_END:
        return PinchFingerEvent.fromPointer(...args);
      // #endregion Finger Event related

      // #region Clipboard Event related
      case EventType.SDL_CLIPBOARD_UPDATE:
        return ClipboardEvent.fromPointer(...args);
      // #endregion Clipboard Event related

      // #region Drop Event related
      case EventType.SDL_DROP_FILE:
      case EventType.SDL_DROP_TEXT:
      case EventType.SDL_DROP_BEGIN:
      case EventType.SDL_DROP_COMPLETE:
      case EventType.SDL_DROP_POSITION:
        return DropEvent.fromPointer(...args);
      // #endregion Drop Event related

      // #region Audio Event related
      case EventType.SDL_AUDIO_DEVICE_ADDED:
      case EventType.SDL_AUDIO_DEVICE_REMOVED:
      case EventType.SDL_AUDIO_DEVICE_FORMAT_CHANGED:
        return AudioDeviceEvent.fromPointer(...args);
      // #endregion Audio Event related

      // #region Sensor Event related
      case EventType.SDL_SENSOR_UPDATE:
        return SensorEvent.fromPointer(...args);
      // #endregion Sensor Event related

      // #region Pen Event related
      case EventType.SDL_PEN_PROXIMITY_IN:
      case EventType.SDL_PEN_PROXIMITY_OUT:
        return PenProximityEvent.fromPointer(...args);

      case EventType.SDL_PEN_DOWN:
      case EventType.SDL_PEN_UP:
        return PenTouchEvent.fromPointer(...args);

      case EventType.SDL_PEN_BUTTON_DOWN:
      case EventType.SDL_PEN_BUTTON_UP:
        return PenButtonEvent.fromPointer(...args);

      case EventType.SDL_PEN_MOTION:
        return PenMotionEvent.fromPointer(...args);

      case EventType.SDL_PEN_AXIS:
        return PenAxisEvent.fromPointer(...args);
      // #endregion Pen Event related

      // #region Camera Event related
      case EventType.SDL_CAMERA_DEVICE_ADDED:
      case EventType.SDL_CAMERA_DEVICE_REMOVED:
      case EventType.SDL_CAMERA_DEVICE_APPROVED:
      case EventType.SDL_CAMERA_DEVICE_DENIED:
        return CameraDeviceEvent.fromPointer(...args);
      // #endregion Camera Event related

      // #region Render Event related
      case EventType.SDL_RENDER_TARGETS_RESET:
      case EventType.SDL_RENDER_DEVICE_RESET:
      case EventType.SDL_RENDER_DEVICE_LOST:
        return RenderEvent.fromPointer(...args);
      // #endregion Render Event related

      // #region Sentinel Event related
      case EventType.SDL_POLL_SENTINEL:
        return CommonEvent.fromPointer(...args);
      // #endregion Sentinel Event related

      // #region User Event related
      case EventType.SDL_USER:
      case EventType.SDL_LAST:
        return UserEvent.fromPointer(...args);
      // #endregion User Event related
    }
  }
}
