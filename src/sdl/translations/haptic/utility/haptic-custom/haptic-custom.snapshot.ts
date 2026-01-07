import { ptr, read, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import { HapticDirection } from '../haptic-direction/haptic-direction.snapshot';
import { ByteOffset } from './constant';
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

    view.setUint16(ByteOffset.type, this.type, true);
    buffer.set(this.direction.toMemory(), ByteOffset.direction);

    view.setUint32(ByteOffset.length, this.length, true);
    view.setUint16(ByteOffset.delay, this.delay, true);
    view.setUint16(ByteOffset.button, this.button, true);
    view.setUint16(ByteOffset.interval, this.interval, true);

    view.setUint8(ByteOffset.channels, this.channels);
    // Offset 31 is padding
    view.setUint16(ByteOffset.period, this.period, true);
    view.setUint16(ByteOffset.samples, this.samples, true);

    // POINTER MANAGEMENT (Offset 40)
    // We must keep a reference to 'this.data' to prevent GC from moving it.
    // In Bun, ptr() gets the address of the underlying buffer.
    this._dataRaw = new Uint8Array(
      this.data.buffer,
      this.data.byteOffset,
      this.data.byteLength
    );

    // We write the 64-bit address of the data array into the struct memory
    view.setBigUint64(ByteOffset.data, BigInt(ptr(this._dataRaw)), true);

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
    const samplesCount = read.u16(pointer, ByteOffset.samples);
    const channelsCount = read.u8(pointer, ByteOffset.channels);
    const dataPtr = read.ptr(pointer, ByteOffset.data) as Pointer;
    const dataByteLength = samplesCount * channelsCount * 2;
    const dataRawBuffer = toArrayBuffer(dataPtr, 0, dataByteLength);

    const result = {
      type: read.u16(pointer, 0),
      direction: HapticDirection.fromPointer(
        (BigInt(pointer) + BigInt(ByteOffset.direction)) as unknown as Pointer,
        sdl
      ),
      length: read.u32(pointer, ByteOffset.length),
      delay: read.u16(pointer, ByteOffset.delay),
      button: read.u16(pointer, ByteOffset.button),
      interval: read.u16(pointer, ByteOffset.interval),
      channels: channelsCount,
      period: read.u16(pointer, ByteOffset.period),
      samples: samplesCount,
      data: new Uint16Array(dataRawBuffer),
      attack_length: read.u16(pointer, ByteOffset.attack_length),
      attack_level: read.u16(pointer, ByteOffset.attack_level),
      fade_length: read.u16(pointer, ByteOffset.fade_length),
      fade_level: read.u16(pointer, ByteOffset.fade_level),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawHapticCustom;

    return new HapticCustom(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const samplesCount = view.getUint16(ByteOffset.samples, true);
    const channelsCount = view.getUint8(ByteOffset.channels);
    const dataPtr = view.getBigUint64(
      ByteOffset.data,
      true
    ) as unknown as Pointer;
    const dataByteLength = samplesCount * channelsCount * 2;
    const dataRawBuffer = toArrayBuffer(dataPtr, 0, dataByteLength);

    const result = {
      type: view.getUint16(ByteOffset.type, true),
      direction: HapticDirection.fromMemory(
        data.slice(
          ByteOffset.direction,
          HapticDirection.BYTE_SIZE + ByteOffset.direction
        )
      ),
      length: view.getUint32(ByteOffset.length, true),
      delay: view.getUint16(ByteOffset.delay, true),
      button: view.getUint16(ByteOffset.button, true),
      interval: view.getUint16(ByteOffset.interval, true),
      channels: channelsCount,
      period: view.getUint16(ByteOffset.period, true),
      samples: samplesCount,
      data: new Uint16Array(dataRawBuffer),
      attack_length: view.getUint16(ByteOffset.attack_length, true),
      attack_level: view.getUint16(ByteOffset.attack_level, true),
      fade_length: view.getUint16(ByteOffset.fade_length, true),
      fade_level: view.getUint16(ByteOffset.fade_level, true),
      free: null,
      address: null,
    } as RawHapticCustom;

    return new HapticCustom(result);
  }
}
