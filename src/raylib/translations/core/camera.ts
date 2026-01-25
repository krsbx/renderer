import type { RayLib } from '@/raylib';
import type { Camera, Vector3 } from '../struct';

export function updateCamera(
  this: RayLib,
  options: {
    camera: Camera;
    mode: number;
  }
) {
  this.symbols.UpdateCamera(options.camera.$address, options.mode);
}

export function updateCameraPro(
  this: RayLib,
  options: {
    camera: Camera;
    movement: Vector3;
    rotation: Vector3;
    zoom: number;
  }
) {
  this.symbols.UpdateCameraPro(
    options.camera.$address,
    options.movement.$address,
    options.rotation.$address,
    options.zoom
  );
}
