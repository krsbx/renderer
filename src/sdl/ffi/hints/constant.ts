export const HintsPriority = {
  DEFAULT: 0,
  NORMAL: 1,
  OVERRIDE: 2,
} as const;

export type HintsPriority = (typeof HintsPriority)[keyof typeof HintsPriority];
