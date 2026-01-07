import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { HapticEffectType } from '../../../../ffi/haptic/constant';
import { HapticDirection } from '../haptic-direction/haptic-direction.snapshot';
import { ByteOffset } from './constant';
import type { RawHapticConstant } from './types';

export class HapticConstant implements RawHapticConstant {
  public static readonly BYTE_SIZE = 40;

  public type: HapticEffectType;
  public direction: HapticDirection;
  public length: number;
  public delay: number;
  public button: number;
  public interval: number;
  public level: number;
  public attack_length: number;
  public attack_level: number;
  public fade_length: number;
  public fade_level: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawHapticConstant) {
    this.type = options.type;
    this.direction = options.direction;
    this.length = options.length;
    this.delay = options.delay;
    this.button = options.button;
    this.interval = options.interval;
    this.level = options.level;
    this.attack_length = options.attack_length;
    this.attack_level = options.attack_level;
    this.fade_length = options.fade_length;
    this.fade_level = options.fade_level;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = HapticConstant.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint16(ByteOffset.type, this.type, true);
    // Direction starts at offset 4 (handles the 2-byte padding after type)
    buffer.set(this.direction.toMemory(), ByteOffset.direction);

    view.setUint32(ByteOffset.length, this.length, true);
    view.setUint16(ByteOffset.delay, this.delay, true);
    view.setUint16(ByteOffset.button, this.button, true);
    view.setUint16(ByteOffset.interval, this.interval, true);
    view.setInt16(ByteOffset.level, this.level, true);
    view.setUint16(ByteOffset.attack_length, this.attack_length, true);
    view.setUint16(ByteOffset.attack_level, this.attack_level, true);
    view.setUint16(ByteOffset.fade_length, this.fade_length, true);
    view.setUint16(ByteOffset.fade_level, this.fade_level, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
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
      level: read.i16(pointer, ByteOffset.level),
      attack_length: read.u16(pointer, ByteOffset.attack_length),
      attack_level: read.u16(pointer, ByteOffset.attack_level),
      fade_length: read.u16(pointer, ByteOffset.fade_length),
      fade_level: read.u16(pointer, ByteOffset.fade_level),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawHapticConstant;

    return new HapticConstant(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      type: view.getUint16(ByteOffset.type, true),
      direction: HapticDirection.fromMemory(
        data.slice(ByteOffset.direction, 20)
      ),
      length: view.getUint32(ByteOffset.length, true),
      delay: view.getUint16(ByteOffset.delay, true),
      button: view.getUint16(ByteOffset.button, true),
      interval: view.getUint16(ByteOffset.interval, true),
      level: view.getInt16(ByteOffset.level, true),
      attack_length: view.getUint16(ByteOffset.attack_length, true),
      attack_level: view.getUint16(ByteOffset.attack_level, true),
      fade_length: view.getUint16(ByteOffset.fade_length, true),
      fade_level: view.getUint16(ByteOffset.fade_level, true),
      free: null,
      address: null,
    } as RawHapticConstant;

    return new HapticConstant(result);
  }
}
