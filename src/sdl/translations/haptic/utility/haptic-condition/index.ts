import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import { HapticDirection } from '../haptic-direction';
import { ByteOffset } from './constant';

export class HapticCondition extends BaseStruct {
  public static override readonly BYTE_SIZE = 72;

  public readonly direction: HapticDirection;

  private $rightSat: [number, number, number] | null;
  private $leftSat: [number, number, number] | null;
  private $rightCoeff: [number, number, number] | null;
  private $leftCoeff: [number, number, number] | null;
  private $deadband: [number, number, number] | null;
  private $center: [number, number, number] | null;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.direction = new HapticDirection(
      this.$memory.subarray(
        ByteOffset.direction,
        HapticDirection.BYTE_SIZE + ByteOffset.direction
      )
    );

    this.$rightSat = null;
    this.$leftSat = null;
    this.$rightCoeff = null;
    this.$leftCoeff = null;
    this.$deadband = null;
    this.$center = null;
  }

  private createArrayProxy(
    baseOffset: number,
    length: number,
    isSigned: boolean
  ) {
    return new Proxy(new Array(length), {
      get: (target, prop) => {
        const index = Number(prop);

        if (Number.isNaN(index)) {
          // Allow access to standard array methods (map, forEach, etc)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const val = (target as any)[prop];

          return typeof val === 'function' ? val.bind(target) : val;
        }

        if (index < 0 || index >= length) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return isSigned
          ? this.$view.getInt16(baseOffset + index * 2, true)
          : this.$view.getUint16(baseOffset + index * 2, true);
      },
      set: (_, prop, value) => {
        const index = Number(prop);

        if (Number.isNaN(index) || index < 0 || index >= length) {
          return false;
        }

        if (isSigned) {
          this.$view.setInt16(baseOffset + index * 2, value, true);
        } else {
          this.$view.setUint16(baseOffset + index * 2, value, true);
        }

        return true;
      },
    });
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
    if (!this.$rightSat) {
      this.$rightSat = this.createArrayProxy(
        ByteOffset.right_sat1,
        3,
        false
      ) as never;
    }

    return this.$rightSat;
  }
  public get leftSat() {
    if (!this.$leftSat) {
      this.$leftSat = this.createArrayProxy(
        ByteOffset.left_sat1,
        3,
        false
      ) as never;
    }

    return this.$leftSat;
  }
  public get rightCoeff() {
    if (!this.$rightCoeff) {
      this.$rightCoeff = this.createArrayProxy(
        ByteOffset.right_coeff1,
        3,
        true
      ) as never;
    }

    return this.$rightCoeff;
  }
  public get leftCoeff() {
    if (!this.$leftCoeff) {
      this.$leftCoeff = this.createArrayProxy(
        ByteOffset.left_coeff1,
        3,
        true
      ) as never;
    }

    return this.$leftCoeff;
  }
  public get deadband() {
    if (!this.$deadband) {
      this.$deadband = this.createArrayProxy(
        ByteOffset.deadband1,
        3,
        false
      ) as never;
    }

    return this.$deadband;
  }
  public get center() {
    if (!this.$center) {
      this.$center = this.createArrayProxy(
        ByteOffset.center1,
        3,
        true
      ) as never;
    }

    return this.$center;
  }
}
