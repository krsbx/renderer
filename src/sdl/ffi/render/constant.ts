import type { Brand } from '@/types/shared';

const RawTextureAccess = {
  STATIC: 0 /**< Changes rarely, not lockable */,
  STREAMING: 1 /**< Changes frequently, lockable */,
  TARGET: 2 /**< Texture can be used as a render target */,
} as const;

export const TextureAccess = RawTextureAccess as Readonly<
  Record<keyof typeof RawTextureAccess, Brand<number, 'TextureAccess'>>
>;

export type TextureAccess = (typeof TextureAccess)[keyof typeof TextureAccess];

const RawTextureAddressMode = {
  INVALID: -1,
  AUTO: 0 /**< Wrapping is enabled if texture coordinates are outside [0, 1], this is the default */,
  CLAMP: 1 /**< Texture coordinates are clamped to the [0, 1] range */,
  WRAP: 2 /**< The texture is repeated (tiled) */,
} as const;

export const TextureAddressMode = RawTextureAddressMode as Readonly<
  Record<
    keyof typeof RawTextureAddressMode,
    Brand<number, 'TextureAddressMode'>
  >
>;

export type TextureAddressMode =
  (typeof TextureAddressMode)[keyof typeof TextureAddressMode];

const RawRendererLogicalPresentation = {
  DISABLED: 0 /**< There is no logical size in effect */,
  STRETCH: 1 /**< The rendered content is stretched to the output resolution */,
  LETTERBOX: 2 /**< The rendered content is fit to the largest dimension and the other dimension is letterboxed with the clear color */,
  OVERSCAN: 3 /**< The rendered content is fit to the smallest dimension and the other dimension extends beyond the output bounds */,
  INTEGER_SCALE: 4 /**< The rendered content is scaled up by integer multiples to fit the output resolution */,
} as const;

export const RendererLogicalPresentation =
  RawRendererLogicalPresentation as Readonly<
    Record<
      keyof typeof RawRendererLogicalPresentation,
      Brand<number, 'RendererLogicalPresentation'>
    >
  >;

export type RendererLogicalPresentation =
  (typeof RendererLogicalPresentation)[keyof typeof RendererLogicalPresentation];
