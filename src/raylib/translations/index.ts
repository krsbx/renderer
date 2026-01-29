import { ModelDefinition } from '../ffi/models/definition';
import { AudioTranslation } from './audio';
import { CoreTranslations } from './core';
import { ModelsTranslations } from './models';
import { ShapesTranslations } from './shapes';
import { TextTranslation } from './text';
import { TexturesTranslation } from './textures';

export const Translations = {
  ...CoreTranslations,
  ...ModelsTranslations,
  ...ShapesTranslations,
  ...TexturesTranslation,
  ...TextTranslation,
  ...ModelDefinition,
  ...AudioTranslation,
} as const;

export type Translations = typeof Translations;
