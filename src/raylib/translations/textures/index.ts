import * as color from './color';
import * as imageDrawing from './image-drawing';
import * as imageGeneration from './image-generation';
import * as imageLoading from './image-loading';
import * as imageManipulation from './image-manipulation';
import * as textureConfig from './texture-config';
import * as textureDrawing from './texture-drawing';
import * as textureLoading from './texture-loading';

export const TexturesTranslation = {
  ...color,
  ...imageDrawing,
  ...imageGeneration,
  ...imageLoading,
  ...imageManipulation,
  ...textureConfig,
  ...textureDrawing,
  ...textureLoading,
} as const;

export type TexturesTranslation = typeof TexturesTranslation;
