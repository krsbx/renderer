import type { WindowID } from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { RenderEventType } from './types';

export class RenderEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as RenderEventType;
  }

  public set type(value: RenderEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true) as UInt32;
  }

  public set reserved(value: UInt32) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true) as WindowID;
  }

  public set windowID(value: WindowID) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }
}
