import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import type { JSCallback, Pointer } from 'bun:ffi';
import type { ThreadPriority, ThreadState } from '../../../ffi/thread/constant';

export function getThreadName(this: SDL, thread: Pointer) {
  return this.symbols.SDL_GetThreadName(thread).toString();
}

export function getCurrentThreadID(this: SDL) {
  return this.symbols.SDL_GetCurrentThreadID();
}

export function getThreadID(this: SDL, thread: Pointer) {
  return this.symbols.SDL_GetThreadID(thread);
}

export function setCurrentThreadPriority(this: SDL, priority: ThreadPriority) {
  return this.symbols.SDL_SetCurrentThreadPriority(priority);
}

export function waitThread(this: SDL, thread: Pointer) {
  const statusStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  this.symbols.SDL_WaitThread(thread, statusStruct.$address);

  return statusStruct.getValue(0, 'i32');
}

export function getThreadState(this: SDL, thread: Pointer) {
  return this.symbols.SDL_GetThreadState(thread) as ThreadState;
}

export function detachThread(this: SDL, thread: Pointer) {
  this.symbols.SDL_DetachThread(thread);
}

export function getTLS(this: SDL, id: Pointer) {
  return this.symbols.SDL_GetTLS(id);
}

export function setTLS(
  this: SDL,
  options: {
    id: Pointer;
    value: Pointer | null;
    destructor?: JSCallback | null;
  }
) {
  return this.symbols.SDL_SetTLS(
    options.id,
    options.value,
    options.destructor?.ptr ?? null
  );
}

export function cleanupTLS(this: SDL) {
  this.symbols.SDL_CleanupTLS();
}
