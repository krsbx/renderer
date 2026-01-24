import {
  CString,
  linkSymbols,
  ptr,
  toArrayBuffer,
  type FFIFunction,
  type Pointer,
} from 'bun:ffi';
import { stringToCString } from '../../../../utility/common';
import { VirtualJoystickSensorDesc } from '../virtual-joystick-sensor-desc';
import { VirtualJoystickTouchpadDesc } from '../virtual-joystick-touchpad-desc';
import { ByteOffset } from './constant';
import { VirtualJoystickDescDefinition } from './definition';
import type {
  RumbleOptions,
  RumbleTriggersOptions,
  SetLEDOptions,
  SetPlayerIndexOptions,
  SetSensorsEnabledOptions,
} from './types';

export class VirtualJoystickDesc {
  public static readonly BYTE_SIZE = 136;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;
  public $touchpadsBuffer: Uint8Array | null;
  public $sensorsBuffer: Uint8Array | null;

  private $cache: Partial<{
    name: CString;
  }>;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, VirtualJoystickDesc.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
    this.$touchpadsBuffer = null;
    this.$sensorsBuffer = null;
    this.$cache = {};
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get version() {
    return this.$view.getUint32(ByteOffset.version, true);
  }

  private invoke<T>(offset: number, definition: FFIFunction, args: unknown[]) {
    const rawPtr = this.$view.getBigUint64(offset, true);
    const ptr = Number(rawPtr) as Pointer;

    if (!ptr) {
      throw new Error(
        `IOStreamInterface: Attempted to call null function pointer at offset ${offset}`
      );
    }

    const lib = linkSymbols({
      fn: {
        ...definition,
        ptr,
      },
    });

    const result = lib.symbols.fn(...(args as never));

    // Close immediately
    lib.close();

    return result as T;
  }

  public get type() {
    return this.$view.getUint16(ByteOffset.type, true);
  }

  public set type(value: number) {
    this.$view.setUint16(ByteOffset.type, value, true);
  }

  public get vendorId() {
    return this.$view.getUint16(ByteOffset.vendor_id, true);
  }

  public set vendorId(value: number) {
    this.$view.setUint16(ByteOffset.vendor_id, value, true);
  }

  public get productId() {
    return this.$view.getUint16(ByteOffset.product_id, true);
  }

  public set productId(value: number) {
    this.$view.setUint16(ByteOffset.product_id, value, true);
  }

  public get axesCount() {
    return this.$view.getUint16(ByteOffset.naxes, true);
  }

  public set axesCount(value: number) {
    this.$view.setUint16(ByteOffset.naxes, value, true);
  }

  public get buttonCount() {
    return this.$view.getUint16(ByteOffset.nbuttons, true);
  }

  public set buttonCount(value: number) {
    this.$view.setUint16(ByteOffset.nbuttons, value, true);
  }

  public get ballCount() {
    return this.$view.getUint16(ByteOffset.nballs, true);
  }

  public set ballCount(value: number) {
    this.$view.setUint16(ByteOffset.nballs, value, true);
  }

  public get hatCount() {
    return this.$view.getUint16(ByteOffset.nhats, true);
  }

  public set hatCount(value: number) {
    this.$view.setUint16(ByteOffset.nhats, value, true);
  }

  public get touchpadCount() {
    return this.$view.getUint16(ByteOffset.ntouchpads, true);
  }

  public set touchpadCount(value: number) {
    this.$view.setUint16(ByteOffset.ntouchpads, value, true);
  }

  public get sensorCount() {
    return this.$view.getUint16(ByteOffset.nsensors, true);
  }

  public set sensorCount(value: number) {
    this.$view.setUint16(ByteOffset.nsensors, value, true);
  }

  public get buttonMask() {
    return this.$view.getUint32(ByteOffset.button_mask, true);
  }

  public set buttonMask(value: number) {
    this.$view.setUint32(ByteOffset.button_mask, value, true);
  }

  public get axisMask() {
    return this.$view.getUint32(ByteOffset.axis_mask, true);
  }

  public set axisMask(value: number) {
    this.$view.setUint32(ByteOffset.axis_mask, value, true);
  }

  public get name() {
    const nameAddr = this.$view.getBigUint64(ByteOffset.name, true);
    const namePtr = Number(nameAddr) as Pointer;

    return new CString(namePtr).toString();
  }

  public set name(value: string) {
    this.$cache.name = stringToCString(value);

    this.$view.setBigUint64(
      ByteOffset.name,
      BigInt(this.$cache.name.ptr),
      true
    );
  }

