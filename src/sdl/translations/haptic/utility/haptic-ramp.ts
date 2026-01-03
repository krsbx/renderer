import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { HapticEffectType } from '../../../ffi/haptic/constant';
import { HapticDirection } from './haptic-direction';
import type { RawHapticRamp } from './types';

export class HapticRamp implements RawHapticRamp {
  public static readonly BYTE_SIZE = 44;

  public type: HapticEffectType;
  public direction: HapticDirection;
  public length: number;
  public delay: number;
  public button: number;
  public interval: number;
  public start: number;
  public end: number;
  public attack_length: number;
  public attack_level: number;
  public fade_length: number;
  public fade_level: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawHapticRamp) {
    this.type = options.type;
    this.direction = options.direction;
    this.length = options.length;
    this.delay = options.delay;
    this.button = options.button;
    this.interval = options.interval;
    this.start = options.start;
    this.end = options.end;
    this.attack_length = options.attack_length;
    this.attack_level = options.attack_level;
    this.fade_length = options.fade_length;
    this.fade_level = options.fade_level;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = HapticRamp.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint16(0, this.type, true);
    // Direction starts at offset 4 (handles the 2-byte padding after type)
    buffer.set(this.direction.toMemory(), 4);

    view.setUint32(20, this.length, true);
    view.setUint16(24, this.delay, true);
    view.setUint16(26, this.button, true);
    view.setUint16(28, this.interval, true);
    view.setInt16(30, this.start, true);
    view.setInt16(32, this.end, true);
    view.setUint16(36, this.attack_length, true);
    view.setUint16(38, this.attack_level, true);
    view.setUint16(40, this.fade_length, true);
    view.setUint16(42, this.fade_level, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
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
      start: read.i16(pointer, 30),
      end: read.i16(pointer, 32),
      attack_length: read.u16(pointer, 36),
      attack_level: read.u16(pointer, 38),
      fade_length: read.u16(pointer, 40),
      fade_level: read.u16(pointer, 42),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawHapticRamp;

    return new HapticRamp(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint16(0, true),
      direction: HapticDirection.fromMemory(data.slice(4, 20)),
      length: view.getUint32(20, true),
      delay: view.getUint16(24, true),
      button: view.getUint16(26, true),
      interval: view.getUint16(28, true),
      start: view.getInt16(30, true),
      end: view.getInt16(32, true),
      attack_length: view.getUint16(36, true),
      attack_level: view.getUint16(38, true),
      fade_length: view.getUint16(40, true),
      fade_level: view.getUint16(42, true),
      free: null,
      address: null,
    } as RawHapticRamp;

    return new HapticRamp(result);
  }
}
