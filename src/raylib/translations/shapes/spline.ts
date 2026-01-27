import type { RayLib } from '@/raylib';
import { Vector2, type Color } from '../struct';
import { generateVector2Points } from '../utility/common';

export function drawSplineLinear(
  this: RayLib,
  options: {
    points: Vector2[];
    thick: number;
    color: Color;
  }
) {
  const points = generateVector2Points(options.points);

  this.symbols.DrawSplineLinear(
    points.$address,
    options.points.length,
    options.thick,
    options.color.$address
  );
}

export function drawSplineBasis(
  this: RayLib,
  options: {
    points: Vector2[];
    thick: number;
    color: Color;
  }
) {
  const points = generateVector2Points(options.points);

  this.symbols.DrawSplineBasis(
    points.$address,
    options.points.length,
    options.thick,
    options.color.$address
  );
}

export function drawSplineCatmullRom(
  this: RayLib,
  options: {
    points: Vector2[];
    thick: number;
    color: Color;
  }
) {
  const points = generateVector2Points(options.points);

  this.symbols.DrawSplineCatmullRom(
    points.$address,
    options.points.length,
    options.thick,
    options.color.$address
  );
}

export function drawSplineBezierQuadratic(
  this: RayLib,
  options: {
    points: Vector2[];
    thick: number;
    color: Color;
  }
) {
  const points = generateVector2Points(options.points);

  this.symbols.DrawSplineBezierQuadratic(
    points.$address,
    options.points.length,
    options.thick,
    options.color.$address
  );
}

export function drawSplineBezierCubic(
  this: RayLib,
  options: {
    points: Vector2[];
    thick: number;
    color: Color;
  }
) {
  const points = generateVector2Points(options.points);

  this.symbols.DrawSplineBezierCubic(
    points.$address,
    options.points.length,
    options.thick,
    options.color.$address
  );
}

export function drawSplineSegmentLinear(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    thick: number;
    color: Color;
  }
) {
  this.symbols.DrawSplineSegmentLinear(
    options.p1.$address,
    options.p2.$address,
    options.thick,
    options.color.$address
  );
}

export function drawSplineSegmentBasis(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
    p4: Vector2;
    thick: number;
    color: Color;
  }
) {
  this.symbols.DrawSplineSegmentBasis(
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.p4.$address,
    options.thick,
    options.color.$address
  );
}

export function drawSplineSegmentCatmullRom(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
    p4: Vector2;
    thick: number;
    color: Color;
  }
) {
  this.symbols.DrawSplineSegmentCatmullRom(
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.p4.$address,
    options.thick,
    options.color.$address
  );
}

export function drawSplineSegmentBezierQuadratic(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
    thick: number;
    color: Color;
  }
) {
  this.symbols.DrawSplineSegmentBezierQuadratic(
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.thick,
    options.color.$address
  );
}

export function drawSplineSegmentBezierCubic(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
    p4: Vector2;
    thick: number;
    color: Color;
  }
) {
  this.symbols.DrawSplineSegmentBezierCubic(
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.p4.$address,
    options.thick,
    options.color.$address
  );
}

export function getSplinePointLinear(
  this: RayLib,
  options: {
    startPos: Vector2;
    endPos: Vector2;
    t: number;
  }
) {
  const point = new Vector2(Vector2.allocMemory());

  this.symbols.GetSplinePointLinear(
    options.startPos.$address,
    options.endPos.$address,
    options.t,
    point.$address
  );

  return point;
}

export function getSplinePointBasis(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
    p4: Vector2;
    t: number;
  }
) {
  const point = new Vector2(Vector2.allocMemory());

  this.symbols.GetSplinePointBasis(
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.p4.$address,
    options.t,
    point.$address
  );

  return point;
}

export function getSplinePointCatmullRom(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
    p4: Vector2;
    t: number;
  }
) {
  const point = new Vector2(Vector2.allocMemory());

  this.symbols.GetSplinePointCatmullRom(
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.p4.$address,
    options.t,
    point.$address
  );

  return point;
}

export function getSplinePointBezierQuad(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
    t: number;
  }
) {
  const point = new Vector2(Vector2.allocMemory());

  this.symbols.GetSplinePointBezierQuad(
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.t,
    point.$address
  );

  return point;
}

export function getSplinePointBezierCubic(
  this: RayLib,
  options: {
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
    p4: Vector2;
    t: number;
  }
) {
  const point = new Vector2(Vector2.allocMemory());

  this.symbols.GetSplinePointBezierCubic(
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.p4.$address,
    options.t,
    point.$address
  );

  return point;
}
