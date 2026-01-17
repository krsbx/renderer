import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import type { DateFormat, TimeFormat } from '../../../ffi/time/constant';
import { CStruct } from '../../../utility/cstruct';
import { DateTime } from '../utility';

export function getDateTimeLocalePreferences(this: SDL) {
  const dateFormatStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const timeFormatStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetDateTimeLocalePreferences(
    dateFormatStruct.$address,
    timeFormatStruct.$address
  );

  if (!success) return null;

  return {
    dateFormat: dateFormatStruct.getValue(0, 'i32') as DateFormat,
    timeFormat: timeFormatStruct.getValue(0, 'i32') as TimeFormat,
  };
}

export function getCurrentTime(this: SDL) {
  const ticksStruct = new CStruct({ length: CStruct.BYTE_SIZE.i64 });

  const success = this.symbols.SDL_GetCurrentTime(ticksStruct.$address);

  if (!success) return null;

  return ticksStruct.getValue(0, 'i64');
}

export function timeToDateTime(
  this: SDL,
  options: {
    ticks: bigint;
    localTime: boolean;
  }
) {
  const dt = new DateTime(DateTime.allocMemory());

  const success = this.symbols.SDL_TimeToDateTime(
    options.ticks,
    dt.$address,
    options.localTime
  );

  if (!success) return null;

  return dt;
}

export function dateTimeToTime(this: SDL, dt: DateTime | Pointer) {
  const dtPtr = dt instanceof DateTime ? dt.$address : dt;
  const ticksStruct = new CStruct({ length: CStruct.BYTE_SIZE.i64 });

  const success = this.symbols.SDL_DateTimeToTime(dtPtr, ticksStruct.$address);

  if (!success) return null;

  return ticksStruct.getValue(0, 'i64');
}

export function timeToWindows(this: SDL, ticks: bigint) {
  const lowStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });
  const highStruct = new CStruct({ length: CStruct.BYTE_SIZE.u32 });

  this.symbols.SDL_TimeToWindows(
    ticks,
    lowStruct.$address,
    highStruct.$address
  );

  return {
    dwLowDateTime: lowStruct.getValue(0, 'u32'),
    dwHighDateTime: highStruct.getValue(0, 'u32'),
  };
}

export function timeFromWindows(
  this: SDL,
  options: {
    dwLowDateTime: number;
    dwHighDateTime: number;
  }
) {
  return this.symbols.SDL_TimeFromWindows(
    options.dwLowDateTime,
    options.dwHighDateTime
  );
}

export function getDaysInMonth(
  this: SDL,
  options: {
    year: number;
    month: number;
  }
) {
  return this.symbols.SDL_GetDaysInMonth(options.year, options.month);
}

export function getDayOfYear(
  this: SDL,
  options: {
    year: number;
    month: number;
    day: number;
  }
) {
  return this.symbols.SDL_GetDayOfYear(
    options.year,
    options.month,
    options.day
  );
}

export function getDayOfWeek(
  this: SDL,
  options: {
    year: number;
    month: number;
    day: number;
  }
) {
  return this.symbols.SDL_GetDayOfWeek(
    options.year,
    options.month,
    options.day
  );
}
