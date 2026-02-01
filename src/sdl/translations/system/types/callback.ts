import type { Pointer } from 'bun:ffi';

// Windows message hook callback
// Returns true to continue processing, false to drop the message
export interface WindowsMessageHookCallbackFn {
  (msg: Pointer): boolean;
}

// X11 event hook callback
// Returns true to continue processing, false to drop the event
export interface X11EventHookCallbackFn {
  (xevent: Pointer): boolean;
}

// Android permission request callback
export interface AndroidPermissionCallbackFn {
  (options: { permission: string; granted: boolean }): void;
}

// iOS animation callback
export interface iOSAnimationCallbackFn {
  (): void;
}
