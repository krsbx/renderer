import type { RayLib } from '@/raylib';
import type { Color, Vector2 } from '../struct';

export function drawRing(
  this: RayLib,
  options: {
    center: Vector2;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    segments: number;
    color: Color;
  }
) {
  this.symbols.DrawRing(
    options.center.$memory,
    options.innerRadius,
    options.outerRadius,
    options.startAngle,
    options.endAngle,
    options.segments,
    options.color.$memory
  );
}

export function drawRingLines(
  this: RayLib,
  options: {
    center: Vector2;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    segments: number;
    color: Color;
  }
) {
  this.symbols.DrawRingLines(
    options.center.$memory,
    options.innerRadius,
    options.outerRadius,
    options.startAngle,
    options.endAngle,
    options.segments,
    options.color.$memory
  );
}
