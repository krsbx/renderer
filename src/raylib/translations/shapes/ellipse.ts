import type { RayLib } from '@/raylib';
import type { Color } from '../struct';

export function drawEllipse(
  this: RayLib,
  options: {
    centerX: number;
    centerY: number;
    radiusH: number;
    radiusV: number;
    color: Color;
  }
) {
  this.symbols.DrawEllipse(
    options.centerX,
    options.centerY,
    options.radiusH,
    options.radiusV,
    options.color.$memory
  );
}

export function drawEllipseLines(
  this: RayLib,
  options: {
    centerX: number;
    centerY: number;
    radiusH: number;
    radiusV: number;
    color: Color;
  }
) {
  this.symbols.DrawEllipseLines(
    options.centerX,
    options.centerY,
    options.radiusH,
    options.radiusV,
    options.color.$memory
  );
}
