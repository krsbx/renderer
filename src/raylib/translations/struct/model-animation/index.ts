import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { BoneInfo } from '../bone-info';
import { Transform } from '../transform';
import { ByteOffset } from './constant';

export class ModelAnimation {
  public static readonly BYTE_SIZE = 56;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  // Cached arrays
  private $bones: BoneInfo[] | null = null;
  private $bonesMemory: Uint8Array | null = null;
  private $framePoses: Transform[][] | null = null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, ModelAnimation.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    return new Uint8Array(this.BYTE_SIZE);
  }

  public static create(data?: StructInit<ModelAnimation>) {
    const instance = new ModelAnimation(ModelAnimation.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get boneCount() {
    return this.$view.getInt32(ByteOffset.boneCount, true);
  }

  public set boneCount(value: number) {
    this.$view.setInt32(ByteOffset.boneCount, value, true);
  }

  public get frameCount() {
    return this.$view.getInt32(ByteOffset.frameCount, true);
  }

  public set frameCount(value: number) {
    this.$view.setInt32(ByteOffset.frameCount, value, true);
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

  // framePoses: Transform** (frameCount x boneCount)
  public get framePoses_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.framePoses, true)
    ) as Pointer;
  }

  public set framePoses_ptr(value: Pointer) {
    this.$view.setBigUint64(
      ByteOffset.framePoses,
      BigInt(value as number),
      true
    );
    this.$framePoses = null;
  }

  public get framePoses() {
    const ptr = this.framePoses_ptr;
    if (!ptr) return null;
    if (this.$framePoses) return this.$framePoses;

    const frameCount = this.frameCount;
    const boneCount = this.boneCount;

    // Read array of pointers (Transform**)
    const pointerArrayBuffer = toArrayBuffer(ptr, 0, frameCount * 8);
    const pointerArrayView = new DataView(pointerArrayBuffer);

    this.$framePoses = new Proxy(new Array(frameCount), {
      get: (target, prop) => {
        const frameIndex = Number(prop);

        if (Number.isNaN(frameIndex)) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];
          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (frameIndex < 0 || frameIndex >= frameCount) {
          throw new RangeError(`Frame index out of range: ${frameIndex}`);
        }

        // Get the Transform* for this frame
        const framePtr = Number(
          pointerArrayView.getBigUint64(frameIndex * 8, true)
        ) as Pointer;
        if (!framePtr) return null;

        // Read the Transform array for this frame
        const totalSize = boneCount * Transform.BYTE_SIZE;
        const buffer = toArrayBuffer(framePtr, 0, totalSize);
        const frameMemory = new Uint8Array(buffer);

        return new Proxy(new Array(boneCount), {
          get: (innerTarget, innerProp) => {
            const boneIndex = Number(innerProp);

            if (Number.isNaN(boneIndex)) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const val = (innerTarget as any)[innerProp];
              return typeof val === 'function' ? val.bind(innerTarget) : val;
            }

            if (boneIndex < 0 || boneIndex >= boneCount) {
              throw new RangeError(`Bone index out of range: ${boneIndex}`);
            }

            const offset = boneIndex * Transform.BYTE_SIZE;
            return new Transform(
              frameMemory.subarray(offset, offset + Transform.BYTE_SIZE)
            );
          },
          set: () => false,
        });
      },
      set: () => false,
    }) as never;

    return this.$framePoses;
  }

  public get name() {
    const bytes = this.$memory.subarray(ByteOffset.name, ByteOffset.name + 32);
    const nullIndex = bytes.indexOf(0);
    const validBytes = nullIndex === -1 ? bytes : bytes.subarray(0, nullIndex);
    return new TextDecoder().decode(validBytes);
  }

  public set name(value: string) {
    const bytes = new TextEncoder().encode(value);
    const dest = this.$memory.subarray(ByteOffset.name, ByteOffset.name + 32);
    dest.fill(0);
    dest.set(bytes.subarray(0, Math.min(bytes.length, 31)));
  }
}
