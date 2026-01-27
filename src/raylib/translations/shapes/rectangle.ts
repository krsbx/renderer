import type { RayLib } from '@/raylib';
import type { Color, Rectangle, Vector2 } from '../struct';

export function drawRectangle(
  this: RayLib,
  options: {
    posX: number;
    posY: number;
    width: number;
    height: number;
    color: Color;
  }
) {
  this.symbols.DrawRectangle(
    options.posX,
    options.posY,
    options.width,
    options.height,
    options.color.$address
  );
}

export function drawRectangleV(
  this: RayLib,
  options: {
    position: Vector2;
    size: Vector2;
    color: Color;
  }
) {
  this.symbols.DrawRectangleV(
    options.position.$address,
    options.size.$address,
    options.color.$address
  );
}

export function drawRectangleRec(
  this: RayLib,
  options: {
    rec: Rectangle;
    color: Color;
  }
) {
  this.symbols.DrawRectangleRec(options.rec.$address, options.color.$address);
}

export function drawRectanglePro(
  this: RayLib,
  options: {
    rec: Rectangle;
    origin: Vector2;
    rotation: number;
    color: Color;
  }
) {
  this.symbols.DrawRectanglePro(
    options.rec.$address,
    options.origin.$address,
    options.rotation,
    options.color.$address
  );
}

export function drawRectangleGradientV(
  this: RayLib,
  options: {
    posX: number;
    posY: number;
    width: number;
    height: number;
    top: Color;
    bottom: Color;
  }
) {
  this.symbols.DrawRectangleGradientV(
    options.posX,
    options.posY,
    options.width,
    options.height,
    options.top.$address,
    options.bottom.$address
  );
}

export function drawRectangleGradientH(
  this: RayLib,
  options: {
    posX: number;
    posY: number;
    width: number;
    height: number;
    left: Color;
    right: Color;
  }
) {
  this.symbols.DrawRectangleGradientH(
    options.posX,
    options.posY,
    options.width,
    options.height,
    options.left.$address,
    options.right.$address
  );
}

export function drawRectangleGradientEx(
  this: RayLib,
  options: {
    rec: Rectangle;
    topLeft: Color;
    bottomLeft: Color;
    topRight: Color;
    bottomRight: Color;
  }
) {
  this.symbols.DrawRectangleGradientEx(
    options.rec.$address,
    options.topLeft.$address,
    options.bottomLeft.$address,
    options.topRight.$address,
    options.bottomRight.$address
  );
}

export function drawRectangleLines(
  this: RayLib,
  options: {
    posX: number;
    posY: number;
    width: number;
    height: number;
    color: Color;
  }
) {
  this.symbols.DrawRectangleLines(
    options.posX,
    options.posY,
    options.width,
    options.height,
    options.color.$address
  );
}

export function drawRectangleLinesEx(
  this: RayLib,
  options: {
    rec: Rectangle;
    lineThick: number;
    color: Color;
  }
) {
  this.symbols.DrawRectangleLinesEx(
    options.rec.$address,
    options.lineThick,
    options.color.$address
  );
}

export function drawRectangleRounded(
  this: RayLib,
  options: {
    rec: Rectangle;
    roundness: number;
    segments: number;
    color: Color;
  }
) {
  this.symbols.DrawRectangleRounded(
    options.rec.$address,
    options.roundness,
    options.segments,
    options.color.$address
  );
}

export function drawRectangleRoundedLines(
  this: RayLib,
  options: {
    rec: Rectangle;
    roundness: number;
    segments: number;
    color: Color;
  }
) {
  this.symbols.DrawRectangleRoundedLines(
    options.rec.$address,
    options.roundness,
    options.segments,
    options.color.$address
  );
}

export function drawRectangleRoundedLinesEx(
  this: RayLib,
  options: {
    rec: Rectangle;
    roundness: number;
    segments: number;
    lineThick: number;
    color: Color;
  }
) {
  this.symbols.DrawRectangleRoundedLinesEx(
    options.rec.$address,
    options.roundness,
    options.segments,
    options.lineThick,
    options.color.$address
  );
}
