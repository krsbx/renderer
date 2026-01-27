import { CoreTranslations } from './core';

export const Translations = {
  ...CoreTranslations,
} as const;

export type Translations = typeof Translations;
