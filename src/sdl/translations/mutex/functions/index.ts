import type { SDL } from '@/sdl';
import type {
  Condition,
  Mutex,
  RWLock,
  Semaphore,
} from '@/sdl/types/definition';
import { InitState } from '../struct';

export function createMutex(this: SDL) {
  return this.symbols.SDL_CreateMutex() as Mutex | null;
}

export function lockMutex(this: SDL, mutex: Mutex) {
  this.symbols.SDL_LockMutex(mutex);
}

export function tryLockMutex(this: SDL, mutex: Mutex) {
  return this.symbols.SDL_TryLockMutex(mutex);
}

export function unlockMutex(this: SDL, mutex: Mutex) {
  this.symbols.SDL_UnlockMutex(mutex);
}

export function destroyMutex(this: SDL, mutex: Mutex) {
  this.symbols.SDL_DestroyMutex(mutex);
}

export function createRWLock(this: SDL) {
  return this.symbols.SDL_CreateRWLock() as RWLock | null;
}

export function lockRWLockForReading(this: SDL, rwlock: RWLock) {
  this.symbols.SDL_LockRWLockForReading(rwlock);
}

export function lockRWLockForWriting(this: SDL, rwlock: RWLock) {
  this.symbols.SDL_LockRWLockForWriting(rwlock);
}

export function tryLockRWLockForReading(this: SDL, rwlock: RWLock) {
  return this.symbols.SDL_TryLockRWLockForReading(rwlock);
}

export function tryLockRWLockForWriting(this: SDL, rwlock: RWLock) {
  return this.symbols.SDL_TryLockRWLockForWriting(rwlock);
}

export function unlockRWLock(this: SDL, rwlock: RWLock) {
  this.symbols.SDL_UnlockRWLock(rwlock);
}

export function destroyRWLock(this: SDL, rwlock: RWLock) {
  this.symbols.SDL_DestroyRWLock(rwlock);
}

export function createSemaphore(this: SDL, initialValue: number) {
  return this.symbols.SDL_CreateSemaphore(initialValue) as Semaphore | null;
}

export function destroySemaphore(this: SDL, sem: Semaphore) {
  this.symbols.SDL_DestroySemaphore(sem);
}

export function waitSemaphore(this: SDL, sem: Semaphore) {
  this.symbols.SDL_WaitSemaphore(sem);
}

export function tryWaitSemaphore(this: SDL, sem: Semaphore) {
  return this.symbols.SDL_TryWaitSemaphore(sem);
}

export function waitSemaphoreTimeout(
  this: SDL,
  options: {
    sem: Semaphore;
    timeoutMS: number;
  }
) {
  return this.symbols.SDL_WaitSemaphoreTimeout(options.sem, options.timeoutMS);
}

export function signalSemaphore(this: SDL, sem: Semaphore) {
  this.symbols.SDL_SignalSemaphore(sem);
}

export function getSemaphoreValue(this: SDL, sem: Semaphore) {
  return this.symbols.SDL_GetSemaphoreValue(sem);
}

export function createCondition(this: SDL) {
  return this.symbols.SDL_CreateCondition() as Condition | null;
}

export function destroyCondition(this: SDL, cond: Condition) {
  this.symbols.SDL_DestroyCondition(cond);
}

export function signalCondition(this: SDL, cond: Condition) {
  this.symbols.SDL_SignalCondition(cond);
}

export function broadcastCondition(this: SDL, cond: Condition) {
  this.symbols.SDL_BroadcastCondition(cond);
}

export function waitCondition(
  this: SDL,
  options: {
    cond: Condition;
    mutex: Mutex;
  }
) {
  this.symbols.SDL_WaitCondition(options.cond, options.mutex);
}

export function waitConditionTimeout(
  this: SDL,
  options: {
    cond: Condition;
    mutex: Mutex;
    timeoutMS: number;
  }
) {
  return this.symbols.SDL_WaitConditionTimeout(
    options.cond,
    options.mutex,
    options.timeoutMS
  );
}

export function shouldInit(this: SDL, state: InitState) {
  return this.symbols.SDL_ShouldInit(state.$memory);
}

export function shouldQuit(this: SDL, state: InitState) {
  return this.symbols.SDL_ShouldQuit(state.$memory);
}

export function setInitialized(
  this: SDL,
  options: {
    state: InitState;
    initialized: boolean;
  }
) {
  this.symbols.SDL_SetInitialized(options.state.$memory, options.initialized);
}
