import { CallbackManager } from '@/sdl/utility';
import { FFIType, JSCallback, type Pointer } from 'bun:ffi';
import type { NSTimerCallbackFn, TimerCallbackFn } from '../types/callback';

const TimerCallbackKeyPrefix = 'timer:ms:' as const;
const NSTimerCallbackKeyPrefix = 'timer:ns:' as const;

export function getTimerCallbackKey(timerID: number) {
  return `${TimerCallbackKeyPrefix}${timerID}` as const;
}

export function getNSTimerCallbackKey(timerID: number) {
  return `${NSTimerCallbackKeyPrefix}${timerID}` as const;
}

export function createTimerCallback(callback: TimerCallbackFn) {
  const cb = new JSCallback(
    (_: Pointer, timerID: number, interval: number) => {
      const nextInterval = callback(timerID, interval);

      // If callback returns 0, timer is cancelled - unregister
      if (nextInterval === 0) {
        CallbackManager.unregister(getTimerCallbackKey(timerID));
      }

      return nextInterval;
    },
    {
      args: [FFIType.ptr, FFIType.u32, FFIType.u32],
      returns: FFIType.u32,
    }
  );

  return cb;
}

export function createNSTimerCallback(callback: NSTimerCallbackFn) {
  const cb = new JSCallback(
    (_: Pointer, timerID: number, interval: bigint) => {
      const nextInterval = callback(timerID, interval);

      // If callback returns 0n, timer is cancelled - unregister
      if (nextInterval === 0n) {
        CallbackManager.unregister(getNSTimerCallbackKey(timerID));
      }

      return nextInterval;
    },
    {
      args: [FFIType.ptr, FFIType.u32, FFIType.u64],
      returns: FFIType.u64,
    }
  );

  return cb;
}
