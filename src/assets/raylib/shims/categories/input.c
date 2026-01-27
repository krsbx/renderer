#undef GetMousePosition
#undef GetMouseDelta
#undef GetMouseWheelMoveV
#undef GetTouchPosition
#undef GetGestureDragVector
#undef GetGesturePinchVector

SHIM_0(Vector2, GetMousePosition)
SHIM_0(Vector2, GetMouseDelta)
SHIM_0(Vector2, GetMouseWheelMoveV)
SHIM_1(Vector2, GetTouchPosition, int, index)
SHIM_0(Vector2, GetGestureDragVector)
SHIM_0(Vector2, GetGesturePinchVector)
