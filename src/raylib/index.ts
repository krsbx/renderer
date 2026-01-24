import { dlopen, type ConvertFns, type Library } from 'bun:ffi';
import {
  FFIDefinition,
  type FFIDefinition as FFIDefinitionType,
} from './ffi/definition';
import type { ShimDefinition } from './ffi/shims/definition';
import { loadShim } from './ffi/shims/loader';

export class BaseRayLib implements Library<FFIDefinitionType> {
  /** Close the SDL library */
  public readonly close: () => void;
  /** Raw SDL functions */
  public readonly symbols: ConvertFns<FFIDefinitionType>;

  public readonly shim: Library<ShimDefinition>;

  public constructor(filePath: string) {
    const sdl = dlopen(filePath, FFIDefinition);
    this.symbols = sdl.symbols;
    this.shim = loadShim(filePath);

    this.close = () => {
      sdl.close();
      this.shim.close();
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RayLib extends BaseRayLib {}

export const RayLib = BaseRayLib as new (
  ...args: ConstructorParameters<typeof BaseRayLib>
) => RayLib;
