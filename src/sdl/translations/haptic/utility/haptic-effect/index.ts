import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import { HapticCondition } from '../haptic-condition';
import { HapticConstant } from '../haptic-constant';
import { HapticCustom } from '../haptic-custom';
import { HapticLeftRight } from '../haptic-left-right';
import { HapticPeriodic } from '../haptic-periodic';
import { HapticRamp } from '../haptic-ramp';

export class HapticEffect {
  public static readonly BYTE_SIZE = 72;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly constant: HapticConstant;
  public readonly periodic: HapticPeriodic;
  public readonly condition: HapticCondition;
  public readonly ramp: HapticRamp;
  public readonly custom: HapticCustom;
  public readonly leftRight: HapticLeftRight;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, HapticEffect.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.constant = new HapticConstant(this.$memory);
    this.periodic = new HapticPeriodic(this.$memory);
    this.condition = new HapticCondition(this.$memory);
    this.ramp = new HapticRamp(this.$memory);
    this.custom = new HapticCustom(this.$memory);
    this.leftRight = new HapticLeftRight(this.$memory);
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get type() {
    return this.$view.getUint16(0, true) as HapticEffectType;
  }

  public set type(value: HapticEffectType) {
    this.$view.setUint16(0, value, true);
  }
}
