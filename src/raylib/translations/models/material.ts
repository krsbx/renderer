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
    countStruct.$memory
  );

  const count = countStruct.getValue(0, 'i32');

  if (!materialsPtr || count === 0) {
    return [];
  }

  return CStruct.readArray(Material, materialsPtr, count);
}

export function loadMaterialDefault(this: RayLib) {
  const material = Material.create();

  this.symbols.LoadMaterialDefault(material.$memory);

  return material;
}

export function isMaterialValid(this: RayLib, material: Material) {
  return this.symbols.IsMaterialValid(material.$memory);
}

export function unloadMaterial(this: RayLib, material: Material) {
  this.symbols.UnloadMaterial(material.$memory);
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
    options.material.$memory,
    options.mapType,
    options.texture.$memory
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
    options.model.$memory,
    options.meshId,
    options.materialId
  );
}
