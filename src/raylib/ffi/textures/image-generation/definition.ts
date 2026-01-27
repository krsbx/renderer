import { type FFIFunction } from 'bun:ffi';

export const ImageGenerationDefinition = {
  // All image generation functions return Image structs and are SHIMMED
  // Image GenImageColor(int width, int height, Color color);
  // Image GenImageGradientLinear(int width, int height, int direction, Color start, Color end);
  // Image GenImageGradientRadial(int width, int height, float density, Color inner, Color outer);
  // Image GenImageGradientSquare(int width, int height, float density, Color inner, Color outer);
  // Image GenImageChecked(int width, int height, int checksX, int checksY, Color col1, Color col2);
  // Image GenImageWhiteNoise(int width, int height, float factor);
  // Image GenImagePerlinNoise(int width, int height, int offsetX, int offsetY, float scale);
  // Image GenImageCellular(int width, int height, int tileSize);
  // See src/raylib/ffi/shims/definition.ts for shimmed versions
} satisfies Record<string, FFIFunction>;
