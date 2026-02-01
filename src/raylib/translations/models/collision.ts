import type { RayLib } from '@/raylib';
import { BoundingBox, Ray, RayCollision, Vector3 } from '../struct';
import { Matrix } from '../struct/matrix';
import { Mesh } from '../struct/mesh';

export function checkCollisionSpheres(
  this: RayLib,
  options: {
    center1: Vector3;
    radius1: number;
    center2: Vector3;
    radius2: number;
  }
) {
  return this.symbols.CheckCollisionSpheres(
    options.center1.$memory,
    options.radius1,
    options.center2.$memory,
    options.radius2
  );
}

export function checkCollisionBoxes(
  this: RayLib,
  options: {
    box1: BoundingBox;
    box2: BoundingBox;
  }
) {
  return this.symbols.CheckCollisionBoxes(
    options.box1.$memory,
    options.box2.$memory
  );
}

export function checkCollisionBoxSphere(
  this: RayLib,
  options: {
    box: BoundingBox;
    center: Vector3;
    radius: number;
  }
) {
  return this.symbols.CheckCollisionBoxSphere(
    options.box.$memory,
    options.center.$memory,
    options.radius
  );
}

export function getRayCollisionSphere(
  this: RayLib,
  options: {
    ray: Ray;
    center: Vector3;
    radius: number;
  }
) {
  const collision = RayCollision.create();

  this.symbols.GetRayCollisionSphere(
    options.ray.$memory,
    options.center.$memory,
    options.radius,
    collision.$memory
  );

  return collision;
}

export function getRayCollisionBox(
  this: RayLib,
  options: {
    ray: Ray;
    box: BoundingBox;
  }
) {
  const collision = RayCollision.create();

  this.symbols.GetRayCollisionBox(
    options.ray.$memory,
    options.box.$memory,
    collision.$memory
  );

  return collision;
}

export function getRayCollisionMesh(
  this: RayLib,
  options: {
    ray: Ray;
    mesh: Mesh;
    transform: Matrix;
  }
) {
  const collision = RayCollision.create();

  this.symbols.GetRayCollisionMesh(
    options.ray.$memory,
    options.mesh.$memory,
    options.transform.$memory,
    collision.$memory
  );

  return collision;
}

export function getRayCollisionTriangle(
  this: RayLib,
  options: {
    ray: Ray;
    p1: Vector3;
    p2: Vector3;
    p3: Vector3;
  }
) {
  const collision = RayCollision.create();

  this.symbols.GetRayCollisionTriangle(
    options.ray.$memory,
    options.p1.$memory,
    options.p2.$memory,
    options.p3.$memory,
    collision.$memory
  );

  return collision;
}

export function getRayCollisionQuad(
  this: RayLib,
  options: {
    ray: Ray;
    p1: Vector3;
    p2: Vector3;
    p3: Vector3;
    p4: Vector3;
  }
) {
  const collision = RayCollision.create();

  this.symbols.GetRayCollisionQuad(
    options.ray.$memory,
    options.p1.$memory,
    options.p2.$memory,
    options.p3.$memory,
    options.p4.$memory,
    collision.$memory
  );

  return collision;
}
