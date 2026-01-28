import * as codepoint from './codepoint';
import * as drawing from './drawing';
import * as font from './font';
import * as info from './info';
import * as string from './string';

export const TextTranslation = {
  ...codepoint,
  ...drawing,
  ...font,
  ...info,
  ...string,
} as const;

export type TextTranslation = typeof TextTranslation;
