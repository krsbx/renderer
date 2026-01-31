import type { BuildTuple } from '@/types/shared';
import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { HapticEffectType } from '@sdl/ffi/constant/haptic';
import { HapticDirection } from '../haptic-direction';
import { ByteOffset } from './constant';

export class HapticCondition extends BaseStruct {
  public static override readonly BYTE_SIZE = 72;

  public readonly direction: HapticDirection;

  private $rightSat: BuildTuple<3, number> | null = null;
  private $leftSat: BuildTuple<3, number> | null = null;
  private $rightCoeff: BuildTuple<3, number> | null = null;
  private $leftCoeff: BuildTuple<3, number> | null = null;
  private $deadband: BuildTuple<3, number> | null = null;
  private $center: BuildTuple<3, number> | null = null;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.direction = new HapticDirection(
      this.$memory.subarray(
        ByteOffset.direction,
        HapticDirection.BYTE_SIZE + ByteOffset.direction
      )
    );
  }

  public get type() {
    return this.$view.getUint16(ByteOffset.type, true) as HapticEffectType;
  }

  public set type(value: HapticEffectType) {
    this.$view.setUint16(ByteOffset.type, value, true);
  }

  public get length() {
    return this.$view.getUint32(ByteOffset.length, true);
  }

  public set length(value: number) {
    this.$view.setUint32(ByteOffset.length, value, true);
  }

  public get delay() {
    return this.$view.getUint16(ByteOffset.delay, true);
  }

  public set delay(value: number) {
    this.$view.setUint16(ByteOffset.delay, value, true);
  }

  public get button() {
    return this.$view.getUint16(ByteOffset.button, true);
  }

  public set button(value: number) {
    this.$view.setUint16(ByteOffset.button, value, true);
  }

  public get interval() {
    return this.$view.getUint16(ByteOffset.interval, true);
  }

  public set interval(value: number) {
    this.$view.setUint16(ByteOffset.interval, value, true);
  }

  public get rightSat() {
    if (this.$rightSat) return this.$rightSat;

    this.$rightSat = new Uint16Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.right_sat1,
      3
    ) as never;

    return this.$rightSat;
  }
  public get leftSat() {
    if (this.$leftSat) return this.$leftSat;

    this.$leftSat = new Uint16Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.left_sat1,
      3
    ) as never;

    return this.$leftSat;
  }

  public get rightCoeff() {
    if (this.$rightCoeff) return this.$rightCoeff;

    this.$rightCoeff = new Int16Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.right_coeff1,
      3
    ) as never;

    return this.$rightCoeff;
  }
  public get leftCoeff() {
    if (this.$leftCoeff) return this.$leftCoeff;

    this.$leftCoeff = new Int16Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.left_coeff1,
      3
    ) as never;

    return this.$leftCoeff;
  }

  public get deadband() {
    if (this.$deadband) return this.$deadband;

    this.$deadband = new Uint16Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.deadband1,
      3
    ) as never;

    return this.$deadband;
  }
  public get center() {
    if (this.$center) return this.$center;

    this.$center = new Int16Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.center1,
      3
    ) as never;

    return this.$center;
  }
}
