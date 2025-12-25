import { type FFIFunction, FFIType } from 'bun:ffi';

export const EventsDefinition = {
  // void SDL_PumpEvents(void);                                                                                     // Pump the event loop, gathering events from the input devices.
  SDL_PumpEvents: {
    args: [],
    returns: FFIType.void,
  },
  // int SDL_PeepEvents(SDL_Event *events, int numevents, SDL_EventAction action, Uint32 minType, Uint32 maxType);  // Check the event queue for messages and optionally return them.
  SDL_PeepEvents: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u32, FFIType.u32],
    returns: FFIType.i32,
  },
  // bool SDL_HasEvent(Uint32 type);                                                                                // Check for the existence of a certain event type in the event queue.
  SDL_HasEvent: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_HasEvents(Uint32 minType, Uint32 maxType);                                                            // Check for the existence of certain event types in the event queue.
  SDL_HasEvents: {
    args: [FFIType.u32, FFIType.u32],
    returns: FFIType.bool,
  },
  // void SDL_FlushEvent(Uint32 type);                                                                              // Clear events of a specific type from the event queue.
  SDL_FlushEvent: {
    args: [FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_FlushEvents(Uint32 minType, Uint32 maxType);                                                          // Clear events of a range of types from the event queue.
  SDL_FlushEvents: {
    args: [FFIType.u32, FFIType.u32],
    returns: FFIType.void,
  },
  // bool SDL_PollEvent(SDL_Event *event);                                                                          // Poll for currently pending events.
  SDL_PollEvent: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WaitEvent(SDL_Event *event);                                                                          // Wait indefinitely for the next available event.
  SDL_WaitEvent: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WaitEventTimeout(SDL_Event *event, Sint32 timeoutMS);                                                 // Wait until the specified timeout (in milliseconds) for the next available event.
  SDL_WaitEventTimeout: {
    args: [FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_PushEvent(SDL_Event *event);                                                                          // Add an event to the event queue.
  SDL_PushEvent: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_SetEventFilter(SDL_EventFilter filter, void *userdata);                                               // Set up a filter to process all events before they are added to the internal event queue.
  SDL_SetEventFilter: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_GetEventFilter(SDL_EventFilter *filter, void **userdata);                                             // Query the current event filter.
  SDL_GetEventFilter: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_AddEventWatch(SDL_EventFilter filter, void *userdata);                                                // Add a callback to be triggered when an event is added to the event queue.
  SDL_AddEventWatch: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_RemoveEventWatch(SDL_EventFilter filter, void *userdata);                                             // Remove an event watch callback added with SDL_AddEventWatch().
  SDL_RemoveEventWatch: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_FilterEvents(SDL_EventFilter filter, void *userdata);                                                 // Run a specific filter function on the current event queue, removing any events for which the filter returns false.
  SDL_FilterEvents: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_SetEventEnabled(Uint32 type, bool enabled);                                                           // Set the state of processing events by type.
  SDL_SetEventEnabled: {
    args: [FFIType.u32, FFIType.bool],
    returns: FFIType.void,
  },
  // bool SDL_EventEnabled(Uint32 type);                                                                            // Query the state of processing events by type.
  SDL_EventEnabled: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // Uint32 SDL_RegisterEvents(int numevents);                                                                      // Allocate a set of user-defined events, and return the beginning event number for that set of events.
  SDL_RegisterEvents: {
    args: [FFIType.i32],
    returns: FFIType.u32,
  },
  // SDL_Window * SDL_GetWindowFromEvent(const SDL_Event *event);                                                   // Get window associated with an event.
  SDL_GetWindowFromEvent: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // int SDL_GetEventDescription(const SDL_Event *event, char *buf, int buflen);                                    // Generate an English description of an event.
  SDL_GetEventDescription: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.i32,
  },
} satisfies Record<string, FFIFunction>;
