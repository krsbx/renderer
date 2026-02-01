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
    options.texture.$memory,
    options.posX,
    options.posY,
    options.tint.$memory
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
    options.texture.$memory,
    options.position.$memory,
    options.tint.$memory
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
    options.texture.$memory,
    options.position.$memory,
    options.rotation,
    options.scale,
    options.tint.$memory
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
    options.texture.$memory,
    options.source.$memory,
    options.position.$memory,
    options.tint.$memory
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
    options.texture.$memory,
    options.source.$memory,
    options.dest.$memory,
    options.origin.$memory,
    options.rotation,
    options.tint.$memory
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
    options.texture.$memory,
    options.nPatchInfo.$memory,
    options.dest.$memory,
    options.origin.$memory,
    options.rotation,
    options.tint.$memory
  );
}
