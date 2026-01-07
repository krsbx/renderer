import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import { HapticDirection } from '../haptic-direction/haptic-direction.snapshot';
import { ByteOffset } from './constant';
import type { RawHapticCondition } from './types';

export class HapticCondition implements RawHapticCondition {
  public static readonly BYTE_SIZE = 72;

  public type: HapticEffectType;
  public direction: HapticDirection;
  public length: number;
  public delay: number;
  public button: number;
  public interval: number;
  public right_sat: [number, number, number];
  public left_sat: [number, number, number];
  public right_coeff: [number, number, number];
  public left_coeff: [number, number, number];
  public deadband: [number, number, number];
  public center: [number, number, number];
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawHapticCondition) {
    this.type = options.type;
    this.direction = options.direction;
    this.length = options.length;
    this.delay = options.delay;
    this.button = options.button;
    this.interval = options.interval;
    this.right_sat = options.right_sat;
    this.left_sat = options.left_sat;
    this.right_coeff = options.right_coeff;
    this.left_coeff = options.left_coeff;
    this.deadband = options.deadband;
    this.center = options.center;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = HapticCondition.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint16(ByteOffset.type, this.type, true);
    buffer.set(this.direction.toMemory(), ByteOffset.direction);

    view.setUint32(ByteOffset.length, this.length, true);
    view.setUint16(ByteOffset.delay, this.delay, true);
    view.setUint16(ByteOffset.button, this.button, true);
    view.setUint16(ByteOffset.interval, this.interval, true);

    // Array writing (starting at offset 32)
    for (let i = 0; i < 3; i++) {
      const right_sat = this.right_sat[i];
      const left_sat = this.left_sat[i];
      const right_coeff = this.right_coeff[i];
      const left_coeff = this.left_coeff[i];
      const deadband = this.deadband[i];
      const center = this.center[i];

      if (right_sat) {
        view.setUint16(ByteOffset.right_sat1 + i * 2, right_sat, true);
      }

      if (left_sat) {
        view.setUint16(ByteOffset.left_sat1 + i * 2, left_sat, true);
      }

      if (right_coeff) {
        view.setInt16(ByteOffset.right_coeff1 + i * 2, right_coeff, true);
      }

      if (left_coeff) {
        view.setInt16(ByteOffset.left_coeff1 + i * 2, left_coeff, true);
      }

      if (deadband) {
        view.setUint16(ByteOffset.deadband1 + i * 2, deadband, true);
      }

      if (center) {
        view.setInt16(ByteOffset.center1 + i * 2, center, true);
      }
    }

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const readI16Array = (
      ptr: Pointer,
      offset: number
    ): [number, number, number] => [
      read.i16(ptr, offset),
      read.i16(ptr, offset + 2),
      read.i16(ptr, offset + 4),
    ];

    const readU16Array = (
      ptr: Pointer,
      offset: number
    ): [number, number, number] => [
      read.u16(ptr, offset),
      read.u16(ptr, offset + 2),
      read.u16(ptr, offset + 4),
    ];

    const result = {
      type: read.u16(pointer, ByteOffset.type),
      direction: HapticDirection.fromPointer(
        (BigInt(pointer) + BigInt(ByteOffset.direction)) as unknown as Pointer,
        sdl
      ),
      length: read.u32(pointer, ByteOffset.length),
      delay: read.u16(pointer, ByteOffset.delay),
      button: read.u16(pointer, ByteOffset.button),
      interval: read.u16(pointer, ByteOffset.interval),
      right_sat: readU16Array(pointer, ByteOffset.right_sat1),
      left_sat: readU16Array(pointer, ByteOffset.left_sat1),
      right_coeff: readI16Array(pointer, ByteOffset.right_coeff1),
      left_coeff: readI16Array(pointer, ByteOffset.left_coeff1),
      deadband: readU16Array(pointer, ByteOffset.deadband1),
      center: readI16Array(pointer, ByteOffset.center1),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawHapticCondition;

    return new HapticCondition(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const getU16Array = (offset: number): [number, number, number] => [
      view.getUint16(offset, true),
      view.getUint16(offset + 2, true),
      view.getUint16(offset + 4, true),
    ];

    const getI16Array = (offset: number): [number, number, number] => [
      view.getInt16(offset, true),
      view.getInt16(offset + 2, true),
      view.getInt16(offset + 4, true),
    ];

    const result = {
      type: view.getUint16(ByteOffset.type, true),
      direction: HapticDirection.fromMemory(data.slice(ByteOffset.button, 20)),
      length: view.getUint32(ByteOffset.length, true),
      delay: view.getUint16(ByteOffset.delay, true),
      button: view.getUint16(ByteOffset.button, true),
      interval: view.getUint16(ByteOffset.interval, true),
      right_sat: getU16Array(ByteOffset.right_sat1),
      left_sat: getU16Array(ByteOffset.left_sat1),
      right_coeff: getI16Array(ByteOffset.right_coeff1),
      left_coeff: getI16Array(ByteOffset.left_coeff1),
      deadband: getU16Array(ByteOffset.deadband1),
      center: getI16Array(ByteOffset.center1),
      free: null,
      address: null,
    } as RawHapticCondition;

    return new HapticCondition(result);
  }
}
