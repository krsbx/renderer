import { CodepointDefinition } from './codepoint/definition';
import { TextDrawingDefinition } from './drawing/definition';
import { FontDefinition } from './font/definition';
import { TextInfoDefinition } from './info/definition';
import { TextStringDefinition } from './string/definition';

export const TextDefinition = {
  ...FontDefinition,
  ...TextDrawingDefinition,
  ...TextInfoDefinition,
  ...CodepointDefinition,
  ...TextStringDefinition,
} as const;
