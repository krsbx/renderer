import type { UInt16, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { stringToCString } from '@utility/common';
import { CStruct } from '@utility/cstruct';
import { CString, linkSymbols, type FFIFunction, type Pointer } from 'bun:ffi';
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

export class VirtualJoystickDesc extends BaseStruct {
  public static override readonly BYTE_SIZE = 136;

  public $touchpadsBuffer: Uint8Array | null = null;
  public $sensorsBuffer: Uint8Array | null = null;

  private $cache: Partial<{
    name: CString;
  }> = {};

  public get version() {
    return this.$view.getUint32(ByteOffset.version, true) as UInt32;
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
    return this.$view.getUint16(ByteOffset.type, true) as UInt16;
  }

  public set type(value: UInt16) {
    this.$view.setUint16(ByteOffset.type, value, true);
  }

  public get vendorId() {
    return this.$view.getUint16(ByteOffset.vendor_id, true) as UInt16;
  }

  public set vendorId(value: UInt16) {
    this.$view.setUint16(ByteOffset.vendor_id, value, true);
  }

  public get productId() {
    return this.$view.getUint16(ByteOffset.product_id, true) as UInt16;
  }

  public set productId(value: UInt16) {
    this.$view.setUint16(ByteOffset.product_id, value, true);
  }

  public get axesCount() {
    return this.$view.getUint16(ByteOffset.naxes, true) as UInt16;
  }

  public set axesCount(value: UInt16) {
    this.$view.setUint16(ByteOffset.naxes, value, true);
  }

  public get buttonCount() {
    return this.$view.getUint16(ByteOffset.nbuttons, true) as UInt16;
  }

  public set buttonCount(value: UInt16) {
    this.$view.setUint16(ByteOffset.nbuttons, value, true);
  }

  public get ballCount() {
    return this.$view.getUint16(ByteOffset.nballs, true) as UInt16;
  }

  public set ballCount(value: UInt16) {
    this.$view.setUint16(ByteOffset.nballs, value, true);
  }

  public get hatCount() {
    return this.$view.getUint16(ByteOffset.nhats, true) as UInt16;
  }

  public set hatCount(value: UInt16) {
    this.$view.setUint16(ByteOffset.nhats, value, true);
  }

  public get touchpadCount() {
    return this.$view.getUint16(ByteOffset.ntouchpads, true) as UInt16;
  }

  public set touchpadCount(value: UInt16) {
    this.$view.setUint16(ByteOffset.ntouchpads, value, true);
  }

  public get sensorCount() {
    return this.$view.getUint16(ByteOffset.nsensors, true) as UInt16;
  }

  public set sensorCount(value: UInt16) {
    this.$view.setUint16(ByteOffset.nsensors, value, true);
  }

  public get buttonMask() {
    return this.$view.getUint32(ByteOffset.button_mask, true) as UInt32;
  }

  public set buttonMask(value: UInt32) {
    this.$view.setUint32(ByteOffset.button_mask, value, true);
  }

  public get axisMask() {
    return this.$view.getUint32(ByteOffset.axis_mask, true) as UInt32;
  }

  public set axisMask(value: UInt32) {
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

    const touchpadsPtr = Number(touchpadsAddr) as Pointer;

    return CStruct.readArray(
      VirtualJoystickTouchpadDesc,
      touchpadsPtr,
      this.touchpadCount
    );
  }

  public set touchpads(value: VirtualJoystickTouchpadDesc[]) {
    this.touchpadCount = value.length as UInt16;

    if (this.touchpadCount === 0) {
      this.$view.setBigUint64(ByteOffset.touchpads, 0n, true);
      this.$touchpadsBuffer = null;
      return;
    }

    const { address, buffer } = CStruct.writeArray(
      value,
      VirtualJoystickTouchpadDesc.BYTE_SIZE
    );

    this.$touchpadsBuffer = buffer;

    this.$view.setBigUint64(ByteOffset.touchpads, BigInt(address), true);
  }

  public get sensors() {
    if (!this.sensorCount) return [];

    const sensorsAddr = this.$view.getBigUint64(ByteOffset.sensors, true);

    if (!sensorsAddr || sensorsAddr === 0n) return [];

    const sensorsPtr = Number(sensorsAddr) as Pointer;

    return CStruct.readArray(
      VirtualJoystickSensorDesc,
      sensorsPtr,
      this.sensorCount
    );
  }

  public set sensors(value: VirtualJoystickSensorDesc[]) {
    this.sensorCount = value.length as UInt16;

    if (this.sensorCount === 0) {
      this.$view.setBigUint64(ByteOffset.sensors, 0n, true);
      this.$sensorsBuffer = null;
      return;
    }

    const { address, buffer } = CStruct.writeArray(
      value,
      VirtualJoystickSensorDesc.BYTE_SIZE
    );

    this.$sensorsBuffer = buffer;

    this.$view.setBigUint64(ByteOffset.sensors, BigInt(address), true);
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
