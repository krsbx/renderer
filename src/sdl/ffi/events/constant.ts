export const EventAction = {
  SDL_ADDEVENT: 0,
  SDL_PEEKEVENT: 1,
  SDL_GETEVENT: 2,
} as const;

export type EventAction = (typeof EventAction)[keyof typeof EventAction];
