import type { SDL } from '@/sdl';
import type {
  BlendFactor,
  BlendMode,
  BlendOperation,
} from '@sdl/ffi/constant/blend-mode';

export function composeCustomBlendMode(
  this: SDL,
  options: {
    srcColorFactor: BlendFactor;
    dstColorFactor: BlendFactor;
    colorOperation: BlendOperation;
    srcAlphaFactor: BlendFactor;
    dstAlphaFactor: BlendFactor;
    alphaOperation: BlendOperation;
  }
) {
  return this.symbols.SDL_ComposeCustomBlendMode(
    options.srcColorFactor,
    options.dstColorFactor,
    options.colorOperation,
    options.srcAlphaFactor,
    options.dstAlphaFactor,
    options.alphaOperation
  ) as BlendMode;
}
