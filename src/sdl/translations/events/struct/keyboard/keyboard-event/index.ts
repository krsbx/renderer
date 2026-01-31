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

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true);
  }

  public set windowID(value: number) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }

  public get which() {
    return this.$view.getUint32(ByteOffset.which, true);
  }

  public set which(value: number) {
    this.$view.setUint32(ByteOffset.which, value, true);
  }

  public get scancode() {
    return this.$view.getUint32(ByteOffset.scancode, true);
  }

  public set scancode(value: number) {
    this.$view.setUint32(ByteOffset.scancode, value, true);
  }

  public get key() {
    return this.$view.getUint32(ByteOffset.key, true);
  }

  public set key(value: number) {
    this.$view.setUint32(ByteOffset.key, value, true);
  }

  public get mod() {
    return this.$view.getUint16(ByteOffset.mod, true);
  }

  public set mod(value: number) {
    this.$view.setUint16(ByteOffset.mod, value, true);
  }

  public get raw() {
    return this.$view.getUint16(ByteOffset.raw, true);
  }

  public set raw(value: number) {
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
