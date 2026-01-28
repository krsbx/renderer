import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { BoneInfo } from '../bone-info';
import { Material } from '../material';
import { Matrix } from '../matrix';
import { Mesh } from '../mesh';
import { Transform } from '../transform';
import { ByteOffset } from './constant';

export class Model {
  public static readonly BYTE_SIZE = 120;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly transform: Matrix;

  // Cached arrays
  private $meshes: Mesh[] | null = null;
  private $meshesMemory: Uint8Array | null = null;
  private $materials: Material[] | null = null;
  private $materialsMemory: Uint8Array | null = null;
  private $meshMaterial: number[] | null = null;
  private $meshMaterialView: DataView | null = null;
  private $bones: BoneInfo[] | null = null;
  private $bonesMemory: Uint8Array | null = null;
  private $bindPose: Transform[] | null = null;
  private $bindPoseMemory: Uint8Array | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Model.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.transform = new Matrix(
      this.$memory.subarray(
        ByteOffset.transform,
        ByteOffset.transform + Matrix.BYTE_SIZE
      )
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
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
    this.$view.setBigUint64(ByteOffset.meshes, BigInt(value as number), true);
    this.$meshes = null;
    this.$meshesMemory = null;
  }

  public get meshes() {
    const ptr = this.meshes_ptr;
    if (!ptr) return null;
    if (this.$meshes) return this.$meshes;

    const count = this.meshCount;
    const totalSize = count * Mesh.BYTE_SIZE;
    const buffer = toArrayBuffer(ptr, 0, totalSize);
    this.$meshesMemory = new Uint8Array(buffer);

    this.$meshes = new Proxy(new Array(count), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = index * Mesh.BYTE_SIZE;
        return new Mesh(
          this.$meshesMemory!.subarray(offset, offset + Mesh.BYTE_SIZE)
        );
      },
      set: () => false,
    }) as never;

    return this.$meshes;
  }

  // materials: Material* (materialCount)
  public get materials_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.materials, true)
    ) as Pointer;
  }

  public set materials_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.materials,
      BigInt(value as number),
      true
    );
    this.$materials = null;
    this.$materialsMemory = null;
  }

  public get materials() {
    const ptr = this.materials_ptr;
    if (!ptr) return null;
    if (this.$materials) return this.$materials;

    const count = this.materialCount;
    const totalSize = count * Material.BYTE_SIZE;
    const buffer = toArrayBuffer(ptr, 0, totalSize);
    this.$materialsMemory = new Uint8Array(buffer);

    this.$materials = new Proxy(new Array(count), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = index * Material.BYTE_SIZE;
        return new Material(
          this.$materialsMemory!.subarray(offset, offset + Material.BYTE_SIZE)
        );
      },
      set: () => false,
    }) as never;

    return this.$materials;
  }

  // meshMaterial: int* (meshCount)
  public get meshMaterial_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.meshMaterial, true)
    ) as Pointer;
  }

  public set meshMaterial_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.meshMaterial,
      BigInt(value as number),
      true
    );
    this.$meshMaterial = null;
    this.$meshMaterialView = null;
  }

  public get meshMaterial() {
    const ptr = this.meshMaterial_ptr;
    if (!ptr) return null;
    if (this.$meshMaterial) return this.$meshMaterial;

    const length = this.meshCount;
    const buffer = toArrayBuffer(ptr, 0, length * 4);
    this.$meshMaterialView = new DataView(buffer);

    this.$meshMaterial = new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);
        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }
        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }
        return this.$meshMaterialView!.getInt32(index * 4, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);
        if (Number.isNaN(index) || index < 0 || index >= length) return false;
        this.$meshMaterialView!.setInt32(index * 4, value, true);
        return true;
      },
    }) as never;

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
    this.$view.setBigUint64(ByteOffset.bones, BigInt(value as number), true);
    this.$bones = null;
    this.$bonesMemory = null;
  }

  public get bones() {
    const ptr = this.bones_ptr;
    if (!ptr) return null;
    if (this.$bones) return this.$bones;

    const count = this.boneCount;
    const totalSize = count * BoneInfo.BYTE_SIZE;
    const buffer = toArrayBuffer(ptr, 0, totalSize);
    this.$bonesMemory = new Uint8Array(buffer);

    this.$bones = new Proxy(new Array(count), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = index * BoneInfo.BYTE_SIZE;
        return new BoneInfo(
          this.$bonesMemory!.subarray(offset, offset + BoneInfo.BYTE_SIZE)
        );
      },
      set: () => false,
    }) as never;

    return this.$bones;
  }

  // bindPose: Transform* (boneCount)
  public get bindPose_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.bindPose, true)
    ) as Pointer;
  }

  public set bindPose_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.bindPose, BigInt(value as number), true);
    this.$bindPose = null;
    this.$bindPoseMemory = null;
  }

  public get bindPose() {
    const ptr = this.bindPose_ptr;
    if (!ptr) return null;
    if (this.$bindPose) return this.$bindPose;

    const count = this.boneCount;
    const totalSize = count * Transform.BYTE_SIZE;
    const buffer = toArrayBuffer(ptr, 0, totalSize);
    this.$bindPoseMemory = new Uint8Array(buffer);

    this.$bindPose = new Proxy(new Array(count), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = index * Transform.BYTE_SIZE;
        return new Transform(
          this.$bindPoseMemory!.subarray(offset, offset + Transform.BYTE_SIZE)
        );
      },
      set: () => false,
    }) as never;

    return this.$bindPose;
  }
}
