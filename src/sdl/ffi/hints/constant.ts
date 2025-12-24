export const HintsPriority = {
  SDL_HINT_DEFAULT: 0,
  SDL_HINT_NORMAL: 1,
  SDL_HINT_OVERRIDE: 2,
} as const;

export type HintsPriority = (typeof HintsPriority)[keyof typeof HintsPriority];
