import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { CString, ptr, type JSCallback, type Pointer } from 'bun:ffi';
import { type EventAction, type EventType } from '../../../ffi/events/constant';
import { Event } from '../struct';

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
  options: {
    filter: JSCallback;
    userdata?: Pointer | null;
  }
) {
  this.symbols.SDL_SetEventFilter(options.filter.ptr, options.userdata ?? null);
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

export function addEventWatch(
  this: SDL,
  options: {
    filter: JSCallback;
    userdata?: Pointer | null;
  }
) {
  return this.symbols.SDL_AddEventWatch(
    options.filter.ptr,
    options.userdata ?? null
  );
}

export function removeEventWatch(
  this: SDL,
  options: {
    filter: JSCallback;
    userdata?: Pointer | null;
  }
) {
  this.symbols.SDL_RemoveEventWatch(
    options.filter.ptr,
    options.userdata ?? null
  );
}

export function filterEvents(
  this: SDL,
  options: {
    filter: JSCallback;
    userdata?: Pointer | null;
  }
) {
  this.symbols.SDL_FilterEvents(options.filter.ptr, options.userdata ?? null);
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
  return this.symbols.SDL_GetWindowFromEvent(event.$address);
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
