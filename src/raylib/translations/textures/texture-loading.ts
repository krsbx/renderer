import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import {
  Image,
  Rectangle,
  RenderTexture2D,
  Texture2D,
  TextureCubemap,
} from '../struct';

export function loadTexture(this: RayLib, fileName: string) {
  const texture = Texture2D.create();

  this.symbols.LoadTexture(stringToCString(fileName).ptr, texture.$memory);

  return texture;
}

export function loadTextureFromImage(this: RayLib, image: Image) {
  const texture = Texture2D.create();

  this.symbols.LoadTextureFromImage(image.$memory, texture.$memory);

  return texture;
}

export function loadTextureCubemap(
  this: RayLib,
  options: {
    image: Image;
    layout: number;
  }
) {
  const texture = TextureCubemap.create();

  this.symbols.LoadTextureCubemap(
    options.image.$memory,
    options.layout,
    texture.$memory
  );

  return texture;
}

export function loadRenderTexture(
  this: RayLib,
  options: {
    width: number;
    height: number;
  }
) {
  const texture = RenderTexture2D.create();

  this.symbols.LoadRenderTexture(
    options.width,
    options.height,
    texture.$memory
  );

  return texture;
}

export function isTextureValid(this: RayLib, texture: Texture2D) {
  return this.symbols.IsTextureValid(texture.$memory);
}

export function unloadTexture(this: RayLib, texture: Texture2D) {
  this.symbols.UnloadTexture(texture.$memory);
}

export function isRenderTextureValid(this: RayLib, texture: RenderTexture2D) {
  return this.symbols.IsRenderTextureValid(texture.$memory);
}

export function unloadRenderTexture(this: RayLib, texture: RenderTexture2D) {
  this.symbols.UnloadRenderTexture(texture.$memory);
}

export function updateTexture(
  this: RayLib,
  options: {
    texture: Texture2D;
    pixels: Uint8Array;
  }
) {
  this.symbols.UpdateTexture(options.texture.$memory, options.pixels);
}

export function updateTextureRec(
  this: RayLib,
  options: {
    texture: Texture2D;
    rec: Rectangle;
    pixels: Uint8Array;
  }
) {
  this.symbols.UpdateTextureRec(
    options.texture.$memory,
    options.rec.$memory,
    options.pixels
  );
}
