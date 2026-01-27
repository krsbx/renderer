import type { RayLib } from '@/raylib';
import type { Texture2D } from '../struct';

export function genTextureMipmaps(this: RayLib, texture: Texture2D) {
  this.symbols.GenTextureMipmaps(texture.$address);
}

export function setTextureFilter(
  this: RayLib,
  options: {
    texture: Texture2D;
    filter: number;
  }
) {
  this.symbols.SetTextureFilter(options.texture.$address, options.filter);
}

export function setTextureWrap(
  this: RayLib,
  options: {
    texture: Texture2D;
    wrap: number;
  }
) {
  this.symbols.SetTextureWrap(options.texture.$address, options.wrap);
}
