import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { HapticEffectType } from '@sdl/ffi/constant/haptic';
import { HapticCondition } from '../haptic-condition';
import { HapticConstant } from '../haptic-constant';
import { HapticCustom } from '../haptic-custom';
import { HapticLeftRight } from '../haptic-left-right';
import { HapticPeriodic } from '../haptic-periodic';
import { HapticRamp } from '../haptic-ramp';

export class HapticEffect extends BaseStruct {
  public static override readonly BYTE_SIZE = 72;

  public readonly constant: HapticConstant;
  public readonly periodic: HapticPeriodic;
  public readonly condition: HapticCondition;
  public readonly ramp: HapticRamp;
  public readonly custom: HapticCustom;
  public readonly leftRight: HapticLeftRight;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.constant = new HapticConstant(this.$memory);
    this.periodic = new HapticPeriodic(this.$memory);
    this.condition = new HapticCondition(this.$memory);
    this.ramp = new HapticRamp(this.$memory);
    this.custom = new HapticCustom(this.$memory);
    this.leftRight = new HapticLeftRight(this.$memory);
  }

  public get type() {
    return this.$view.getUint16(0, true) as HapticEffectType;
  }

  public set type(value: HapticEffectType) {
    this.$view.setUint16(0, value, true);
  }
}
