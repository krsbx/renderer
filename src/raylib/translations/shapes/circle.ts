import type { RayLib } from '@/raylib';
import type { Color, Vector2 } from '../struct';

export function drawCircle(
  this: RayLib,
  options: {
    centerX: number;
    centerY: number;
    radius: number;
    color: Color;
  }
) {
  this.symbols.DrawCircle(
    options.centerX,
    options.centerY,
    options.radius,
    options.color.$address
  );
}

export function drawCircleSector(
  this: RayLib,
  options: {
    center: Vector2;
    radius: number;
    startAngle: number;
    endAngle: number;
    segments: number;
    color: Color;
  }
) {
  this.symbols.DrawCircleSector(
    options.center.$address,
    options.radius,
    options.startAngle,
    options.endAngle,
    options.segments,
    options.color.$address
  );
}

export function drawCircleSectorLines(
  this: RayLib,
  options: {
    center: Vector2;
    radius: number;
    startAngle: number;
    endAngle: number;
    segments: number;
    color: Color;
  }
) {
  this.symbols.DrawCircleSectorLines(
    options.center.$address,
    options.radius,
    options.startAngle,
    options.endAngle,
    options.segments,
    options.color.$address
  );
}

export function drawCircleGradient(
  this: RayLib,
  options: {
    centerX: number;
    centerY: number;
    radius: number;
    inner: Color;
    outer: Color;
  }
) {
  this.symbols.DrawCircleGradient(
    options.centerX,
    options.centerY,
    options.radius,
    options.inner.$address,
    options.outer.$address
  );
}

export function drawCircleV(
  this: RayLib,
  options: {
    center: Vector2;
    radius: number;
    color: Color;
  }
) {
  this.symbols.DrawCircleV(
    options.center.$address,
    options.radius,
    options.color.$address
  );
}

export function drawCircleLines(
  this: RayLib,
  options: {
    centerX: number;
    centerY: number;
    radius: number;
    color: Color;
  }
) {
  this.symbols.DrawCircleLines(
    options.centerX,
    options.centerY,
    options.radius,
    options.color.$address
  );
}

export function drawCircleLinesV(
  this: RayLib,
  options: {
    center: Vector2;
    radius: number;
    color: Color;
  }
) {
  this.symbols.DrawCircleLinesV(
    options.center.$address,
    options.radius,
    options.color.$address
  );
}
