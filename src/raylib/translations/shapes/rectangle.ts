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
    options.color.$memory
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
    options.position.$memory,
    options.size.$memory,
    options.color.$memory
  );
}

export function drawRectangleRec(
  this: RayLib,
  options: {
    rec: Rectangle;
    color: Color;
  }
) {
  this.symbols.DrawRectangleRec(options.rec.$memory, options.color.$memory);
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
    options.rec.$memory,
    options.origin.$memory,
    options.rotation,
    options.color.$memory
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
    options.top.$memory,
    options.bottom.$memory
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
    options.left.$memory,
    options.right.$memory
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
    options.rec.$memory,
    options.topLeft.$memory,
    options.bottomLeft.$memory,
    options.topRight.$memory,
    options.bottomRight.$memory
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
    options.color.$memory
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
    options.rec.$memory,
    options.lineThick,
    options.color.$memory
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
    options.rec.$memory,
    options.roundness,
    options.segments,
    options.color.$memory
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
    options.rec.$memory,
    options.roundness,
    options.segments,
    options.color.$memory
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
    options.rec.$memory,
    options.roundness,
    options.segments,
    options.lineThick,
    options.color.$memory
  );
}
