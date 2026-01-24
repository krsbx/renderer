import { CoreDefinition } from './core/definition';
import { ShapeDefinition } from './shape/definition';
import { ShimDefinition } from './shims/definition';
import { TextureDefinition } from './texture/definition';

export const FFIDefinition = {
  ...CoreDefinition,
  ...ShapeDefinition,
  ...TextureDefinition,
} as const;

// Shim definitions are separate - loaded via cc() at runtime
export { ShimDefinition };

export type FFIDefinition = typeof FFIDefinition;
