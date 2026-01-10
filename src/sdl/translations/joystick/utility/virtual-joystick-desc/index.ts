import {
  CString,
  linkSymbols,
  ptr,
  toArrayBuffer,
  type FFIFunction,
  type Pointer,
} from 'bun:ffi';
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

  public get vendor_id() {
    return this.$view.getUint16(ByteOffset.vendor_id, true);
  }

  public set vendor_id(value: number) {
    this.$view.setUint16(ByteOffset.vendor_id, value, true);
  }

  public get product_id() {
    return this.$view.getUint16(ByteOffset.product_id, true);
  }

  public set product_id(value: number) {
    this.$view.setUint16(ByteOffset.product_id, value, true);
  }

  public get naxes() {
    return this.$view.getUint16(ByteOffset.naxes, true);
  }

  public set naxes(value: number) {
    this.$view.setUint16(ByteOffset.naxes, value, true);
  }

  public get nbuttons() {
    return this.$view.getUint16(ByteOffset.nbuttons, true);
  }

  public set nbuttons(value: number) {
    this.$view.setUint16(ByteOffset.nbuttons, value, true);
  }

  public get nballs() {
    return this.$view.getUint16(ByteOffset.nballs, true);
  }

  public set nballs(value: number) {
    this.$view.setUint16(ByteOffset.nballs, value, true);
  }

  public get nhats() {
    return this.$view.getUint16(ByteOffset.nhats, true);
  }

  public set nhats(value: number) {
    this.$view.setUint16(ByteOffset.nhats, value, true);
  }

  public get ntouchpads() {
    return this.$view.getUint16(ByteOffset.ntouchpads, true);
  }

  public set ntouchpads(value: number) {
    this.$view.setUint16(ByteOffset.ntouchpads, value, true);
  }

  public get nsensors() {
    return this.$view.getUint16(ByteOffset.nsensors, true);
  }

  public set nsensors(value: number) {
    this.$view.setUint16(ByteOffset.nsensors, value, true);
  }

  public get button_mask() {
    return this.$view.getUint32(ByteOffset.button_mask, true);
  }

  public set button_mask(value: number) {
    this.$view.setUint32(ByteOffset.button_mask, value, true);
  }

  public get axis_mask() {
    return this.$view.getUint32(ByteOffset.axis_mask, true);
  }

  public set axis_mask(value: number) {
    this.$view.setUint32(ByteOffset.axis_mask, value, true);
  }

  public get name() {
    const nameAddr = this.$view.getBigUint64(ByteOffset.name, true);
    const namePtr = Number(nameAddr) as Pointer;

    return new CString(namePtr);
  }

  public set name(value: CString) {
    this.$view.setBigUint64(ByteOffset.name, BigInt(value.ptr), true);
  }

  public get touchpads() {
    if (!this.ntouchpads) return [];

    const touchpadsAddr = this.$view.getBigUint64(ByteOffset.touchpads, true);

    if (!touchpadsAddr || touchpadsAddr === 0n) return [];

    const touchpads: VirtualJoystickTouchpadDesc[] = [];
    const touchpadsPtr = Number(touchpadsAddr) as Pointer;

    for (let i = 0; i < this.ntouchpads; i++) {
      const offset = i * VirtualJoystickTouchpadDesc.BYTE_SIZE;
      const touchpadPtr = (offset + touchpadsPtr) as Pointer;

      touchpads.push(new VirtualJoystickTouchpadDesc(touchpadPtr));
    }

    return touchpads;
  }

  public set touchpads(value: VirtualJoystickTouchpadDesc[]) {
    this.ntouchpads = value.length;

    if (this.ntouchpads === 0) {
      this.$view.setBigUint64(ByteOffset.touchpads, 0n, true);
      this.$touchpadsBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      VirtualJoystickTouchpadDesc.BYTE_SIZE * this.ntouchpads
    );

    for (let i = 0; i < this.ntouchpads; i++) {
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
    if (!this.nsensors) return [];

    const sensorsAddr = this.$view.getBigUint64(ByteOffset.sensors, true);

    if (!sensorsAddr || sensorsAddr === 0n) return [];

    const sensors: VirtualJoystickSensorDesc[] = [];
    const sensorsPtr = Number(sensorsAddr) as Pointer;

    for (let i = 0; i < this.nsensors; i++) {
      const offset = i * VirtualJoystickSensorDesc.BYTE_SIZE;
      const sensorPtr = (offset + sensorsPtr) as Pointer;

      sensors.push(new VirtualJoystickSensorDesc(sensorPtr));
    }

    return sensors;
  }

  public set sensors(value: VirtualJoystickSensorDesc[]) {
    this.nsensors = value.length;

    if (this.nsensors === 0) {
      this.$view.setBigUint64(ByteOffset.sensors, 0n, true);
      this.$sensorsBuffer = null;
      return;
    }

    const buffer = new Uint8Array(
      VirtualJoystickSensorDesc.BYTE_SIZE * this.nsensors
    );

    for (let i = 0; i < this.nsensors; i++) {
      const offset = i * VirtualJoystickTouchpadDesc.BYTE_SIZE;

      buffer.set(value[i]!.$memory, offset);
    }

    this.$sensorsBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.sensors,
      BigInt(ptr(this.$sensorsBuffer)),
      true
    );
  }

  public update(userData?: Pointer | null) {
    this.invoke(ByteOffset.update, VirtualJoystickDescDefinition.Update, [
      userData ?? null,
    ]);
  }

  public setPlayerIndex(optinos: SetPlayerIndexOptions) {
    this.invoke(
      ByteOffset.setPlayerIndex,
      VirtualJoystickDescDefinition.SetPlayerIndex,
      [optinos.userData ?? null, optinos.player_index]
    );
  }

  public rumble(options: RumbleOptions) {
    this.invoke(ByteOffset.rumble, VirtualJoystickDescDefinition.Rumble, [
      options.userData ?? null,
      options.low_frequency_rumble,
      options.high_frequency_rumble,
    ]);
  }

  public rumbleTriggers(options: RumbleTriggersOptions) {
    this.invoke(
      ByteOffset.rumbleTriggers,
      VirtualJoystickDescDefinition.RumbleTriggers,
      [options.userData ?? null, options.left_rumble, options.right_rumble]
    );
  }

  public setLed(options: SetLEDOptions) {
    this.invoke(ByteOffset.setLED, VirtualJoystickDescDefinition.SetLED, [
      options.userData ?? null,
      options.r,
      options.g,
      options.b,
    ]);
  }

  public setSensorsEnabled(options: SetSensorsEnabledOptions) {
    this.invoke(
      ByteOffset.setSensorsEnabled,
      VirtualJoystickDescDefinition.SetSensorsEnabled,
      [options.userData ?? null, options.enabled]
    );
  }

  public cleanup(userData?: Pointer | null) {
    this.invoke(ByteOffset.cleanup, VirtualJoystickDescDefinition.Cleanup, [
      userData ?? null,
    ]);
  }
}
