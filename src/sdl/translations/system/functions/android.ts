import type { SDL } from '@/sdl';
import { stringToCString } from '@utility/common';
import type { AndroidPermissionCallbackFn } from '../types/callback';
import { createAndroidPermissionCallback } from '../utility/callback';

export function getAndroidJNIEnv(this: SDL) {
  return this.symbols.SDL_GetAndroidJNIEnv();
}

export function getAndroidActivity(this: SDL) {
  return this.symbols.SDL_GetAndroidActivity();
}

export function getAndroidSDKVersion(this: SDL) {
  return this.symbols.SDL_GetAndroidSDKVersion();
}

export function isChromebook(this: SDL) {
  return this.symbols.SDL_IsChromebook();
}

export function isDeXMode(this: SDL) {
  return this.symbols.SDL_IsDeXMode();
}

export function sendAndroidBackButton(this: SDL) {
  this.symbols.SDL_SendAndroidBackButton();
}

export function getAndroidInternalStoragePath(this: SDL) {
  return this.symbols.SDL_GetAndroidInternalStoragePath().toString();
}

export function getAndroidExternalStorageState(this: SDL) {
  return this.symbols.SDL_GetAndroidExternalStorageState();
}

export function getAndroidExternalStoragePath(this: SDL) {
  return this.symbols.SDL_GetAndroidExternalStoragePath().toString();
}

export function getAndroidCachePath(this: SDL) {
  return this.symbols.SDL_GetAndroidCachePath().toString();
}

export function requestAndroidPermission(
  this: SDL,
  options: {
    permission: string;
    callback: AndroidPermissionCallbackFn;
  }
) {
  const cb = createAndroidPermissionCallback(options.callback);

  return this.symbols.SDL_RequestAndroidPermission(
    stringToCString(options.permission).ptr,
    cb.ptr,
    null
  );
}

export function showAndroidToast(
  this: SDL,
  options: {
    message: string;
    duration: number;
    gravity: number;
    xoffset: number;
    yoffset: number;
  }
) {
  return this.symbols.SDL_ShowAndroidToast(
    stringToCString(options.message).ptr,
    options.duration,
    options.gravity,
    options.xoffset,
    options.yoffset
  );
}

export function sendAndroidMessage(
  this: SDL,
  options: {
    command: number;
    param: number;
  }
) {
  return this.symbols.SDL_SendAndroidMessage(options.command, options.param);
}
