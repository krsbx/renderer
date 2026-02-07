import type { UInt16, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';
import type { KeyboardEventType } from './types';

export class KeyboardEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as KeyboardEventType;
  }

  public set type(value: KeyboardEventType) {
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
    return this.$view.getUint32(ByteOffset.windowID, true) as UInt32;
  }

  public set windowID(value: UInt32) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true) as UInt32;
  }

  public set which(value: UInt32) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get scancode() {
    return this.$view.getUint32(ByteOffset.scancode, true) as UInt32;
  }

  public set scancode(value: UInt32) {
    this.$view.setUint32(ByteOffset.scancode, value, true);
  }

  public get key() {
    return this.$view.getUint32(ByteOffset.key, true) as UInt32;
  }

  public set key(value: UInt32) {
    this.$view.setUint32(ByteOffset.key, value, true);
  }

  public get mod() {
    return this.$view.getUint16(ByteOffset.mod, true) as UInt16;
  }

  public set mod(value: UInt16) {
    this.$view.setUint16(ByteOffset.mod, value, true);
  }

  public get raw() {
    return this.$view.getUint16(ByteOffset.raw, true) as UInt16;
  }

  public set raw(value: UInt16) {
    this.$view.setUint16(ByteOffset.raw, value, true);
  }

  public get down() {
    return this.$view.getUint8(ByteOffset.down) === 1;
  }

  public set down(value: boolean) {
    this.$view.setUint8(ByteOffset.down, value ? 1 : 0);
  }

  public get repeat() {
    return this.$view.getUint8(ByteOffset.repeat) === 1;
  }

  public set repeat(value: boolean) {
    this.$view.setUint8(ByteOffset.repeat, value ? 1 : 0);
  }
}
