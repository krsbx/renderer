import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';
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
  this.symbols.UploadMesh(options.mesh.$address, options.dynamic);
}

export function updateMeshBuffer(
  this: RayLib,
  options: {
    mesh: Mesh;
    index: number;
    data: Pointer | Uint8Array;
    dataSize: number;
    offset: number;
  }
) {
  this.symbols.UpdateMeshBuffer(
    options.mesh.$address,
    options.index,
    options.data,
    options.dataSize,
    options.offset
  );
}

export function unloadMesh(this: RayLib, mesh: Mesh) {
  this.symbols.UnloadMesh(mesh.$address);
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
    options.mesh.$address,
    options.material.$address,
    options.transform.$address
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
    options.mesh.$address,
    options.material.$address,
    transforms,
    options.transforms.length
  );
}

export function getMeshBoundingBox(this: RayLib, mesh: Mesh) {
  const box = BoundingBox.create();

  this.symbols.GetMeshBoundingBox(mesh.$address, box.$address);

  return box;
}

export function genMeshTangents(this: RayLib, mesh: Mesh) {
  this.symbols.GenMeshTangents(mesh.$address);
}

export function exportMesh(
  this: RayLib,
  options: {
    mesh: Mesh;
    fileName: string;
  }
) {
  return this.symbols.ExportMesh(
    options.mesh.$address,
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
    options.mesh.$address,
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

  this.symbols.GenMeshPoly(options.sides, options.radius, mesh.$address);

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
    mesh.$address
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
    mesh.$address
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
    mesh.$address
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
    mesh.$address
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
    mesh.$address
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
    mesh.$address
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
    mesh.$address
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
    mesh.$address
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
    options.heightmap.$address,
    options.size.$address,
    mesh.$address
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
    options.cubicmap.$address,
    options.cubeSize.$address,
    mesh.$address
  );

  return mesh;
}
