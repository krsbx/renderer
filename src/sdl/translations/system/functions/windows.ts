import type { SDL } from '@/sdl';
import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@cstruct';
import type { WindowsMessageHookCallbackFn } from '../types/callback';
import {
  createWindowsMessageHookCallback,
  WindowsMessageHookCallbackKey,
} from '../utility/callback';

export function setWindowsMessageHook(
  this: SDL,
  callback: WindowsMessageHookCallbackFn | null
) {
  if (!callback) {
    CallbackManager.unregister(WindowsMessageHookCallbackKey);
    this.symbols.SDL_SetWindowsMessageHook(null, null);
    return;
  }

  const cb = createWindowsMessageHookCallback(callback);
  CallbackManager.register(WindowsMessageHookCallbackKey, cb);
  this.symbols.SDL_SetWindowsMessageHook(cb.ptr, null);
}

export function getDirect3D9AdapterIndex(this: SDL, displayId: number) {
  return this.symbols.SDL_GetDirect3D9AdapterIndex(displayId);
}

export function getDXGIOutputInfo(this: SDL, displayId: number) {
  const adapterIndexStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const outputIndexStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetDXGIOutputInfo(
    displayId,
    adapterIndexStruct.$memory,
    outputIndexStruct.$memory
  );

  if (!success) return null;

  return {
    adapterIndex: adapterIndexStruct.getValue(0, 'i32'),
    outputIndex: outputIndexStruct.getValue(0, 'i32'),
  };
}
