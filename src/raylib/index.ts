import { dlopen, type ConvertFns, type Library } from 'bun:ffi';
import {
  FFIDefinition,
  type FFIDefinition as FFIDefinitionType,
} from './ffi/definition';

export class BaseRayLib implements Library<FFIDefinitionType> {
  /** Close the SDL library */
  public readonly close: () => void;
  /** Raw SDL functions */
  public readonly symbols: ConvertFns<FFIDefinitionType>;

  public constructor(filePath: string) {
    const sdl = dlopen(filePath, FFIDefinition);
    this.close = sdl.close;
    this.symbols = sdl.symbols;
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RayLib extends BaseRayLib {}

export const RayLib = BaseRayLib as new (
  ...args: ConstructorParameters<typeof BaseRayLib>
) => RayLib;
