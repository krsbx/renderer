import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { Vector2 } from '../struct';

export function isKeyPressed(this: RayLib, key: number) {
  return this.symbols.IsKeyPressed(key);
}

export function isKeyPressedRepeat(this: RayLib, key: number) {
  return this.symbols.IsKeyPressedRepeat(key);
}

export function isKeyDown(this: RayLib, key: number) {
  return this.symbols.IsKeyDown(key);
}

export function isKeyReleased(this: RayLib, key: number) {
  return this.symbols.IsKeyReleased(key);
}

export function isKeyUp(this: RayLib, key: number) {
  return this.symbols.IsKeyUp(key);
}

export function getKeyPressed(this: RayLib) {
  return this.symbols.GetKeyPressed();
}

export function getCharPressed(this: RayLib) {
  return this.symbols.GetCharPressed();
}

export function setExitKey(this: RayLib, key: number) {
  this.symbols.SetExitKey(key);
}

export function isGamepadAvailable(this: RayLib, gamepad: number) {
  return this.symbols.IsGamepadAvailable(gamepad);
}

export function getGamepadName(this: RayLib, gamepad: number) {
  return this.symbols.GetGamepadName(gamepad).toString();
}

export function isGamepadButtonPressed(
  this: RayLib,
  options: {
    gamepad: number;
    button: number;
  }
) {
  return this.symbols.IsGamepadButtonPressed(options.gamepad, options.button);
}

export function isGamepadButtonDown(
  this: RayLib,
  options: {
    gamepad: number;
    button: number;
  }
) {
  return this.symbols.IsGamepadButtonDown(options.gamepad, options.button);
}

export function isGamepadButtonReleased(
  this: RayLib,
  options: {
    gamepad: number;
    button: number;
  }
) {
  return this.symbols.IsGamepadButtonReleased(options.gamepad, options.button);
}

export function isGamepadButtonUp(
  this: RayLib,
  options: {
    gamepad: number;
    button: number;
  }
) {
  return this.symbols.IsGamepadButtonUp(options.gamepad, options.button);
}

export function getGamepadButtonPressed(this: RayLib) {
  return this.symbols.GetGamepadButtonPressed();
}

export function getGamepadAxisCount(this: RayLib, gamepad: number) {
  return this.symbols.GetGamepadAxisCount(gamepad);
}

export function getGamepadAxisMovement(
  this: RayLib,
  gamepad: number,
  axis: number
) {
  return this.symbols.GetGamepadAxisMovement(gamepad, axis);
}

export function setGamepadMappings(this: RayLib, mappings: string) {
  return this.symbols.SetGamepadMappings(stringToCString(mappings).ptr);
}

export function setGamepadVibration(
  this: RayLib,
  options: {
    gamepad: number;
    leftMotor: number;
    rightMotor: number;
    duration: number;
  }
) {
  return this.symbols.SetGamepadVibration(
    options.gamepad,
    options.leftMotor,
    options.rightMotor,
    options.duration
  );
}

export function isMouseButtonPressed(this: RayLib, button: number) {
  return this.symbols.IsMouseButtonPressed(button);
}

export function isMouseButtonDown(this: RayLib, button: number) {
  return this.symbols.IsMouseButtonDown(button);
}

export function isMouseButtonReleased(this: RayLib, button: number) {
  return this.symbols.IsMouseButtonReleased(button);
}

export function isMouseButtonUp(this: RayLib, button: number) {
  return this.symbols.IsMouseButtonUp(button);
}

export function getMouseX(this: RayLib) {
  return this.symbols.GetMouseX();
}

export function getMouseY(this: RayLib) {
  return this.symbols.GetMouseY();
}

export function getMousePosition(this: RayLib) {
  const position = Vector2.create();

  this.symbols.GetMousePosition(position.$address);

  return position;
}

export function getMouseDelta(this: RayLib) {
  const delta = Vector2.create();

  this.symbols.GetMouseDelta(delta.$address);

  return delta;
}

export function setMousePosition(
  this: RayLib,
  options: { x: number; y: number }
) {
  this.symbols.SetMousePosition(options.x, options.y);
}

export function setMouseOffset(
  this: RayLib,
  options: { offsetX: number; offsetY: number }
) {
  this.symbols.SetMouseOffset(options.offsetX, options.offsetY);
}

export function setMouseScale(
  this: RayLib,
  options: { scaleX: number; scaleY: number }
) {
  this.symbols.SetMouseScale(options.scaleX, options.scaleY);
}

export function getMouseWheelMove(this: RayLib) {
  return this.symbols.GetMouseWheelMove();
}

export function getMouseWheelMoveV(this: RayLib) {
  const wheelMove = Vector2.create();

  this.symbols.GetMouseWheelMoveV(wheelMove.$address);

  return wheelMove;
}

export function setMouseCursor(this: RayLib, cursor: number) {
  this.symbols.SetMouseCursor(cursor);
}

export function getTouchX(this: RayLib) {
  return this.symbols.GetTouchX();
}

export function getTouchY(this: RayLib) {
  return this.symbols.GetTouchY();
}

export function getTouchPosition(this: RayLib) {
  const position = Vector2.create();

  this.symbols.GetTouchPosition(position.$address);

  return position;
}

export function getTouchPointId(this: RayLib, index: number) {
  return this.symbols.GetTouchPointId(index);
}

export function getTouchPointCount(this: RayLib) {
  return this.symbols.GetTouchPointCount();
}

export function setGesturesEnabled(this: RayLib, flags: number) {
  this.symbols.SetGesturesEnabled(flags);
}

export function isGestureDetected(this: RayLib, gesture: number) {
  return this.symbols.IsGestureDetected(gesture);
}

export function getGestureDetected(this: RayLib) {
  return this.symbols.GetGestureDetected();
}

export function getGestureHoldDuration(this: RayLib) {
  return this.symbols.GetGestureHoldDuration();
}

export function getGestureDragVector(this: RayLib) {
  const vector = Vector2.create();

  this.symbols.GetGestureDragVector(vector.$address);

  return vector;
}

export function getGestureDragAngle(this: RayLib) {
  return this.symbols.GetGestureDragAngle();
}

export function getGesturePinchVector(this: RayLib) {
  const vector = Vector2.create();

  this.symbols.GetGesturePinchVector(vector.$address);

  return vector;
}

export function getGesturePinchAngle(this: RayLib) {
  return this.symbols.GetGesturePinchAngle();
}
