import { dlopen, type ConvertFns, type Library } from 'bun:ffi';
import {
  FFIDefinition,
  type FFIDefinition as FFIDefinitionType,
} from './ffi/definition';
import { loadShim, type ShimDefinition } from './ffi/shims';
import { Translations, Translations as TranslationsType } from './translations';

type FFISymbols = FFIDefinitionType & ShimDefinition;

class BaseRayLib implements Library<FFISymbols> {
  /** Close the SDL library */
  public readonly close: () => void;
  /** Raw SDL functions */
  public readonly symbols: ConvertFns<FFISymbols>;

  public constructor(filePath: string) {
    const sdl = dlopen(filePath, FFIDefinition);
    const shim = loadShim(filePath);

    this.symbols = {
      ...sdl.symbols,
      ...shim.symbols,
    };

    this.close = () => {
      sdl.close();
      shim.close();
    };

    Object.entries(Translations).forEach(([key, value]) => {
      (this as Record<string, unknown>)[key] = (
        value as (...args: unknown[]) => unknown
      ).bind(this);
    });
  }

  public [Symbol.dispose]() {
    this.close();
  }
}

export interface RayLib extends BaseRayLib, TranslationsType {}

export const RayLib = BaseRayLib as new (
  ...args: ConstructorParameters<typeof BaseRayLib>
) => RayLib;
