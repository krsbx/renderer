import type { RayLib } from '@/raylib';
import type { Color, Vector2 } from '../struct';
import { generateVector2Points } from './utility';

export function drawTriangle(
  this: RayLib,
  options: {
    v1: Vector2;
    v2: Vector2;
    v3: Vector2;
    color: Color;
  }
) {
  this.symbols.DrawTriangle(
    options.v1.$address,
    options.v2.$address,
    options.v3.$address,
    options.color.$address
  );
}

export function drawTriangleLines(
  this: RayLib,
  options: {
    v1: Vector2;
    v2: Vector2;
    v3: Vector2;
    color: Color;
  }
) {
  this.symbols.DrawTriangleLines(
    options.v1.$address,
    options.v2.$address,
    options.v3.$address,
    options.color.$address
  );
}

export function drawTriangleFan(
  this: RayLib,
  options: {
    points: Vector2[];
    color: Color;
  }
) {
  const points = generateVector2Points(options.points);

  this.symbols.DrawTriangleFan(
    points.$address,
    options.points.length,
    options.color.$address
  );
}

export function drawTriangleStrip(
  this: RayLib,
  options: {
    points: Vector2[];
    color: Color;
  }
) {
  const points = generateVector2Points(options.points);

  this.symbols.DrawTriangleStrip(
    points.$address,
    options.points.length,
    options.color.$address
  );
}
