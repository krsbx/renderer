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
    options.center1.$address,
    options.radius1,
    options.center2.$address,
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
    options.box1.$address,
    options.box2.$address
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
    options.box.$address,
    options.center.$address,
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
  const collision = new RayCollision(RayCollision.allocMemory());

  this.symbols.GetRayCollisionSphere(
    options.ray.$address,
    options.center.$address,
    options.radius,
    collision.$address
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
  const collision = new RayCollision(RayCollision.allocMemory());

  this.symbols.GetRayCollisionBox(
    options.ray.$address,
    options.box.$address,
    collision.$address
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
  const collision = new RayCollision(RayCollision.allocMemory());

  this.symbols.GetRayCollisionMesh(
    options.ray.$address,
    options.mesh.$address,
    options.transform.$address,
    collision.$address
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
  const collision = new RayCollision(RayCollision.allocMemory());

  this.symbols.GetRayCollisionTriangle(
    options.ray.$address,
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    collision.$address
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
  const collision = new RayCollision(RayCollision.allocMemory());

  this.symbols.GetRayCollisionQuad(
    options.ray.$address,
    options.p1.$address,
    options.p2.$address,
    options.p3.$address,
    options.p4.$address,
    collision.$address
  );

  return collision;
}
