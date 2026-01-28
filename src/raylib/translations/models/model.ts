import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import {
  BoundingBox,
  Camera3D,
  Color,
  Rectangle,
  Texture2D,
  Vector2,
  Vector3,
} from '../struct';
import { Mesh } from '../struct/mesh';
import { Model } from '../struct/model';

export function loadModel(this: RayLib, fileName: string) {
  const model = Model.create();

  this.symbols.LoadModel(stringToCString(fileName).ptr, model.$address);

  return model;
}

export function loadModelFromMesh(this: RayLib, mesh: Mesh) {
  const model = Model.create();

  this.symbols.LoadModelFromMesh(mesh.$address, model.$address);

  return model;
}

export function isModelValid(this: RayLib, model: Model) {
  return this.symbols.IsModelValid(model.$address);
}

export function unloadModel(this: RayLib, model: Model) {
  this.symbols.UnloadModel(model.$address);
}

export function getModelBoundingBox(this: RayLib, model: Model) {
  const box = BoundingBox.create();

  this.symbols.GetModelBoundingBox(model.$address, box.$address);

  return box;
}

export function drawModel(
  this: RayLib,
  options: {
    model: Model;
    position: Vector3;
    scale: number;
    tint: Color;
  }
) {
  this.symbols.DrawModel(
    options.model.$address,
    options.position.$address,
    options.scale,
    options.tint.$address
  );
}

export function drawModelEx(
  this: RayLib,
  options: {
    model: Model;
    position: Vector3;
    rotationAxis: Vector3;
    rotationAngle: number;
    scale: Vector3;
    tint: Color;
  }
) {
  this.symbols.DrawModelEx(
    options.model.$address,
    options.position.$address,
    options.rotationAxis.$address,
    options.rotationAngle,
    options.scale.$address,
    options.tint.$address
  );
}

export function drawModelWires(
  this: RayLib,
  options: {
    model: Model;
    position: Vector3;
    scale: number;
    tint: Color;
  }
) {
  this.symbols.DrawModelWires(
    options.model.$address,
    options.position.$address,
    options.scale,
    options.tint.$address
  );
}

export function drawModelWiresEx(
  this: RayLib,
  options: {
    model: Model;
    position: Vector3;
    rotationAxis: Vector3;
    rotationAngle: number;
    scale: Vector3;
    tint: Color;
  }
) {
  this.symbols.DrawModelWiresEx(
    options.model.$address,
    options.position.$address,
    options.rotationAxis.$address,
    options.rotationAngle,
    options.scale.$address,
    options.tint.$address
  );
}

export function drawModelPoints(
  this: RayLib,
  options: {
    model: Model;
    position: Vector3;
    scale: number;
    tint: Color;
  }
) {
  this.symbols.DrawModelPoints(
    options.model.$address,
    options.position.$address,
    options.scale,
    options.tint.$address
  );
}

export function drawModelPointsEx(
  this: RayLib,
  options: {
    model: Model;
    position: Vector3;
    rotationAxis: Vector3;
    rotationAngle: number;
    scale: Vector3;
    tint: Color;
  }
) {
  this.symbols.DrawModelPointsEx(
    options.model.$address,
    options.position.$address,
    options.rotationAxis.$address,
    options.rotationAngle,
    options.scale.$address,
    options.tint.$address
  );
}

export function drawBoundingBox(
  this: RayLib,
  options: {
    box: BoundingBox;
    color: Color;
  }
) {
  this.symbols.DrawBoundingBox(options.box.$address, options.color.$address);
}

export function drawBillboard(
  this: RayLib,
  options: {
    camera: Camera3D;
    texture: Texture2D;
    position: Vector3;
    scale: number;
    tint: Color;
  }
) {
  this.symbols.DrawBillboard(
    options.camera.$address,
    options.texture.$address,
    options.position.$address,
    options.scale,
    options.tint.$address
  );
}

export function drawBillboardRec(
  this: RayLib,
  options: {
    camera: Camera3D;
    texture: Texture2D;
    source: Rectangle;
    position: Vector3;
    size: Vector2;
    tint: Color;
  }
) {
  this.symbols.DrawBillboardRec(
    options.camera.$address,
    options.texture.$address,
    options.source.$address,
    options.position.$address,
    options.size.$address,
    options.tint.$address
  );
}

export function drawBillboardPro(
  this: RayLib,
  options: {
    camera: Camera3D;
    texture: Texture2D;
    source: Rectangle;
    position: Vector3;
    up: Vector3;
    size: Vector2;
    origin: Vector2;
    rotation: number;
    tint: Color;
  }
) {
  this.symbols.DrawBillboardPro(
    options.camera.$address,
    options.texture.$address,
    options.source.$address,
    options.position.$address,
    options.up.$address,
    options.size.$address,
    options.origin.$address,
    options.rotation,
    options.tint.$address
  );
}
