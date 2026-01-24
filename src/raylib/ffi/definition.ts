import { CoreDefinition } from './core/definition';

export const FFIDefinition = {
  ...CoreDefinition,
} as const;

export type FFIDefinition = typeof FFIDefinition;
