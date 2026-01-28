import type { RayLib } from '@/raylib';
import { CStruct } from '@/utility/cstruct';
import { Rectangle, Vector2 } from '../struct';

export function checkCollisionRecs(
  this: RayLib,
  options: {
    rec1: Rectangle;
    rec2: Rectangle;
  }
) {
  return this.symbols.CheckCollisionRecs(
    options.rec1.$address,
    options.rec2.$address
  );
}

export function checkCollisionCircles(
  this: RayLib,
  options: {
    center1: Vector2;
    radius1: number;
    center2: Vector2;
    radius2: number;
  }
) {
  return this.symbols.CheckCollisionCircles(
    options.center1.$address,
    options.radius1,
    options.center2.$address,
    options.radius2
  );
}

export function checkCollisionCircleRec(
  this: RayLib,
  options: {
    center: Vector2;
    radius: number;
    rec: Rectangle;
  }
) {
  return this.symbols.CheckCollisionCircleRec(
    options.center.$address,
    options.radius,
    options.rec.$address
  );
}

export function checkCollisionCircleLine(
  this: RayLib,
  options: {
    center: Vector2;
    radius: number;
    p1: Vector2;
    p2: Vector2;
  }
) {
  return this.symbols.CheckCollisionCircleLine(
    options.center.$address,
    options.radius,
    options.p1.$address,
    options.p2.$address
  );
}

export function checkCollisionPointRec(
  this: RayLib,
  options: {
    point: Vector2;
    rec: Rectangle;
  }
) {
  return this.symbols.CheckCollisionPointRec(
    options.point.$address,
    options.rec.$address
  );
}

export function checkCollisionPointCircle(
  this: RayLib,
  options: {
    point: Vector2;
    center: Vector2;
    radius: number;
  }
) {
  return this.symbols.CheckCollisionPointCircle(
    options.point.$address,
    options.center.$address,
    options.radius
  );
}

export function checkCollisionPointTriangle(
  this: RayLib,
  options: {
    point: Vector2;
    p1: Vector2;
    p2: Vector2;
    p3: Vector2;
  }
) {
  return this.symbols.CheckCollisionPointTriangle(
    options.point.$address,
    options.p1.$address,
    options.p2.$address,
    options.p3.$address
  );
}

export function checkCollisionPointLine(
  this: RayLib,
  options: {
    point: Vector2;
    p1: Vector2;
    p2: Vector2;
    threshold: number;
  }
) {
  return this.symbols.CheckCollisionPointLine(
    options.point.$address,
    options.p1.$address,
    options.p2.$address,
    options.threshold
  );
}

export function checkCollisionPointPoly(
  this: RayLib,
  options: {
    point: Vector2;
    points: Vector2[];
  }
) {
  const { buffer: points } = CStruct.writeArray(
    options.points,
    Vector2.BYTE_SIZE
  );

  return this.symbols.CheckCollisionPointPoly(
    options.point.$address,
    points,
    options.points.length
  );
}

export function checkCollisionLines(
  this: RayLib,
  options: {
    startPos1: Vector2;
    endPos1: Vector2;
    startPos2: Vector2;
    endPos2: Vector2;
  }
) {
  const collisionPoint = Vector2.create();

  const collide = this.symbols.CheckCollisionLines(
    options.startPos1.$address,
    options.endPos1.$address,
    options.startPos2.$address,
    options.endPos2.$address,
    collisionPoint.$address
  );

  return {
    collide,
    collisionPoint,
  };
}

export function getCollisionRec(
  this: RayLib,
  options: {
    rec1: Rectangle;
    rec2: Rectangle;
  }
) {
  const rec = Rectangle.create();

  this.symbols.GetCollisionRec(
    options.rec1.$address,
    options.rec2.$address,
    rec.$address
  );

  return rec;
}
