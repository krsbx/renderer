import { dlopen, type ConvertFns, type Library } from 'bun:ffi';
import {
  FFIDefinition,
  type FFIDefinition as FFIDefinitionType,
} from './ffi/definition';
import { loadShim, type ShimDefinition } from './ffi/shims';

export class BaseRayLib implements Library<FFIDefinitionType & ShimDefinition> {
  /** Close the SDL library */
  public readonly close: () => void;
  /** Raw SDL functions */
  public readonly symbols: ConvertFns<FFIDefinitionType & ShimDefinition>;

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
  }

  public [Symbol.dispose]() {
    this.close();
  }
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface RayLib extends BaseRayLib {}

export const RayLib = BaseRayLib as new (
  ...args: ConstructorParameters<typeof BaseRayLib>
) => RayLib;
