import type { SDL } from '@/sdl';
import type { Thread } from '@/sdl/types/definition';
import { CStruct } from '@cstruct';
import type { JSCallback, Pointer } from 'bun:ffi';
import type { ThreadPriority, ThreadState } from '../../../ffi/thread/constant';
import type { TLSID } from '../../exports';

export function getThreadName(this: SDL, thread: Thread) {
  return this.symbols.SDL_GetThreadName(thread).toString();
}

export function getCurrentThreadID(this: SDL) {
  return this.symbols.SDL_GetCurrentThreadID();
}

export function getThreadID(this: SDL, thread: Thread) {
  return this.symbols.SDL_GetThreadID(thread);
}

export function setCurrentThreadPriority(this: SDL, priority: ThreadPriority) {
  return this.symbols.SDL_SetCurrentThreadPriority(priority);
}

export function waitThread(this: SDL, thread: Thread) {
  const statusStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  this.symbols.SDL_WaitThread(thread, statusStruct.$memory);

  return statusStruct.getValue(0, 'i32');
}

export function getThreadState(this: SDL, thread: Thread) {
  return this.symbols.SDL_GetThreadState(thread) as ThreadState;
}

export function detachThread(this: SDL, thread: Thread) {
  this.symbols.SDL_DetachThread(thread);
}

export function getTLS(this: SDL, id: TLSID) {
  return this.symbols.SDL_GetTLS(id.$memory);
}

export function setTLS(
  this: SDL,
  options: {
    id: TLSID;
    value: Pointer | null;
    destructor?: JSCallback | null;
  }
) {
  return this.symbols.SDL_SetTLS(
    options.id.$memory,
    options.value,
    options.destructor?.ptr ?? null
  );
}

export function cleanupTLS(this: SDL) {
  this.symbols.SDL_CleanupTLS();
}
