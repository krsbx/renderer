import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { BoundingBox, Vector3 } from '../struct';
import { Image } from '../struct/image';
import { Material } from '../struct/material';
import { Matrix } from '../struct/matrix';
import { Mesh } from '../struct/mesh';

export function uploadMesh(
  this: RayLib,
  options: {
    mesh: Mesh;
    dynamic: boolean;
  }
) {
  this.symbols.UploadMesh(options.mesh.$memory, options.dynamic);
}

export function updateMeshBuffer(
  this: RayLib,
  options: {
    mesh: Mesh;
    index: number;
    data: Uint8Array;
    offset: number;
  }
) {
  this.symbols.UpdateMeshBuffer(
    options.mesh.$memory,
    options.index,
    options.data,
    options.data.byteLength,
    options.offset
  );
}

export function unloadMesh(this: RayLib, mesh: Mesh) {
  this.symbols.UnloadMesh(mesh.$memory);
}

export function drawMesh(
  this: RayLib,
  options: {
    mesh: Mesh;
    material: Material;
    transform: Matrix;
  }
) {
  this.symbols.DrawMesh(
    options.mesh.$memory,
    options.material.$memory,
    options.transform.$memory
  );
}

export function drawMeshInstanced(
  this: RayLib,
  options: {
    mesh: Mesh;
    material: Material;
    transforms: Matrix[];
  }
) {
  const { buffer: transforms } = CStruct.writeArray(
    options.transforms,
    Matrix.BYTE_SIZE
  );

  this.symbols.DrawMeshInstanced(
    options.mesh.$memory,
    options.material.$memory,
    transforms,
    options.transforms.length
  );
}

export function getMeshBoundingBox(this: RayLib, mesh: Mesh) {
  const box = BoundingBox.create();

  this.symbols.GetMeshBoundingBox(mesh.$memory, box.$memory);

  return box;
}

export function genMeshTangents(this: RayLib, mesh: Mesh) {
  this.symbols.GenMeshTangents(mesh.$memory);
}

export function exportMesh(
  this: RayLib,
  options: {
    mesh: Mesh;
    fileName: string;
  }
) {
  return this.symbols.ExportMesh(
    options.mesh.$memory,
    stringToCString(options.fileName).ptr
  );
}

export function exportMeshAsCode(
  this: RayLib,
  options: {
    mesh: Mesh;
    fileName: string;
  }
) {
  return this.symbols.ExportMeshAsCode(
    options.mesh.$memory,
    stringToCString(options.fileName).ptr
  );
}

// Mesh generation functions

export function genMeshPoly(
  this: RayLib,
  options: {
    sides: number;
    radius: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshPoly(options.sides, options.radius, mesh.$memory);

  return mesh;
}

export function genMeshPlane(
  this: RayLib,
  options: {
    width: number;
    length: number;
    resX: number;
    resZ: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshPlane(
    options.width,
    options.length,
    options.resX,
    options.resZ,
    mesh.$memory
  );

  return mesh;
}

export function genMeshCube(
  this: RayLib,
  options: {
    width: number;
    height: number;
    length: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshCube(
    options.width,
    options.height,
    options.length,
    mesh.$memory
  );

  return mesh;
}

export function genMeshSphere(
  this: RayLib,
  options: {
    radius: number;
    rings: number;
    slices: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshSphere(
    options.radius,
    options.rings,
    options.slices,
    mesh.$memory
  );

  return mesh;
}

export function genMeshHemiSphere(
  this: RayLib,
  options: {
    radius: number;
    rings: number;
    slices: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshHemiSphere(
    options.radius,
    options.rings,
    options.slices,
    mesh.$memory
  );

  return mesh;
}

export function genMeshCylinder(
  this: RayLib,
  options: {
    radius: number;
    height: number;
    slices: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshCylinder(
    options.radius,
    options.height,
    options.slices,
    mesh.$memory
  );

  return mesh;
}

export function genMeshCone(
  this: RayLib,
  options: {
    radius: number;
    height: number;
    slices: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshCone(
    options.radius,
    options.height,
    options.slices,
    mesh.$memory
  );

  return mesh;
}

export function genMeshTorus(
  this: RayLib,
  options: {
    radius: number;
    size: number;
    radSeg: number;
    sides: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshTorus(
    options.radius,
    options.size,
    options.radSeg,
    options.sides,
    mesh.$memory
  );

  return mesh;
}

export function genMeshKnot(
  this: RayLib,
  options: {
    radius: number;
    size: number;
    radSeg: number;
    sides: number;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshKnot(
    options.radius,
    options.size,
    options.radSeg,
    options.sides,
    mesh.$memory
  );

  return mesh;
}

export function genMeshHeightmap(
  this: RayLib,
  options: {
    heightmap: Image;
    size: Vector3;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshHeightmap(
    options.heightmap.$memory,
    options.size.$memory,
    mesh.$memory
  );

  return mesh;
}

export function genMeshCubicmap(
  this: RayLib,
  options: {
    cubicmap: Image;
    cubeSize: Vector3;
  }
) {
  const mesh = Mesh.create();

  this.symbols.GenMeshCubicmap(
    options.cubicmap.$memory,
    options.cubeSize.$memory,
    mesh.$memory
  );

  return mesh;
}
