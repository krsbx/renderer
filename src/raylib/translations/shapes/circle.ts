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
    options.color.$memory
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
    options.center.$memory,
    options.radius,
    options.startAngle,
    options.endAngle,
    options.segments,
    options.color.$memory
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
    options.center.$memory,
    options.radius,
    options.startAngle,
    options.endAngle,
    options.segments,
    options.color.$memory
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
    options.inner.$memory,
    options.outer.$memory
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
    options.center.$memory,
    options.radius,
    options.color.$memory
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
    options.color.$memory
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
    options.center.$memory,
    options.radius,
    options.color.$memory
  );
}
