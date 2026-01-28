import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { ByteOffset } from './constant';

export class VrDeviceInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 60;

  private $lensDistortionValues: [number, number, number, number] | null = null;
  private $chromaAbCorrection: [number, number, number, number] | null = null;

  public constructor(data: BaseStructOptions) {
    super(data);
  }

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

    const length = 4;

    this.$lensDistortionValues = new Proxy(new Array(length), {
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

        return this.$view.getFloat32(
          ByteOffset.lensDistortionValues + index * 4,
          true
        );
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        this.$view.setFloat32(
          ByteOffset.lensDistortionValues + index * 4,
          value,
          true
        );
        return true;
      },
    }) as never;

    return this.$lensDistortionValues;
  }

  public get chromaAbCorrection() {
    if (this.$chromaAbCorrection) return this.$chromaAbCorrection;

    const length = 4;

    this.$chromaAbCorrection = new Proxy(new Array(length), {
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

        return this.$view.getFloat32(
          ByteOffset.chromaAbCorrection + index * 4,
          true
        );
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        this.$view.setFloat32(
          ByteOffset.chromaAbCorrection + index * 4,
          value,
          true
        );
        return true;
      },
    }) as never;

    return this.$chromaAbCorrection;
  }
}
