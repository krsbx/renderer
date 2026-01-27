import { CoreTranslations } from './core';
import { ShapesTranslations } from './shapes';

export const Translations = {
  ...CoreTranslations,
  ...ShapesTranslations,
} as const;

export type Translations = typeof Translations;
