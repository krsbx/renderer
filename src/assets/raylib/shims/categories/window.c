#undef GetMonitorPosition
#undef GetWindowPosition
#undef GetWindowScaleDPI
#undef GetClipboardImage

SHIM_1(Vector2, GetMonitorPosition, int, monitor)
SHIM_0(Vector2, GetWindowPosition)
SHIM_0(Vector2, GetWindowScaleDPI)
SHIM_0(Image, GetClipboardImage)
