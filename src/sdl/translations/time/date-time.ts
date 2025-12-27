import { read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../..';
import type { RawDateTime } from './types';

export class DateTime implements RawDateTime {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  nanosecond: number;
  day_of_week: number;
  utc_offset: number;
  free: (() => void) | null;
  address: Pointer | null;

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

    buffer[0] = this.year;
    buffer[1] = this.month;
    buffer[2] = this.day;
    buffer[3] = this.hour;
    buffer[4] = this.minute;
    buffer[5] = this.second;
    buffer[6] = this.nanosecond;
    buffer[7] = this.day_of_week;
    buffer[8] = this.utc_offset;

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Int32Array(9);

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

  public static fromMemory(dateTime: Int32Array) {
    const result = {
      year: dateTime[0],
      month: dateTime[1],
      day: dateTime[2],
      hour: dateTime[3],
      minute: dateTime[4],
      second: dateTime[5],
      nanosecond: dateTime[6],
      day_of_week: dateTime[7],
      utc_offset: dateTime[8],
      free: null,
      address: null,
    } as RawDateTime;

    return new DateTime(result);
  }
}
