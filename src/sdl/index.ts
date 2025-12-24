import { dlopen, type ConvertFns, type Library } from 'bun:ffi';
import {
  FFFIDefinition,
  type FFFIDefinition as FFFIDefinitionType,
} from './ffi/definition';
import {
  Translations,
  type Translations as TranslationsType,
} from './translations/index';

export class BaseSDL implements Library<FFFIDefinitionType> {
  public readonly close: () => void;
  public readonly symbols: ConvertFns<FFFIDefinitionType>;

  public constructor(filePath: string) {
    const sdl = dlopen(filePath, FFFIDefinition);
    this.close = sdl.close;
    this.symbols = sdl.symbols;

    Object.entries(Translations).forEach(([key, value]) => {
      (this as Record<string, unknown>)[key] = value.bind(this as never);
    });
  }
}

export interface SDL extends BaseSDL, TranslationsType {}

export const SDL = BaseSDL as new (
  ...args: ConstructorParameters<typeof BaseSDL>
) => SDL;
