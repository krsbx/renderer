import type { BuildTuple } from '@/types/shared';
import { BaseStruct } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class VrDeviceInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 60;

  private $lensDistortionValues: BuildTuple<4, number> | null = null;
  private $chromaAbCorrection: BuildTuple<4, number> | null = null;

  public get hResolution() {
    return this.$view.getInt32(ByteOffset.hResolution, true);
  }

  public set hResolution(value: number) {
    this.$view.setInt32(ByteOffset.hResolution, value, true);
  }

  public get vResolution() {
    return this.$view.getInt32(ByteOffset.vResolution, true);
  }

  public set vResolution(value: number) {
    this.$view.setInt32(ByteOffset.vResolution, value, true);
  }

  public get hScreenSize() {
    return this.$view.getFloat32(ByteOffset.hScreenSize, true);
  }

  public set hScreenSize(value: number) {
    this.$view.setFloat32(ByteOffset.hScreenSize, value, true);
  }

  public get vScreenSize() {
    return this.$view.getFloat32(ByteOffset.vScreenSize, true);
  }

  public set vScreenSize(value: number) {
    this.$view.setFloat32(ByteOffset.vScreenSize, value, true);
  }

  public get eyeToScreenDistance() {
    return this.$view.getFloat32(ByteOffset.eyeToScreenDistance, true);
  }

  public set eyeToScreenDistance(value: number) {
    this.$view.setFloat32(ByteOffset.eyeToScreenDistance, value, true);
  }

  public get lensSeparationDistance() {
    return this.$view.getFloat32(ByteOffset.lensSeparationDistance, true);
  }

  public set lensSeparationDistance(value: number) {
    this.$view.setFloat32(ByteOffset.lensSeparationDistance, value, true);
  }

  public get interpupillaryDistance() {
    return this.$view.getFloat32(ByteOffset.interpupillaryDistance, true);
  }

  public set interpupillaryDistance(value: number) {
    this.$view.setFloat32(ByteOffset.interpupillaryDistance, value, true);
  }

  public get lensDistortionValues() {
    if (this.$lensDistortionValues) return this.$lensDistortionValues;

    this.$lensDistortionValues = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.lensDistortionValues,
      4
    ) as never;

    return this.$lensDistortionValues;
  }

  public get chromaAbCorrection() {
    if (this.$chromaAbCorrection) return this.$chromaAbCorrection;

    this.$chromaAbCorrection = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.chromaAbCorrection,
      4
    ) as never;

    return this.$chromaAbCorrection;
  }
}
