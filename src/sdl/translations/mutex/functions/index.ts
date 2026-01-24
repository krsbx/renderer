import type { SDL } from '@/sdl';
import { getStructAddress } from '@utility/common';
import type { Pointer } from 'bun:ffi';
import { InitState } from '../utility';

export function createMutex(this: SDL) {
  return this.symbols.SDL_CreateMutex();
}

export function lockMutex(this: SDL, mutex: Pointer) {
  this.symbols.SDL_LockMutex(mutex);
}

export function tryLockMutex(this: SDL, mutex: Pointer) {
  return this.symbols.SDL_TryLockMutex(mutex);
}

export function unlockMutex(this: SDL, mutex: Pointer) {
  this.symbols.SDL_UnlockMutex(mutex);
}

export function destroyMutex(this: SDL, mutex: Pointer) {
  this.symbols.SDL_DestroyMutex(mutex);
}

export function createRWLock(this: SDL) {
  return this.symbols.SDL_CreateRWLock();
}

export function lockRWLockForReading(this: SDL, rwlock: Pointer) {
  this.symbols.SDL_LockRWLockForReading(rwlock);
}

export function lockRWLockForWriting(this: SDL, rwlock: Pointer) {
  this.symbols.SDL_LockRWLockForWriting(rwlock);
}

export function tryLockRWLockForReading(this: SDL, rwlock: Pointer) {
  return this.symbols.SDL_TryLockRWLockForReading(rwlock);
}

export function tryLockRWLockForWriting(this: SDL, rwlock: Pointer) {
  return this.symbols.SDL_TryLockRWLockForWriting(rwlock);
}

export function unlockRWLock(this: SDL, rwlock: Pointer) {
  this.symbols.SDL_UnlockRWLock(rwlock);
}

export function destroyRWLock(this: SDL, rwlock: Pointer) {
  this.symbols.SDL_DestroyRWLock(rwlock);
}

export function createSemaphore(this: SDL, initialValue: number) {
  return this.symbols.SDL_CreateSemaphore(initialValue);
}

export function destroySemaphore(this: SDL, sem: Pointer) {
  this.symbols.SDL_DestroySemaphore(sem);
}

export function waitSemaphore(this: SDL, sem: Pointer) {
  this.symbols.SDL_WaitSemaphore(sem);
}

export function tryWaitSemaphore(this: SDL, sem: Pointer) {
  return this.symbols.SDL_TryWaitSemaphore(sem);
}

export function waitSemaphoreTimeout(
  this: SDL,
  options: {
    sem: Pointer;
    timeoutMS: number;
  }
) {
  return this.symbols.SDL_WaitSemaphoreTimeout(options.sem, options.timeoutMS);
}

export function signalSemaphore(this: SDL, sem: Pointer) {
  this.symbols.SDL_SignalSemaphore(sem);
}

export function getSemaphoreValue(this: SDL, sem: Pointer) {
  return this.symbols.SDL_GetSemaphoreValue(sem);
}

export function createCondition(this: SDL) {
  return this.symbols.SDL_CreateCondition();
}

export function destroyCondition(this: SDL, cond: Pointer) {
  this.symbols.SDL_DestroyCondition(cond);
}

export function signalCondition(this: SDL, cond: Pointer) {
  this.symbols.SDL_SignalCondition(cond);
}

export function broadcastCondition(this: SDL, cond: Pointer) {
  this.symbols.SDL_BroadcastCondition(cond);
}

export function waitCondition(
  this: SDL,
  options: {
    cond: Pointer;
    mutex: Pointer;
  }
) {
  this.symbols.SDL_WaitCondition(options.cond, options.mutex);
}

export function waitConditionTimeout(
  this: SDL,
  options: {
    cond: Pointer;
    mutex: Pointer;
    timeoutMS: number;
  }
) {
  return this.symbols.SDL_WaitConditionTimeout(
    options.cond,
    options.mutex,
    options.timeoutMS
  );
}

export function shouldInit(this: SDL, state: InitState | Pointer) {
  return this.symbols.SDL_ShouldInit(getStructAddress(state));
}

export function shouldQuit(this: SDL, state: InitState | Pointer) {
  return this.symbols.SDL_ShouldQuit(getStructAddress(state));
}

export function setInitialized(
  this: SDL,
  options: {
    state: InitState | Pointer;
    initialized: boolean;
  }
) {
  this.symbols.SDL_SetInitialized(
    getStructAddress(options.state),
    options.initialized
  );
}
