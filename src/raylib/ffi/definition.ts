import { AudioDefinition } from './audio/definition';
import { CoreDefinition } from './core/definition';
import { ModelDefinition } from './models/definition';
import { ShapeDefinition } from './shapes/definition';
import { ShimDefinition } from './shims/definition';
import { TextDefinition } from './text/definition';
import { TextureDefinition } from './textures/definition';

export const FFIDefinition = {
  ...CoreDefinition,
  ...ShapeDefinition,
  ...TextureDefinition,
  ...TextDefinition,
  ...ModelDefinition,
  ...AudioDefinition,
} as const;

// Shim definitions are separate - loaded via cc() at runtime
export { ShimDefinition };

export type FFIDefinition = typeof FFIDefinition;
