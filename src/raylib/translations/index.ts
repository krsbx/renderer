import { CoreTranslations } from './core';
import { ShapesTranslations } from './shapes';
import { TexturesTranslation } from './textures';

export const Translations = {
  ...CoreTranslations,
  ...ShapesTranslations,
  ...TexturesTranslation,
} as const;

export type Translations = typeof Translations;
