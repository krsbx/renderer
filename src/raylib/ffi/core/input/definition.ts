import { FFIType, type FFIFunction } from 'bun:ffi';

export const InputDefinition = {
  // Input-related functions: keyboard
  // bool IsKeyPressed(int key);
  IsKeyPressed: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsKeyPressedRepeat(int key);
  IsKeyPressedRepeat: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsKeyDown(int key);
  IsKeyDown: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsKeyReleased(int key);
  IsKeyReleased: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsKeyUp(int key);
  IsKeyUp: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // int GetKeyPressed(void);
  GetKeyPressed: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetCharPressed(void);
  GetCharPressed: {
    args: [],
    returns: FFIType.i32,
  },
  // void SetExitKey(int key);
  SetExitKey: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },

  // Input-related functions: gamepads
  // bool IsGamepadAvailable(int gamepad);
  IsGamepadAvailable: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // const char *GetGamepadName(int gamepad);
  GetGamepadName: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // bool IsGamepadButtonPressed(int gamepad, int button);
  IsGamepadButtonPressed: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsGamepadButtonDown(int gamepad, int button);
  IsGamepadButtonDown: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsGamepadButtonReleased(int gamepad, int button);
  IsGamepadButtonReleased: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsGamepadButtonUp(int gamepad, int button);
  IsGamepadButtonUp: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // int GetGamepadButtonPressed(void);
  GetGamepadButtonPressed: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetGamepadAxisCount(int gamepad);
  GetGamepadAxisCount: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // float GetGamepadAxisMovement(int gamepad, int axis);
  GetGamepadAxisMovement: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.f32,
  },
  // int SetGamepadMappings(const char *mappings);
  SetGamepadMappings: {
    args: [FFIType.cstring],
    returns: FFIType.i32,
  },
  // void SetGamepadVibration(int gamepad, float leftMotor, float rightMotor, float duration);
  SetGamepadVibration: {
    args: [FFIType.i32, FFIType.f32, FFIType.f32, FFIType.f32],
    returns: FFIType.void,
  },

  // Input-related functions: mouse
  // bool IsMouseButtonPressed(int button);
  IsMouseButtonPressed: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsMouseButtonDown(int button);
  IsMouseButtonDown: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsMouseButtonReleased(int button);
  IsMouseButtonReleased: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // bool IsMouseButtonUp(int button);
  IsMouseButtonUp: {
    args: [FFIType.i32],
    returns: FFIType.bool,
  },
  // int GetMouseX(void);
  GetMouseX: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetMouseY(void);
  GetMouseY: {
    args: [],
    returns: FFIType.i32,
  },
  // Vector2 GetMousePosition(void);
  GetMousePosition: {
    args: [],
    returns: FFIType.ptr,
  },
  // Vector2 GetMouseDelta(void);
  GetMouseDelta: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SetMousePosition(int x, int y);
  SetMousePosition: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetMouseOffset(int offsetX, int offsetY);
  SetMouseOffset: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.void,
  },
  // void SetMouseScale(float scaleX, float scaleY);
  SetMouseScale: {
    args: [FFIType.f32, FFIType.f32],
    returns: FFIType.void,
  },
  // float GetMouseWheelMove(void);
  GetMouseWheelMove: {
    args: [],
    returns: FFIType.f32,
  },
  // Vector2 GetMouseWheelMoveV(void);
  GetMouseWheelMoveV: {
    args: [],
    returns: FFIType.ptr,
  },
  // void SetMouseCursor(int cursor);
  SetMouseCursor: {
    args: [FFIType.i32],
    returns: FFIType.void,
  },

  // Input-related functions: touch
  // int GetTouchX(void);
  GetTouchX: {
    args: [],
    returns: FFIType.i32,
  },
  // int GetTouchY(void);
  GetTouchY: {
    args: [],
    returns: FFIType.i32,
  },
  // Vector2 GetTouchPosition(int index);
  GetTouchPosition: {
    args: [FFIType.i32],
    returns: FFIType.ptr,
  },
  // int GetTouchPointId(int index);
  GetTouchPointId: {
    args: [FFIType.i32],
    returns: FFIType.i32,
  },
  // int GetTouchPointCount(void);
  GetTouchPointCount: {
    args: [],
    returns: FFIType.i32,
  },

  // Gestures and Touch Handling Functions (Module: rgestures)
  // void SetGesturesEnabled(unsigned int flags);
  SetGesturesEnabled: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // bool IsGestureDetected(unsigned int gesture);
  IsGestureDetected: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // int GetGestureDetected(void);
  GetGestureDetected: {
    args: [],
    returns: FFIType.i32,
  },
  // float GetGestureHoldDuration(void);
  GetGestureHoldDuration: {
    args: [],
    returns: FFIType.f32,
  },
  // Vector2 GetGestureDragVector(void);
  GetGestureDragVector: {
    args: [],
    returns: FFIType.ptr,
  },
  // float GetGestureDragAngle(void);
  GetGestureDragAngle: {
    args: [],
    returns: FFIType.f32,
  },
  // Vector2 GetGesturePinchVector(void);
  GetGesturePinchVector: {
    args: [],
    returns: FFIType.ptr,
  },
  // float GetGesturePinchAngle(void);
  GetGesturePinchAngle: {
    args: [],
    returns: FFIType.f32,
  },
} satisfies Record<string, FFIFunction>;
