import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { ByteOffset } from './constant';
import type { RawDateTime } from './types';

export class DateTime implements RawDateTime {
  public static readonly BYTE_SIZE = 36;

  public year: number;
  public month: number;
  public day: number;
  public hour: number;
  public minute: number;
  public second: number;
  public nanosecond: number;
  public day_of_week: number;
  public utc_offset: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawDateTime) {
    this.year = options.year;
    this.month = options.month;
    this.day = options.day;
    this.hour = options.hour;
    this.minute = options.minute;
    this.second = options.second;
    this.nanosecond = options.nanosecond;
    this.day_of_week = options.day_of_week;
    this.utc_offset = options.utc_offset;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = DateTime.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setInt32(ByteOffset.year, this.year, true);
    view.setInt32(ByteOffset.month, this.month, true);
    view.setInt32(ByteOffset.day, this.day, true);
    view.setInt32(ByteOffset.hour, this.hour, true);
    view.setInt32(ByteOffset.minute, this.minute, true);
    view.setInt32(ByteOffset.second, this.second, true);
    view.setInt32(ByteOffset.nanosecond, this.nanosecond, true);
    view.setInt32(ByteOffset.day_of_week, this.day_of_week, true);
    view.setInt32(ByteOffset.utc_offset, this.utc_offset, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const result = {
      year: read.i32(pointer, 0),
      month: read.i32(pointer, 4),
      day: read.i32(pointer, 8),
      hour: read.i32(pointer, 12),
      minute: read.i32(pointer, 16),
      second: read.i32(pointer, 20),
      nanosecond: read.i32(pointer, 24),
      day_of_week: read.i32(pointer, 28),
      utc_offset: read.i32(pointer, 32),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawDateTime;

    return new DateTime(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      year: view.getInt32(ByteOffset.year, true),
      month: view.getInt32(ByteOffset.month, true),
      day: view.getInt32(ByteOffset.day, true),
      hour: view.getInt32(ByteOffset.hour, true),
      minute: view.getInt32(ByteOffset.minute, true),
      second: view.getInt32(ByteOffset.second, true),
      nanosecond: view.getInt32(ByteOffset.nanosecond, true),
      day_of_week: view.getInt32(ByteOffset.day_of_week, true),
      utc_offset: view.getInt32(ByteOffset.utc_offset, true),
      free: null,
      address: null,
    } as RawDateTime;

    return new DateTime(result);
  }
}
