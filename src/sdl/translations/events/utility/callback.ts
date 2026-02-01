import { CallbackManager } from '@/sdl/utility';
import { FFIType, JSCallback, toArrayBuffer, type Pointer } from 'bun:ffi';
import { Event } from '../struct';
import type { EventFilterCallbackFn } from '../types/callback';

const EventFilterCallbackKey = 'event:filter' as const;
const EventWatchCallbackKeyPrefix = 'event:watch:' as const;

let eventWatchIdCounter = 0;

export function getEventFilterCallbackKey() {
  return EventFilterCallbackKey;
}

export function getEventWatchCallbackKey(id: number) {
  return `${EventWatchCallbackKeyPrefix}${id}` as const;
}

export function createEventFilterCallback(callback: EventFilterCallbackFn) {
  const cb = new JSCallback(
    (_: Pointer, eventPtr: Pointer) => {
      const eventMemory = new Uint8Array(
        toArrayBuffer(eventPtr, 0, Event.BYTE_SIZE)
      );
      const event = new Event(eventMemory);

      return callback(event);
    },
    {
      args: [FFIType.ptr, FFIType.ptr],
      returns: FFIType.bool,
    }
  );

  return cb;
}

/**
 * Creates and registers an event watch callback.
 * Returns the watch ID that can be used to remove the watch later.
 */
export function registerEventWatch(callback: EventFilterCallbackFn) {
  const watchId = ++eventWatchIdCounter;
  const key = getEventWatchCallbackKey(watchId);

  const cb = createEventFilterCallback(callback);
  CallbackManager.register(key, cb);

  return { cb, watchId };
}

/**
 * Unregisters an event watch callback by its watch ID.
 */
export function unregisterEventWatch(watchId: number) {
  const key = getEventWatchCallbackKey(watchId);
  const cb = CallbackManager.get(key);

  if (cb) {
    CallbackManager.unregister(key);
  }

  return cb;
}
