import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { JoyBallEventType } from './types';

export class JoyBallEvent {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, JoyBallEvent.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<JoyBallEvent>) {
    const instance = new JoyBallEvent(JoyBallEvent.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as JoyBallEventType;
  }

  public set type(value: JoyBallEventType) {
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

  public get ball() {
    return this.$view.getUint8(ByteOffset.ball);
  }

  public set ball(value: number) {
    this.$view.setUint8(ByteOffset.ball, value);
  }

  public get xRel() {
    return this.$view.getInt16(ByteOffset.xrel, true);
  }

  public set xRel(value: number) {
    this.$view.setInt16(ByteOffset.xrel, value, true);
  }

  public get yRel() {
    return this.$view.getInt16(ByteOffset.yrel, true);
  }

  public set yRel(value: number) {
    this.$view.setInt16(ByteOffset.yrel, value, true);
  }
}
