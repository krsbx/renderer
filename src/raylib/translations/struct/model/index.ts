import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { CStruct } from '@/utility/cstruct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { BoneInfo } from '../bone-info';
import { Material } from '../material';
import { Matrix } from '../matrix';
import { Mesh } from '../mesh';
import { Transform } from '../transform';
import { ByteOffset } from './constant';

export class Model extends BaseStruct {
  public static override readonly BYTE_SIZE = 120;

  public readonly transform: Matrix;

  private $meshes: Mesh[] | null = null;
  private $materials: Material[] | null = null;
  private $meshMaterial: Int32Array | null = null;
  private $bones: BoneInfo[] | null = null;
  private $bindPose: Transform[] | null = null;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.transform = new Matrix(
      this.$memory.subarray(
        ByteOffset.transform,
        ByteOffset.transform + Matrix.BYTE_SIZE
      )
    );
  }

  public get meshCount() {
    return this.$view.getInt32(ByteOffset.meshCount, true);
  }

  public set meshCount(value: number) {
    this.$view.setInt32(ByteOffset.meshCount, value, true);
  }

  public get materialCount() {
    return this.$view.getInt32(ByteOffset.materialCount, true);
  }

  public set materialCount(value: number) {
    this.$view.setInt32(ByteOffset.materialCount, value, true);
  }

  // meshes: Mesh* (meshCount)
  public get meshes_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.meshes, true)) as Pointer;
  }

  public set meshes_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.meshes, BigInt(value), true);
    this.$meshes = null;
  }

  public get meshes() {
    if (this.$meshes) return this.$meshes;

    const ptr = this.meshes_ptr;

    if (!ptr) return null;

    this.$meshes = CStruct.readArray(Mesh, ptr, this.meshCount);

    return this.$meshes;
  }

  // materials: Material* (materialCount)
  public get materials_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.materials, true)
    ) as Pointer;
  }

  public set materials_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.materials, BigInt(value), true);
    this.$materials = null;
  }

  public get materials() {
    if (this.$materials) return this.$materials;

    const ptr = this.materials_ptr;

    if (!ptr) return null;

    this.$materials = CStruct.readArray(Material, ptr, this.materialCount);

    return this.$materials;
  }

  // meshMaterial: int* (meshCount)
  public get meshMaterial_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.meshMaterial, true)
    ) as Pointer;
  }

  public set meshMaterial_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.meshMaterial, BigInt(value), true);
    this.$meshMaterial = null;
  }

  public get meshMaterial() {
    if (this.$meshMaterial) return this.$meshMaterial;

    const ptr = this.meshMaterial_ptr;

    if (!ptr) return null;

    const buffer = toArrayBuffer(ptr, 0, this.meshCount * 4);
    this.$meshMaterial = new Int32Array(buffer);

    return this.$meshMaterial;
  }

  public get boneCount() {
    return this.$view.getInt32(ByteOffset.boneCount, true);
  }

  public set boneCount(value: number) {
    this.$view.setInt32(ByteOffset.boneCount, value, true);
  }

  // bones: BoneInfo* (boneCount)
  public get bones_ptr() {
    return Number(this.$view.getBigUint64(ByteOffset.bones, true)) as Pointer;
  }

  public set bones_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.bones, BigInt(value), true);
    this.$bones = null;
  }

  public get bones() {
    if (this.$bones) return this.$bones;

    const ptr = this.bones_ptr;

    if (!ptr) return null;

    this.$bones = CStruct.readArray(BoneInfo, ptr, this.boneCount);

    return this.$bones;
  }

  // bindPose: Transform* (boneCount)
  public get bindPose_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.bindPose, true)
    ) as Pointer;
  }

  public set bindPose_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.bindPose, BigInt(value), true);
    this.$bindPose = null;
  }

  public get bindPose() {
    if (this.$bindPose) return this.$bindPose;

    const ptr = this.bindPose_ptr;

    if (!ptr) return null;

    this.$bindPose = CStruct.readArray(Transform, ptr, this.boneCount);

    return this.$bindPose;
  }
}
