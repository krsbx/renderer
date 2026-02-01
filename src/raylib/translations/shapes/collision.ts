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
    options.rec1.$memory,
    options.rec2.$memory
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
    options.center1.$memory,
    options.radius1,
    options.center2.$memory,
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
    options.center.$memory,
    options.radius,
    options.rec.$memory
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
    options.center.$memory,
    options.radius,
    options.p1.$memory,
    options.p2.$memory
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
    options.point.$memory,
    options.rec.$memory
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
    options.point.$memory,
    options.center.$memory,
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
    options.point.$memory,
    options.p1.$memory,
    options.p2.$memory,
    options.p3.$memory
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
    options.point.$memory,
    options.p1.$memory,
    options.p2.$memory,
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
    options.point.$memory,
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
    options.startPos1.$memory,
    options.endPos1.$memory,
    options.startPos2.$memory,
    options.endPos2.$memory,
    collisionPoint.$memory
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
    options.rec1.$memory,
    options.rec2.$memory,
    rec.$memory
  );

  return rec;
}
