#undef GetWorldToScreen
#undef GetWorldToScreenEx
#undef GetWorldToScreen2D
#undef GetScreenToWorld2D
#undef GetScreenToWorldRay
#undef GetScreenToWorldRayEx

SHIM_2(Vector2, GetWorldToScreen, Vector3, position, Camera, camera)
SHIM_4(Vector2, GetWorldToScreenEx, Vector3, position, Camera, camera, int, width, int, height)
SHIM_2(Vector2, GetWorldToScreen2D, Vector2, position, Camera2D, camera)
SHIM_2(Vector2, GetScreenToWorld2D, Vector2, position, Camera2D, camera)
SHIM_2(Ray, GetScreenToWorldRay, Vector2, position, Camera, camera)
SHIM_4(Ray, GetScreenToWorldRayEx, Vector2, position, Camera, camera, int, width, int, height)
