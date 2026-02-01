import type { RayLib } from '@/raylib';
import type { Color, Vector2 } from '../struct';

export function drawPoly(
  this: RayLib,
  options: {
    center: Vector2;
    sides: number;
    radius: number;
    rotation: number;
    color: Color;
  }
) {
  this.symbols.DrawPoly(
    options.center.$memory,
    options.sides,
    options.radius,
    options.rotation,
    options.color.$memory
  );
}

export function drawPolyLines(
  this: RayLib,
  options: {
    center: Vector2;
    sides: number;
    radius: number;
    rotation: number;
    color: Color;
  }
) {
  this.symbols.DrawPolyLines(
    options.center.$memory,
    options.sides,
    options.radius,
    options.rotation,
    options.color.$memory
  );
}

export function drawPolyLinesEx(
  this: RayLib,
  options: {
    center: Vector2;
    sides: number;
    radius: number;
    rotation: number;
    lineThick: number;
    color: Color;
  }
) {
  this.symbols.DrawPolyLinesEx(
    options.center.$memory,
    options.sides,
    options.radius,
    options.rotation,
    options.lineThick,
    options.color.$memory
  );
}
