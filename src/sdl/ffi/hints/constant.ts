import type { Brand } from '../../types/shared';

const RawHintsPriority = {
  DEFAULT: 0,
  NORMAL: 1,
  OVERRIDE: 2,
} as const;

export const HintsPriority = RawHintsPriority as Readonly<
  Record<keyof typeof RawHintsPriority, Brand<number, 'HintsPriority'>>
>;

export type HintsPriority = (typeof HintsPriority)[keyof typeof HintsPriority];
