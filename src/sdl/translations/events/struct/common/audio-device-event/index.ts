import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { AudioDeviceEventType } from './types';

export class AudioDeviceEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as AudioDeviceEventType;
  }

  public set type(value: AudioDeviceEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true);
  }

  public set reserved(value: number) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true);
  }

  public set which(value: number) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get recording() {
    return this.$view.getUint8(ByteOffset.recording) === 1;
  }

  public set recording(value: boolean) {
    this.$view.setUint8(ByteOffset.recording, value ? 1 : 0);
  }
}
