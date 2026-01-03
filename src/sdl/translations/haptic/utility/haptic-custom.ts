import { ptr, read, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { HapticDirection } from './haptic-direction';
import type { RawHapticCustom } from './types';

export class HapticCustom implements RawHapticCustom {
  public static readonly BYTE_SIZE = 64;

  public type: number;
  public direction: HapticDirection;
  public length: number;
  public delay: number;
  public button: number;
  public interval: number;
  public channels: number;
  public period: number;
  public samples: number;
  public data: Uint16Array;
  public attack_length: number;
  public attack_level: number;
  public fade_length: number;
  public fade_level: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  private _dataRaw: Uint8Array | null = null; // Keep alive reference

  public constructor(options: RawHapticCustom) {
    this.type = options.type;
    this.direction = options.direction;
    this.length = options.length;
    this.delay = options.delay;
    this.button = options.button;
    this.interval = options.interval;
    this.channels = options.channels;
    this.period = options.period;
    this.samples = options.samples;
    this.data = options.data;
    this.attack_length = options.attack_length;
    this.attack_level = options.attack_level;
    this.fade_length = options.fade_length;
    this.fade_level = options.fade_level;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = HapticCustom.allocMemory(); // 64 or 72 bytes
    const view = new DataView(buffer.buffer);

    view.setUint16(0, this.type, true);
    buffer.set(this.direction.toMemory(), 4);

    view.setUint32(20, this.length, true);
    view.setUint16(24, this.delay, true);
    view.setUint16(26, this.button, true);
    view.setUint16(28, this.interval, true);

    view.setUint8(30, this.channels);
    // Offset 31 is padding
    view.setUint16(32, this.period, true);
    view.setUint16(34, this.samples, true);

    // POINTER MANAGEMENT (Offset 40)
    // We must keep a reference to 'this.data' to prevent GC from moving it.
    // In Bun, ptr() gets the address of the underlying buffer.
    this._dataRaw = new Uint8Array(
      this.data.buffer,
      this.data.byteOffset,
      this.data.byteLength
    );

    // We write the 64-bit address of the data array into the struct memory
    view.setBigUint64(40, BigInt(ptr(this._dataRaw)), true);

    view.setUint16(48, this.attack_length, true);
    view.setUint16(50, this.attack_level, true);
    view.setUint16(52, this.fade_length, true);
    view.setUint16(54, this.fade_level, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const samplesCount = read.u16(pointer, 34);
    const channelsCount = read.u8(pointer, 30);
    const dataPtr = read.ptr(pointer, 40) as Pointer;
    const dataByteLength = samplesCount * channelsCount * 2;
    const dataRawBuffer = toArrayBuffer(dataPtr, 0, dataByteLength);

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
      channels: channelsCount,
      period: read.u16(pointer, 32),
      samples: samplesCount,
      data: new Uint16Array(dataRawBuffer),
      attack_length: read.u16(pointer, 48),
      attack_level: read.u16(pointer, 50),
      fade_length: read.u16(pointer, 52),
      fade_level: read.u16(pointer, 54),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawHapticCustom;

    return new HapticCustom(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const samplesCount = view.getUint16(34, true);
    const channelsCount = view.getUint8(30);
    const dataPtr = view.getBigUint64(40, true) as unknown as Pointer;
    const dataByteLength = samplesCount * channelsCount * 2;
    const dataRawBuffer = toArrayBuffer(dataPtr, 0, dataByteLength);

    const result = {
      type: view.getUint16(0, true),
      direction: HapticDirection.fromMemory(data.slice(4, 20)),
      length: view.getUint32(20, true),
      delay: view.getUint16(24, true),
      button: view.getUint16(26, true),
      interval: view.getUint16(28, true),
      channels: channelsCount,
      period: view.getUint16(32, true),
      samples: samplesCount,
      data: new Uint16Array(dataRawBuffer),
      attack_length: view.getUint16(48, true),
      attack_level: view.getUint16(50, true),
      fade_length: view.getUint16(52, true),
      fade_level: view.getUint16(54, true),
      free: null,
      address: null,
    } as RawHapticCustom;

    return new HapticCustom(result);
  }
}
