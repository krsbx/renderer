import { CoreTranslations } from './core';
import { ModelsTranslations } from './models';
import { ShapesTranslations } from './shapes';
import { TexturesTranslation } from './textures';

export const Translations = {
  ...CoreTranslations,
  ...ModelsTranslations,
  ...ShapesTranslations,
  ...TexturesTranslation,
} as const;

export type Translations = typeof Translations;