  public get touchpads() {
    if (!this.touchpadCount) return [];

    const touchpadsAddr = this.$view.getBigUint64(ByteOffset.touchpads, true);

    if (!touchpadsAddr || touchpadsAddr === 0n) return [];

    const touchpads: VirtualJoystickTouchpadDesc[] = [];
    const touchpadsPtr = Number(touchpadsAddr) as Pointer;

    for (let i = 0; i < this.touchpadCount; i++) {
      const offset = i * VirtualJoystickTouchpadDesc.BYTE_SIZE;
      const touchpadPtr = (offset + touchpadsPtr) as Pointer;

      touchpads.push(new VirtualJoystickTouchpadDesc(touchpadPtr));
    }

    return touchpads;
  }

  public set touchpads(value: VirtualJoystickTouchpadDesc[]) {
    this.touchpadCount = value.length;

    if (this.touchpadCount === 0) {
      this.$view.setBigUint64(ByteOffset.touchpads, 0n, true);
      this.$touchpadsBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      VirtualJoystickTouchpadDesc.BYTE_SIZE * this.touchpadCount
    );

    for (let i = 0; i < this.touchpadCount; i++) {
      const offset = i * VirtualJoystickTouchpadDesc.BYTE_SIZE;

      buffer.set(value[i]!.$memory, offset);
    }

    this.$touchpadsBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.touchpads,
      BigInt(ptr(this.$touchpadsBuffer)),
      true
    );
  }

  public get sensors() {
    if (!this.sensorCount) return [];

    const sensorsAddr = this.$view.getBigUint64(ByteOffset.sensors, true);

    if (!sensorsAddr || sensorsAddr === 0n) return [];

    const sensors: VirtualJoystickSensorDesc[] = [];
    const sensorsPtr = Number(sensorsAddr) as Pointer;

    for (let i = 0; i < this.sensorCount; i++) {
      const offset = i * VirtualJoystickSensorDesc.BYTE_SIZE;
      const sensorPtr = (offset + sensorsPtr) as Pointer;

      sensors.push(new VirtualJoystickSensorDesc(sensorPtr));
    }

    return sensors;
  }

  public set sensors(value: VirtualJoystickSensorDesc[]) {
    this.sensorCount = value.length;

    if (this.sensorCount === 0) {
      this.$view.setBigUint64(ByteOffset.sensors, 0n, true);
      this.$sensorsBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      VirtualJoystickSensorDesc.BYTE_SIZE * this.sensorCount
    );

    for (let i = 0; i < this.sensorCount; i++) {
      const offset = i * VirtualJoystickSensorDesc.BYTE_SIZE;

      buffer.set(value[i]!.$memory, offset);
    }

    this.$sensorsBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.sensors,
      BigInt(ptr(this.$sensorsBuffer)),
      true
    );
  }

  public get userdata() {
    const addr = this.$view.getBigUint64(ByteOffset.userdata, true);

    return Number(addr) as Pointer;
  }

  public set userdata(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.userdata, BigInt(value), true);
  }

  public update(userdata?: Pointer | null) {
    this.invoke(ByteOffset.update, VirtualJoystickDescDefinition.Update, [
      userdata ?? null,
    ]);
  }

  public setPlayerIndex(optinos: SetPlayerIndexOptions) {
    this.invoke(
      ByteOffset.setPlayerIndex,
      VirtualJoystickDescDefinition.SetPlayerIndex,
      [optinos.userdata ?? null, optinos.player_index]
    );
  }

  public rumble(options: RumbleOptions) {
    this.invoke(ByteOffset.rumble, VirtualJoystickDescDefinition.Rumble, [
      options.userdata ?? null,
      options.low_frequency_rumble,
      options.high_frequency_rumble,
    ]);
  }

  public rumbleTriggers(options: RumbleTriggersOptions) {
    this.invoke(
      ByteOffset.rumbleTriggers,
      VirtualJoystickDescDefinition.RumbleTriggers,
      [options.userdata ?? null, options.left_rumble, options.right_rumble]
    );
  }

  public setLed(options: SetLEDOptions) {
    this.invoke(ByteOffset.setLED, VirtualJoystickDescDefinition.SetLED, [
      options.userdata ?? null,
      options.r,
      options.g,
      options.b,
    ]);
  }

  public setSensorsEnabled(options: SetSensorsEnabledOptions) {
    this.invoke(
      ByteOffset.setSensorsEnabled,
      VirtualJoystickDescDefinition.SetSensorsEnabled,
      [options.userdata ?? null, options.enabled]
    );
  }

  public cleanup(userdata?: Pointer | null) {
    this.invoke(ByteOffset.cleanup, VirtualJoystickDescDefinition.Cleanup, [
      userdata ?? null,
    ]);
  }
}
