import type { RayLib } from '@/raylib';
import { CStruct } from '@/utility/cstruct';
import { Color, Rectangle, Texture2D, Vector2 } from '../struct';

export function setShapesTexture(
  this: RayLib,
  options: {
    texture: Texture2D;
    source: Rectangle;
  }
) {
  this.symbols.SetShapesTexture(
    options.texture.$memory,
    options.source.$memory
  );
}

export function getShapesTexture(this: RayLib) {
  const texture = Texture2D.create();

  this.symbols.GetShapesTexture(texture.$memory);

  return texture;
}

export function getShapesTextureRectangle(this: RayLib) {
  const rect = Rectangle.create();

  this.symbols.GetShapesTextureRectangle(rect.$memory);

  return rect;
}

export function drawPixel(
  this: RayLib,
  options: {
    posX: number;
    posY: number;
    color: Color;
  }
) {
  this.symbols.DrawPixel(options.posX, options.posY, options.color.$memory);
}

export function drawPixelV(
  this: RayLib,
  options: {
    position: Vector2;
    color: Color;
  }
) {
  this.symbols.DrawPixelV(options.position.$memory, options.color.$memory);
}

export function drawLine(
  this: RayLib,
  options: {
    startPosX: number;
    startPosY: number;
    endPosX: number;
    endPosY: number;
    color: Color;
  }
) {
  this.symbols.DrawLine(
    options.startPosX,
    options.startPosY,
    options.endPosX,
    options.endPosY,
    options.color.$memory
  );
}

export function drawLineV(
  this: RayLib,
  options: {
    startPos: Vector2;
    endPos: Vector2;
    color: Color;
  }
) {
  this.symbols.DrawLineV(
    options.startPos.$memory,
    options.endPos.$memory,
    options.color.$memory
  );
}

export function drawLineEx(
  this: RayLib,
  options: {
    startPos: Vector2;
    endPos: Vector2;
    thick: number;
    color: Color;
  }
) {
  this.symbols.DrawLineEx(
    options.startPos.$memory,
    options.endPos.$memory,
    options.thick,
    options.color.$memory
  );
}

export function drawLineStrip(
  this: RayLib,
  options: {
    points: Vector2[];
    color: Color;
  }
) {
  const { buffer: points } = CStruct.writeArray(
    options.points,
    Vector2.BYTE_SIZE
  );

  this.symbols.DrawLineStrip(
    points,
    options.points.length,
    options.color.$memory
  );
}

export function drawLineBezier(
  this: RayLib,
  options: {
    startPos: Vector2;
    endPos: Vector2;
    thick: number;
    color: Color;
  }
) {
  this.symbols.DrawLineBezier(
    options.startPos.$memory,
    options.endPos.$memory,
    options.thick,
    options.color.$memory
  );
}
