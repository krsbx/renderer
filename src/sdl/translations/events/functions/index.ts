import type { SDL } from '@/sdl';
import type { Window } from '@/sdl/types/definition';
import { CallbackManager } from '@/sdl/utility';
import { CStruct } from '@cstruct';
import { CString, ptr } from 'bun:ffi';
import { type EventAction, type EventType } from '../../../ffi/events/constant';
import { Event } from '../struct';
import type { EventFilterCallbackFn } from '../types/callback';
import {
  createEventFilterCallback,
  getEventFilterCallbackKey,
  registerEventWatch,
  unregisterEventWatch,
} from '../utility/callback';

export function pumpEvents(this: SDL) {
  this.symbols.SDL_PumpEvents();
}

export function peepEvents(
  this: SDL,
  options: {
    events: Event;
    numevents: number;
    action: EventAction;
    minType: EventType;
    maxType: EventType;
  }
) {
  return this.symbols.SDL_PeepEvents(
    options.events.$address,
    options.numevents,
    options.action,
    options.minType,
    options.maxType
  );
}

export function hasEvent(this: SDL, type: EventType) {
  return this.symbols.SDL_HasEvent(type);
}

export function hasEvents(
  this: SDL,
  options: {
    minType: EventType;
    maxType: EventType;
  }
) {
  return this.symbols.SDL_HasEvents(options.minType, options.maxType);
}

export function flushEvent(this: SDL, type: EventType) {
  this.symbols.SDL_FlushEvent(type);
}

export function flushEvents(
  this: SDL,
  options: {
    minType: EventType;
    maxType: EventType;
  }
) {
  this.symbols.SDL_FlushEvents(options.minType, options.maxType);
}

export function pollEvent(this: SDL, event?: Event | null) {
  const eventInstance = event ?? Event.create();
  const hasEvent = this.symbols.SDL_PollEvent(eventInstance.$address);

  if (!hasEvent) return null;

  return eventInstance;
}

export function waitEvent(this: SDL, event?: Event | null) {
  const eventInstance = event ?? Event.create();
  const success = this.symbols.SDL_WaitEvent(eventInstance.$address);

  if (!success) return null;

  return eventInstance;
}

export function waitEventTimeout(
  this: SDL,
  options: {
    event?: Event | null;
    timeoutMS: number;
  }
) {
  const eventInstance = options.event ?? Event.create();
  const success = this.symbols.SDL_WaitEventTimeout(
    eventInstance.$address,
    options.timeoutMS
  );

  if (!success) return null;

  return eventInstance;
}

export function pushEvent(this: SDL, event: Event) {
  return this.symbols.SDL_PushEvent(event.$address);
}

export function setEventFilter(
  this: SDL,
  filter: EventFilterCallbackFn | null
) {
  const key = getEventFilterCallbackKey();

  // Clear existing filter
  CallbackManager.unregister(key);

  if (filter === null) {
    this.symbols.SDL_SetEventFilter(null, null);
    return;
  }

  const cb = createEventFilterCallback(filter);
  CallbackManager.register(key, cb);

  this.symbols.SDL_SetEventFilter(cb.ptr);
}

export function getEventFilter(this: SDL) {
  const filterStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });
  const userdataStruct = new CStruct({ length: CStruct.BYTE_SIZE.ptr });

  const success = this.symbols.SDL_GetEventFilter(
    filterStruct.$address,
    userdataStruct.$address
  );

  if (!success) return null;

  return {
    filter: filterStruct.getValue(0, 'ptr'),
    userdata: userdataStruct.getValue(0, 'ptr'),
  };
}

export function addEventWatch(this: SDL, filter: EventFilterCallbackFn) {
  const { cb, watchId } = registerEventWatch(filter);

  const success = this.symbols.SDL_AddEventWatch(cb.ptr, null);

  if (!success) {
    unregisterEventWatch(watchId);
    return null;
  }

  return watchId;
}

export function removeEventWatch(this: SDL, watchId: number) {
  const cb = unregisterEventWatch(watchId);

  if (cb) {
    this.symbols.SDL_RemoveEventWatch(cb.ptr, null);
  }
}

export function filterEvents(this: SDL, filter: EventFilterCallbackFn) {
  // Synchronous callback - create, use, close immediately
  const cb = createEventFilterCallback(filter);

  try {
    this.symbols.SDL_FilterEvents(cb.ptr, null);
  } finally {
    cb.close();
  }
}

export function setEventEnabled(
  this: SDL,
  options: {
    type: EventType;
    enabled: boolean;
  }
) {
  this.symbols.SDL_SetEventEnabled(options.type, options.enabled);
}

export function eventEnabled(this: SDL, type: EventType) {
  return this.symbols.SDL_EventEnabled(type);
}

export function registerEvents(this: SDL, numevents: number) {
  return this.symbols.SDL_RegisterEvents(numevents);
}

export function getWindowFromEvent(this: SDL, event: Event) {
  return this.symbols.SDL_GetWindowFromEvent(event.$address) as Window | null;
}

export function getEventDescription(this: SDL, event: Event) {
  // SDL_GetEventDescription returns the length needed
  // First call with null to get size, then allocate and call again
  const buflen = 256; // Reasonable default buffer size
  const buffer = new CStruct({ length: buflen });

  const length = this.symbols.SDL_GetEventDescription(
    event.$address,
    buffer.$address,
    buflen
  );

  if (length <= 0) return null;

  return new CString(ptr(buffer.$address)).toString();
}
