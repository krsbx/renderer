import type { UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { type Pointer } from 'bun:ffi';
import { Surface } from '../../../surface/struct';
import { ByteOffset } from './constant';

export class CursorFrameInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 16;

  public get surface() {
    const addr = this.$view.getBigUint64(ByteOffset.surface, true);

    if (!addr || addr === 0n) return null;

    return new Surface(Number(addr) as Pointer);
  }

  public set surface(value: Surface | null) {
    if (!value) {
      this.$view.setBigUint64(ByteOffset.surface, 0n, true);
      return;
    }

    this.$view.setBigUint64(ByteOffset.surface, BigInt(value.$address), true);
  }

  public get duration() {
    return this.$view.getUint32(ByteOffset.duration, true) as UInt32;
  }

  public set duration(value: UInt32) {
    this.$view.setUint32(ByteOffset.duration, value, true);
  }
}
