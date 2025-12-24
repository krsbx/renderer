import { dlopen, type ConvertFns, type Library } from 'bun:ffi';
import {
  FFIDefinition,
  type FFIDefinition as FFIDefinitionType,
} from './ffi/definition';
import {
  Translations,
  type Translations as TranslationsType,
} from './translations/index';

export class BaseSDL implements Library<FFIDefinitionType> {
  public readonly close: () => void;
  public readonly symbols: ConvertFns<FFIDefinitionType>;

  public constructor(filePath: string) {
    const sdl = dlopen(filePath, FFIDefinition);
    this.close = sdl.close;
    this.symbols = sdl.symbols;

    Object.entries(Translations).forEach(([key, value]) => {
      (this as Record<string, unknown>)[key] = value.bind(this);
    });
  }
}

export interface SDL extends BaseSDL, TranslationsType {}

export const SDL = BaseSDL as new (
  ...args: ConstructorParameters<typeof BaseSDL>
) => SDL;
