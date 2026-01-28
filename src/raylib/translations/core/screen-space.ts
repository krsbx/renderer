import type { RayLib } from '@/raylib';
import { Camera, Camera2D, Ray, Vector2, Vector3 } from '../struct';
import { Matrix } from '../struct/matrix';

export function getScreenToWorldRay(
  this: RayLib,
  options: {
    position: Vector2;
    camera: Camera;
  }
) {
  const ray = Ray.create();

  this.symbols.GetScreenToWorldRay(
    options.position.$address,
    options.camera.$address,
    ray.$address
  );

  return ray;
}

export function getScreenToWorldRayEx(
  this: RayLib,
  options: {
    position: Vector2;
    camera: Camera;
    width: number;
    height: number;
  }
) {
  const ray = Ray.create();

  this.symbols.GetScreenToWorldRayEx(
    options.position.$address,
    options.camera.$address,
    options.width,
    options.height,
    ray.$address
  );

  return ray;
}

export function getWorldToScreen(
  this: RayLib,
  options: {
    position: Vector3;
    camera: Camera;
  }
) {
  const vector = Vector2.create();

  this.symbols.GetWorldToScreen(
    options.position.$address,
    options.camera.$address,
    vector.$address
  );

  return vector;
}

export function getWorldToScreenEx(
  this: RayLib,
  options: {
    position: Vector3;
    camera: Camera;
    width: number;
    height: number;
  }
) {
  const vector = Vector2.create();

  this.symbols.GetWorldToScreenEx(
    options.position.$address,
    options.camera.$address,
    options.width,
    options.height,
    vector.$address
  );

  return vector;
}

export function getWorldToScreen2D(
  this: RayLib,
  options: {
    position: Vector2;
    camera: Camera2D;
  }
) {
  const vector = Vector2.create();

  this.symbols.GetWorldToScreen2D(
    options.position.$address,
    options.camera.$address,
    vector.$address
  );

  return vector;
}

export function getScreenToWorld2D(
  this: RayLib,
  options: {
    position: Vector2;
    camera: Camera2D;
  }
) {
  const vector = Vector2.create();

  this.symbols.GetScreenToWorld2D(
    options.position.$address,
    options.camera.$address,
    vector.$address
  );

  return vector;
}

export function getCameraMatrix(this: RayLib, camera: Camera) {
  const matrix = Matrix.create();

  this.symbols.GetCameraMatrix(camera.$address, matrix.$address);

  return matrix;
}

export function getCameraMatrix2D(this: RayLib, camera: Camera2D) {
  const matrix = Matrix.create();

  this.symbols.GetCameraMatrix2D(camera.$address, matrix.$address);

  return matrix;
}
