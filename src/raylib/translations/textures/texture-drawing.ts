import type { RayLib } from '@/raylib';
import type {
  Color,
  NPatchInfo,
  Rectangle,
  Texture2D,
  Vector2,
} from '../struct';

export function drawTexture(
  this: RayLib,
  options: {
    texture: Texture2D;
    posX: number;
    posY: number;
    tint: Color;
  }
) {
  this.symbols.DrawTexture(
    options.texture.$address,
    options.posX,
    options.posY,
    options.tint.$address
  );
}

export function drawTextureV(
  this: RayLib,
  options: {
    texture: Texture2D;
    position: Vector2;
    tint: Color;
  }
) {
  this.symbols.DrawTextureV(
    options.texture.$address,
    options.position.$address,
    options.tint.$address
  );
}

export function drawTextureEx(
  this: RayLib,
  options: {
    texture: Texture2D;
    position: Vector2;
    rotation: number;
    scale: number;
    tint: Color;
  }
) {
  this.symbols.DrawTextureEx(
    options.texture.$address,
    options.position.$address,
    options.rotation,
    options.scale,
    options.tint.$address
  );
}

export function drawTextureRec(
  this: RayLib,
  options: {
    texture: Texture2D;
    source: Rectangle;
    position: Vector2;
    tint: Color;
  }
) {
  this.symbols.DrawTextureRec(
    options.texture.$address,
    options.source.$address,
    options.position.$address,
    options.tint.$address
  );
}

export function drawTexturePro(
  this: RayLib,
  options: {
    texture: Texture2D;
    source: Rectangle;
    dest: Rectangle;
    origin: Vector2;
    rotation: number;
    tint: Color;
  }
) {
  this.symbols.DrawTexturePro(
    options.texture.$address,
    options.source.$address,
    options.dest.$address,
    options.origin.$address,
    options.rotation,
    options.tint.$address
  );
}

export function drawTextureNPatch(
  this: RayLib,
  options: {
    texture: Texture2D;
    nPatchInfo: NPatchInfo;
    dest: Rectangle;
    origin: Vector2;
    rotation: number;
    tint: Color;
  }
) {
  this.symbols.DrawTextureNPatch(
    options.texture.$address,
    options.nPatchInfo.$address,
    options.dest.$address,
    options.origin.$address,
    options.rotation,
    options.tint.$address
  );
}
