import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { getStructAddress } from '../../../utility/common';
import { AtomicInt, AtomicU32, SpinLock } from '../utility';

export function tryLockSpinlock(this: SDL, lock: SpinLock | Pointer) {
  return this.symbols.SDL_TryLockSpinlock(getStructAddress(lock));
}

export function lockSpinlock(this: SDL, lock: SpinLock | Pointer) {
  this.symbols.SDL_LockSpinlock(getStructAddress(lock));
}

export function unlockSpinlock(this: SDL, lock: SpinLock | Pointer) {
  this.symbols.SDL_UnlockSpinlock(getStructAddress(lock));
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
    a: AtomicInt | Pointer;
    oldval: number;
    newval: number;
  }
) {
  return this.symbols.SDL_CompareAndSwapAtomicInt(
    getStructAddress(options.a),
    options.oldval,
    options.newval
  );
}

export function setAtomicInt(
  this: SDL,
  options: {
    a: AtomicInt | Pointer;
    v: number;
  }
) {
  return this.symbols.SDL_SetAtomicInt(getStructAddress(options.a), options.v);
}

export function getAtomicInt(this: SDL, a: AtomicInt | Pointer) {
  return this.symbols.SDL_GetAtomicInt(getStructAddress(a));
}

export function addAtomicInt(
  this: SDL,
  options: {
    a: AtomicInt | Pointer;
    v: number;
  }
) {
  return this.symbols.SDL_AddAtomicInt(getStructAddress(options.a), options.v);
}

export function atomicIncRef(this: SDL, a: AtomicInt | Pointer) {
  addAtomicInt.call(this, {
    a,
    v: 1,
  });
}

export function atomicDecRef(this: SDL, a: AtomicInt | Pointer) {
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
    a: AtomicU32 | Pointer;
    oldval: number;
    newval: number;
  }
) {
  return this.symbols.SDL_CompareAndSwapAtomicU32(
    getStructAddress(options.a),
    options.oldval,
    options.newval
  );
}

export function setAtomicU32(
  this: SDL,
  options: {
    a: AtomicU32 | Pointer;
    v: number;
  }
) {
  return this.symbols.SDL_SetAtomicU32(getStructAddress(options.a), options.v);
}

export function getAtomicU32(this: SDL, a: AtomicU32 | Pointer) {
  return this.symbols.SDL_GetAtomicU32(getStructAddress(a));
}

export function addAtomicU32(
  this: SDL,
  options: {
    a: AtomicU32 | Pointer;
    v: number;
  }
) {
  return this.symbols.SDL_AddAtomicU32(getStructAddress(options.a), options.v);
}

export function compareAndSwapAtomicPointer(
  this: SDL,
  a: Pointer,
  oldval: Pointer,
  newval: Pointer
) {
  return this.symbols.SDL_CompareAndSwapAtomicPointer(a, oldval, newval);
}

export function setAtomicPointer(this: SDL, a: Pointer, v: Pointer) {
  return this.symbols.SDL_SetAtomicPointer(a, v);
}

export function getAtomicPointer(this: SDL, a: Pointer) {
  return this.symbols.SDL_GetAtomicPointer(a);
}
