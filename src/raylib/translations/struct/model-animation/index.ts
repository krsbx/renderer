import { BaseStruct } from '@/utility/base-struct';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';
import { BoneInfo } from '../bone-info';
import { Transform } from '../transform';
import { ByteOffset } from './constant';

export class ModelAnimation extends BaseStruct {
  public static override readonly BYTE_SIZE = 56;

  private $bones: BoneInfo[] | null = null;
  private $framePoses: Transform[][] | null = null;

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

  public get framePoses_ptr() {
    return Number(
      this.$view.getBigUint64(ByteOffset.framePoses, true)
    ) as Pointer;
  }

  public set framePoses_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.framePoses, BigInt(value), true);
    this.$framePoses = null;
  }

  public get framePoses() {
    if (this.$framePoses) return this.$framePoses;

    const ptr = this.framePoses_ptr;
    if (!ptr) return null;

    const frameCount = this.frameCount;
    const boneCount = this.boneCount;

    // Read array of pointers (Transform**)
    const framePointers = CStruct.readArrayPrimitive(ptr, frameCount, 'ptr');

    // Read each frame's Transform array
    this.$framePoses = framePointers.map((framePtr) =>
      CStruct.readArray(Transform, framePtr, boneCount)
    );

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
