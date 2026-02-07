import type { CameraID } from '@/sdl/types/definition';
import type { UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { CameraDeviceEventType } from './types';

export class CameraDeviceEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as CameraDeviceEventType;
  }

  public set type(value: CameraDeviceEventType) {
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

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true) as CameraID;
  }

  public set which(value: CameraID) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }
}
