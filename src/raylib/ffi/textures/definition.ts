import { ColorDefinition } from './color/definition';
import { ImageDrawingDefinition } from './image-drawing/definition';
import { ImageGenerationDefinition } from './image-generation/definition';
import { ImageLoadingDefinition } from './image-loading/definition';
import { ImageManipulationDefinition } from './image-manipulation/definition';
import { TextureConfigDefinition } from './texture-config/definition';
import { TextureDrawingDefinition } from './texture-drawing/definition';
import { TextureLoadingDefinition } from './texture-loading/definition';

export const TextureDefinition = {
  ...ImageLoadingDefinition,
  ...ImageGenerationDefinition,
  ...ImageManipulationDefinition,
  ...ImageDrawingDefinition,
  ...TextureLoadingDefinition,
  ...TextureConfigDefinition,
  ...TextureDrawingDefinition,
  ...ColorDefinition,
} as const;
