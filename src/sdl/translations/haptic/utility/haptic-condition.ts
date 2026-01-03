import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { HapticEffectType } from '../../../ffi/haptic/constant';
import { HapticDirection } from './haptic-direction';
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

    view.setUint16(0, this.type, true);
    buffer.set(this.direction.toMemory(), 4);

    view.setUint32(20, this.length, true);
    view.setUint16(24, this.delay, true);
    view.setUint16(26, this.button, true);
    view.setUint16(28, this.interval, true);

    // Array writing (starting at offset 32)
    for (let i = 0; i < 3; i++) {
      const right_sat = this.right_sat[i];
      const left_sat = this.left_sat[i];
      const right_coeff = this.right_coeff[i];
      const left_coeff = this.left_coeff[i];
      const deadband = this.deadband[i];
      const center = this.center[i];

      if (right_sat) {
        view.setUint16(32 + i * 2, right_sat, true);
      }

      if (left_sat) {
        view.setUint16(38 + i * 2, left_sat, true);
      }

      if (right_coeff) {
        view.setInt16(44 + i * 2, right_coeff, true);
      }

      if (left_coeff) {
        view.setInt16(50 + i * 2, left_coeff, true);
      }

      if (deadband) {
        view.setUint16(56 + i * 2, deadband, true);
      }

      if (center) {
        view.setInt16(62 + i * 2, center, true);
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
      type: read.u16(pointer, 0),
      direction: HapticDirection.fromPointer(
        (BigInt(pointer) + 4n) as unknown as Pointer,
        sdl
      ),
      length: read.u32(pointer, 20),
      delay: read.u16(pointer, 24),
      button: read.u16(pointer, 26),
      interval: read.u16(pointer, 28),
      right_sat: readU16Array(pointer, 32),
      left_sat: readU16Array(pointer, 38),
      right_coeff: readI16Array(pointer, 44),
      left_coeff: readI16Array(pointer, 50),
      deadband: readU16Array(pointer, 56),
      center: readI16Array(pointer, 62),
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
      type: view.getUint16(0, true),
      direction: HapticDirection.fromMemory(data.slice(4, 20)),
      length: view.getUint32(20, true),
      delay: view.getUint16(24, true),
      button: view.getUint16(26, true),
      interval: view.getUint16(28, true),
      right_sat: getU16Array(32),
      left_sat: getU16Array(38),
      right_coeff: getI16Array(44),
      left_coeff: getI16Array(50),
      deadband: getU16Array(56),
      center: getI16Array(62),
      free: null,
      address: null,
    } as RawHapticCondition;

    return new HapticCondition(result);
  }
}
