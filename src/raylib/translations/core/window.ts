import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { Image, Vector2 } from '../struct';

export function initWindow(
  this: RayLib,
  options: {
    width: number;
    height: number;
    title: string;
  }
) {
  this.symbols.InitWindow(
    options.width,
    options.height,
    stringToCString(options.title).ptr
  );
}

export function closeWindow(this: RayLib) {
  this.symbols.CloseWindow();
}

export function windowShoudClose(this: RayLib) {
  this.symbols.WindowShouldClose();
}

export function isWindowReady(this: RayLib) {
  return this.symbols.IsWindowReady();
}

export function isWindowFullScreen(this: RayLib) {
  return this.symbols.IsWindowFullscreen();
}

export function isWindowHidden(this: RayLib) {
  return this.symbols.IsWindowHidden();
}

export function isWindowMinimized(this: RayLib) {
  return this.symbols.IsWindowMinimized();
}

export function isWindowMaximized(this: RayLib) {
  return this.symbols.IsWindowMaximized();
}

export function isWindowFocused(this: RayLib) {
  return this.symbols.IsWindowFocused();
}

export function isWindowResized(this: RayLib) {
  return this.symbols.IsWindowResized();
}

export function isWindowState(this: RayLib, flag: number) {
  return this.symbols.IsWindowState(flag);
}

export function setWindowState(this: RayLib, flag: number) {
  this.symbols.SetWindowState(flag);
}

export function clearWindowState(this: RayLib, flag: number) {
  this.symbols.ClearWindowState(flag);
}

export function toggleFullscreen(this: RayLib) {
  this.symbols.ToggleFullscreen();
}

export function toggleBorderlessWindowed(this: RayLib) {
  this.symbols.ToggleBorderlessWindowed();
}

export function maximizeWindow(this: RayLib) {
  this.symbols.MaximizeWindow();
}

export function minimizeWindow(this: RayLib) {
  this.symbols.MinimizeWindow();
}

export function restoreWindow(this: RayLib) {
  this.symbols.RestoreWindow();
}

export function setWindowIcon(this: RayLib, image: Image) {
  this.symbols.SetWindowIcon(image.$address);
}

export function setWindowIcons(this: RayLib, images: Image[]) {
  const { buffer } = CStruct.writeArray(images, Image.BYTE_SIZE);

  this.symbols.SetWindowIcons(buffer, images.length);
}

export function setWindowTitle(this: RayLib, title: string) {
  this.symbols.SetWindowTitle(stringToCString(title).ptr);
}

export function setWindowPosition(
  this: RayLib,
  options: {
    x: number;
    y: number;
  }
) {
  this.symbols.SetWindowPosition(options.x, options.y);
}

export function setWindowMonitor(this: RayLib, monitor: number) {
  this.symbols.SetWindowMonitor(monitor);
}

export function setWindowMinSize(
  this: RayLib,
  options: {
    width: number;
    height: number;
  }
) {
  this.symbols.SetWindowMinSize(options.width, options.height);
}

export function setWindowMaxSize(
  this: RayLib,
  options: {
    width: number;
    height: number;
  }
) {
  this.symbols.SetWindowMaxSize(options.width, options.height);
}

export function setWindowSize(
  this: RayLib,
  options: {
    width: number;
    height: number;
  }
) {
  this.symbols.SetWindowSize(options.width, options.height);
}

export function setWindowOpacity(this: RayLib, opacity: number) {
  this.symbols.SetWindowOpacity(opacity);
}

export function setWindowFocused(this: RayLib) {
  this.symbols.SetWindowFocused();
}

export function getWindowHandle(this: RayLib) {
  return this.symbols.GetWindowHandle();
}

export function getScreenWidth(this: RayLib) {
  return this.symbols.GetScreenWidth();
}

export function getScreenHeight(this: RayLib) {
  return this.symbols.GetScreenHeight();
}

export function getMonitorCount(this: RayLib) {
  return this.symbols.GetMonitorCount();
}

export function getCurrentMonitor(this: RayLib) {
  return this.symbols.GetCurrentMonitor();
}

export function getMonitorPosition(this: RayLib, monitor: number) {
  const position = new Vector2(Vector2.allocMemory());

  this.symbols.GetMonitorPosition(monitor, position.$address);

  return position;
}

export function getMonitorWidth(this: RayLib, monitor: number) {
  return this.symbols.GetMonitorWidth(monitor);
}

export function getMonitorHeight(this: RayLib, monitor: number) {
  return this.symbols.GetMonitorHeight(monitor);
}

export function getMonitorPhysicalWidth(this: RayLib, monitor: number) {
  return this.symbols.GetMonitorPhysicalWidth(monitor);
}

export function getMonitorPhysicalHeight(this: RayLib, monitor: number) {
  return this.symbols.GetMonitorPhysicalHeight(monitor);
}

export function getMonitorRefreshRate(this: RayLib, monitor: number) {
  return this.symbols.GetMonitorRefreshRate(monitor);
}

export function getWindowPosition(this: RayLib) {
  const position = new Vector2(Vector2.allocMemory());

  this.symbols.GetWindowPosition(position.$address);

  return position;
}

export function getWindowScaleDPI(this: RayLib) {
  const dpi = new Vector2(Vector2.allocMemory());

  this.symbols.GetWindowScaleDPI(dpi.$address);

  return dpi;
}

export function getMonitorName(this: RayLib, monitor: number) {
  return this.symbols.GetMonitorName(monitor);
}

export function setClipboardText(this: RayLib, text: string) {
  this.symbols.SetClipboardText(stringToCString(text).ptr);
}

export function getClipboardText(this: RayLib) {
  return this.symbols.GetClipboardText().toString();
}

export function getClipboardImage(this: RayLib) {
  const image = new Image(Image.allocMemory());

  this.symbols.GetClipboardImage(image.$address);

  return image;
}

export function enableEventWaiting(this: RayLib) {
  this.symbols.EnableEventWaiting();
}

export function disableEventWaiting(this: RayLib) {
  this.symbols.DisableEventWaiting();
}
