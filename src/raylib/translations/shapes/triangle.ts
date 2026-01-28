import type { RayLib } from '@/raylib';
import { CStruct } from '@/utility/cstruct';
import { Vector2, type Color } from '../struct';

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
  const { buffer: points } = CStruct.writeArray(
    options.points,
    Vector2.BYTE_SIZE
  );

  this.symbols.DrawTriangleFan(
    points,
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
  const { buffer: points } = CStruct.writeArray(
    options.points,
    Vector2.BYTE_SIZE
  );

  this.symbols.DrawTriangleStrip(
    points,
    options.points.length,
    options.color.$address
  );
}
