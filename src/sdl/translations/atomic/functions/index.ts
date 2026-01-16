import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { AtomicInt, AtomicU32, SpinLock } from '../utility';

export function tryLockSpinlock(this: SDL, lock: SpinLock | Pointer) {
  const addr = lock instanceof SpinLock ? lock.$address : lock;

  return this.symbols.SDL_TryLockSpinlock(addr);
}

export function lockSpinlock(this: SDL, lock: SpinLock | Pointer) {
  const addr = lock instanceof SpinLock ? lock.$address : lock;

  this.symbols.SDL_LockSpinlock(addr);
}

export function unlockSpinlock(this: SDL, lock: SpinLock | Pointer) {
  const addr = lock instanceof SpinLock ? lock.$address : lock;

  this.symbols.SDL_UnlockSpinlock(addr);
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
  const addr = options.a instanceof AtomicInt ? options.a.$address : options.a;

  return this.symbols.SDL_CompareAndSwapAtomicInt(
    addr,
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
  const addr = options.a instanceof AtomicInt ? options.a.$address : options.a;

  return this.symbols.SDL_SetAtomicInt(addr, options.v);
}

export function getAtomicInt(this: SDL, a: AtomicInt | Pointer) {
  const addr = a instanceof AtomicInt ? a.$address : a;

  return this.symbols.SDL_GetAtomicInt(addr);
}

export function addAtomicInt(
  this: SDL,
  options: {
    a: AtomicInt | Pointer;
    v: number;
  }
) {
  const addr = options.a instanceof AtomicInt ? options.a.$address : options.a;

  return this.symbols.SDL_AddAtomicInt(addr, options.v);
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
  const addr = options.a instanceof AtomicU32 ? options.a.$address : options.a;

  return this.symbols.SDL_CompareAndSwapAtomicU32(
    addr,
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
  const addr = options.a instanceof AtomicU32 ? options.a.$address : options.a;

  return this.symbols.SDL_SetAtomicU32(addr, options.v);
}

export function getAtomicU32(this: SDL, a: AtomicU32 | Pointer) {
  const addr = a instanceof AtomicU32 ? a.$address : a;

  return this.symbols.SDL_GetAtomicU32(addr);
}

export function addAtomicU32(
  this: SDL,
  options: {
    a: AtomicU32 | Pointer;
    v: number;
  }
) {
  const addr = options.a instanceof AtomicU32 ? options.a.$address : options.a;

  return this.symbols.SDL_AddAtomicU32(addr, options.v);
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
