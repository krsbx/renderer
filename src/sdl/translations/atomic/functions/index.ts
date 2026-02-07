import type { SDL } from '@/sdl';
import type { Int32, UInt32 } from '@/types/primitive';
import type { Pointer } from 'bun:ffi';
import { AtomicInt, AtomicU32, SpinLock } from '../struct';

export function tryLockSpinlock(this: SDL, lock: SpinLock) {
  return this.symbols.SDL_TryLockSpinlock(lock.$memory);
}

export function lockSpinlock(this: SDL, lock: SpinLock) {
  this.symbols.SDL_LockSpinlock(lock.$memory);
}

export function unlockSpinlock(this: SDL, lock: SpinLock) {
  this.symbols.SDL_UnlockSpinlock(lock.$memory);
}

export function memoryBarrierReleaseFunction(this: SDL) {
  this.symbols.SDL_MemoryBarrierReleaseFunction();
}

export function memoryBarrierAcquireFunction(this: SDL) {
  this.symbols.SDL_MemoryBarrierAcquireFunction();
}

export function compareAndSwapAtomicInt(
  this: SDL,
  options: {
    a: AtomicInt;
    oldval: Int32;
    newval: Int32;
  }
) {
  return this.symbols.SDL_CompareAndSwapAtomicInt(
    options.a.$memory,
    options.oldval,
    options.newval
  );
}

export function setAtomicInt(
  this: SDL,
  options: {
    a: AtomicInt;
    v: Int32;
  }
) {
  return this.symbols.SDL_SetAtomicInt(options.a.$memory, options.v) as Int32;
}

export function getAtomicInt(this: SDL, a: AtomicInt) {
  return this.symbols.SDL_GetAtomicInt(a.$memory) as Int32;
}

export function addAtomicInt(
  this: SDL,
  options: {
    a: AtomicInt;
    v: Int32;
  }
) {
  return this.symbols.SDL_AddAtomicInt(options.a.$memory, options.v) as Int32;
}

export function atomicIncRef(this: SDL, a: AtomicInt) {
  addAtomicInt.call(this, {
    a,
    v: 1,
  });
}

export function atomicDecRef(this: SDL, a: AtomicInt) {
  return (
    addAtomicInt.call(this, {
      a,
      v: -1,
    }) === 1
  );
}

export function compareAndSwapAtomicU32(
  this: SDL,
  options: {
    a: AtomicU32;
    oldval: UInt32;
    newval: UInt32;
  }
) {
  return this.symbols.SDL_CompareAndSwapAtomicU32(
    options.a.$memory,
    options.oldval,
    options.newval
  );
}

export function setAtomicU32(
  this: SDL,
  options: {
    a: AtomicU32;
    v: UInt32;
  }
) {
  return this.symbols.SDL_SetAtomicU32(options.a.$memory, options.v) as UInt32;
}

export function getAtomicU32(this: SDL, a: AtomicU32) {
  return this.symbols.SDL_GetAtomicU32(a.$memory) as UInt32;
}

export function addAtomicU32(
  this: SDL,
  options: {
    a: AtomicU32;
    v: UInt32;
  }
) {
  return this.symbols.SDL_AddAtomicU32(options.a.$memory, options.v) as UInt32;
}

export function compareAndSwapAtomicPointer(
  this: SDL,
  options: {
    a: Pointer;
    oldval: Pointer;
    newval: Pointer;
  }
) {
  return this.symbols.SDL_CompareAndSwapAtomicPointer(
    options.a,
    options.oldval,
    options.newval
  );
}

export function setAtomicPointer(
  this: SDL,
  options: {
    a: Pointer;
    v: Pointer;
  }
) {
  return this.symbols.SDL_SetAtomicPointer(options.a, options.v);
}

export function getAtomicPointer(this: SDL, a: Pointer) {
  return this.symbols.SDL_GetAtomicPointer(a);
}
