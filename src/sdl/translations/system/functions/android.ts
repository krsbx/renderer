import { type JSCallback, type Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { stringToCString } from '../../../utility/common';

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
  return this.symbols.SDL_GetAndroidInternalStoragePath();
}

export function getAndroidExternalStorageState(this: SDL) {
  return this.symbols.SDL_GetAndroidExternalStorageState();
}

export function getAndroidExternalStoragePath(this: SDL) {
  return this.symbols.SDL_GetAndroidExternalStoragePath();
}

export function getAndroidCachePath(this: SDL) {
  return this.symbols.SDL_GetAndroidCachePath();
}

export function requestAndroidPermission(
  this: SDL,
  options: {
    permission: string;
    callback: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_RequestAndroidPermission(
    stringToCString(options.permission).ptr,
    options.callback.ptr,
    options.userdata ?? null
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
