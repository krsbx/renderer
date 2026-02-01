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

  this.symbols.LoadModel(stringToCString(fileName).ptr, model.$memory);

  return model;
}

export function loadModelFromMesh(this: RayLib, mesh: Mesh) {
  const model = Model.create();

  this.symbols.LoadModelFromMesh(mesh.$memory, model.$memory);

  return model;
}

export function isModelValid(this: RayLib, model: Model) {
  return this.symbols.IsModelValid(model.$memory);
}

export function unloadModel(this: RayLib, model: Model) {
  this.symbols.UnloadModel(model.$memory);
}

export function getModelBoundingBox(this: RayLib, model: Model) {
  const box = BoundingBox.create();

  this.symbols.GetModelBoundingBox(model.$memory, box.$memory);

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
    options.model.$memory,
    options.position.$memory,
    options.scale,
    options.tint.$memory
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
    options.model.$memory,
    options.position.$memory,
    options.rotationAxis.$memory,
    options.rotationAngle,
    options.scale.$memory,
    options.tint.$memory
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
    options.model.$memory,
    options.position.$memory,
    options.scale,
    options.tint.$memory
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
    options.model.$memory,
    options.position.$memory,
    options.rotationAxis.$memory,
    options.rotationAngle,
    options.scale.$memory,
    options.tint.$memory
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
    options.model.$memory,
    options.position.$memory,
    options.scale,
    options.tint.$memory
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
    options.model.$memory,
    options.position.$memory,
    options.rotationAxis.$memory,
    options.rotationAngle,
    options.scale.$memory,
    options.tint.$memory
  );
}

export function drawBoundingBox(
  this: RayLib,
  options: {
    box: BoundingBox;
    color: Color;
  }
) {
  this.symbols.DrawBoundingBox(options.box.$memory, options.color.$memory);
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
    options.camera.$memory,
    options.texture.$memory,
    options.position.$memory,
    options.scale,
    options.tint.$memory
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
    options.camera.$memory,
    options.texture.$memory,
    options.source.$memory,
    options.position.$memory,
    options.size.$memory,
    options.tint.$memory
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
    options.camera.$memory,
    options.texture.$memory,
    options.source.$memory,
    options.position.$memory,
    options.up.$memory,
    options.size.$memory,
    options.origin.$memory,
    options.rotation,
    options.tint.$memory
  );
}
