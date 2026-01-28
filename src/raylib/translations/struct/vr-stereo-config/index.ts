import type { BuildTuple } from '@/types/shared';
import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { Matrix } from '../matrix';
import { ByteOffset } from './constant';

export class VrStereoConfig extends BaseStruct {
  public static override readonly BYTE_SIZE = 304;

  public readonly projection: readonly [Matrix, Matrix];
  public readonly viewOffset: readonly [Matrix, Matrix];

  private $leftLensCenter: BuildTuple<2, number> | null = null;
  private $rightLensCenter: BuildTuple<2, number> | null = null;
  private $leftScreenCenter: BuildTuple<2, number> | null = null;
  private $rightScreenCenter: BuildTuple<2, number> | null = null;
  private $scale: BuildTuple<2, number> | null = null;
  private $scaleIn: BuildTuple<2, number> | null = null;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.projection = Array.from({ length: 2 }, (_, i) => {
      const offset = ByteOffset.projection + i * Matrix.BYTE_SIZE;

      return new Matrix(
        this.$memory.subarray(offset, offset + Matrix.BYTE_SIZE)
      );
    }) as [Matrix, Matrix];

    this.viewOffset = Array.from({ length: 2 }, (_, i) => {
      const offset = ByteOffset.viewOffset + i * Matrix.BYTE_SIZE;

      return new Matrix(
        this.$memory.subarray(offset, offset + Matrix.BYTE_SIZE)
      );
    }) as [Matrix, Matrix];
  }

  public get leftLensCenter() {
    if (this.$leftLensCenter) return this.$leftLensCenter;

    this.$leftLensCenter = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.leftLensCenter,
      2
    ) as never;

    return this.$leftLensCenter;
  }

  public get rightLensCenter() {
    if (this.$rightLensCenter) return this.$rightLensCenter;

    this.$rightLensCenter = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.rightLensCenter,
      2
    ) as never;

    return this.$rightLensCenter;
  }

  public get leftScreenCenter() {
    if (this.$leftScreenCenter) return this.$leftScreenCenter;

    this.$leftScreenCenter = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.leftScreenCenter,
      2
    ) as never;

    return this.$leftScreenCenter;
  }

  public get rightScreenCenter() {
    if (this.$rightScreenCenter) return this.$rightScreenCenter;

    this.$rightScreenCenter = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.rightScreenCenter,
      2
    ) as never;

    return this.$rightScreenCenter;
  }

  public get scale() {
    if (this.$scale) return this.$scale;

    this.$scale = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.scale,
      2
    ) as never;

    return this.$scale;
  }

  public get scaleIn() {
    if (this.$scaleIn) return this.$scaleIn;

    this.$scaleIn = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.scaleIn,
      2
    ) as never;

    return this.$scaleIn;
  }
}
