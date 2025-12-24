import { dlopen, type ConvertFns, type Library } from 'bun:ffi';
import {
  FFFIDefinition,
  type FFFIDefinition as FFFIDefinitionType,
} from './ffi/definition';

export class SDL implements Library<FFFIDefinitionType> {
  public readonly close: () => void;
  public readonly symbols: ConvertFns<FFFIDefinitionType>;

  public constructor(filePath: string) {
    const sdl = dlopen(filePath, FFFIDefinition);
    this.close = sdl.close;
    this.symbols = sdl.symbols;
  }
}
