import type { RayLib } from '@/raylib';
import { stringToCString } from '@/utility/common';
import { CStruct } from '@/utility/cstruct';
import { Texture2D } from '../struct';
import { Material } from '../struct/material';
import { Model } from '../struct/model';

export function loadMaterials(this: RayLib, fileName: string) {
  const countStruct = new CStruct({ length: 4 });
  const materialsPtr = this.symbols.LoadMaterials(
    stringToCString(fileName).ptr,
    countStruct.$address
  );

  const count = countStruct.getValue(0, 'i32');

  if (!materialsPtr || count === 0) {
    return [];
  }

  return CStruct.readArray(Material, materialsPtr, count);
}

export function loadMaterialDefault(this: RayLib) {
  const material = new Material(Material.allocMemory());

  this.symbols.LoadMaterialDefault(material.$address);

  return material;
}

export function isMaterialValid(this: RayLib, material: Material) {
  return this.symbols.IsMaterialValid(material.$address);
}

export function unloadMaterial(this: RayLib, material: Material) {
  this.symbols.UnloadMaterial(material.$address);
}

export function setMaterialTexture(
  this: RayLib,
  options: {
    material: Material;
    mapType: number;
    texture: Texture2D;
  }
) {
  this.symbols.SetMaterialTexture(
    options.material.$address,
    options.mapType,
    options.texture.$address
  );
}

export function setModelMeshMaterial(
  this: RayLib,
  options: {
    model: Model;
    meshId: number;
    materialId: number;
  }
) {
  this.symbols.SetModelMeshMaterial(
    options.model.$address,
    options.meshId,
    options.materialId
  );
}
