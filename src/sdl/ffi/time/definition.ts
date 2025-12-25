import { type FFIFunction, FFIType } from 'bun:ffi';

export const TimeDefinition = {
  // bool SDL_GetDateTimeLocalePreferences(SDL_DateFormat *dateFormat, SDL_TimeFormat *timeFormat);  // Gets the current preferred date and time format for the system locale.
  SDL_GetDateTimeLocalePreferences: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_GetCurrentTime(SDL_Time *ticks);                                                       // Gets the current value of the system realtime clock in nanoseconds since Jan 1, 1970 in Universal Coordinated Time (UTC).
  SDL_GetCurrentTime: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_TimeToDateTime(SDL_Time ticks, SDL_DateTime *dt, bool localTime);                      // Converts an SDL_Time in nanoseconds since the epoch to a calendar time in the SDL_DateTime format.
  SDL_TimeToDateTime: {
    args: [FFIType.i64, FFIType.ptr, FFIType.bool],
    returns: FFIType.bool,
  },
  // bool SDL_DateTimeToTime(const SDL_DateTime *dt, SDL_Time *ticks);                               // Converts a calendar time to an SDL_Time in nanoseconds since the epoch.
  SDL_DateTimeToTime: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_TimeToWindows(SDL_Time ticks, Uint32 *dwLowDateTime, Uint32 *dwHighDateTime);          // Converts an SDL time into a Windows FILETIME (100-nanosecond intervals since January 1, 1601).
  SDL_TimeToWindows: {
    args: [FFIType.i64, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_Time SDL_TimeFromWindows(Uint32 dwLowDateTime, Uint32 dwHighDateTime);                      // Converts a Windows FILETIME (100-nanosecond intervals since January 1, 1601) to an SDL time.
  SDL_TimeFromWindows: {
    args: [FFIType.u32, FFIType.u32],
    returns: FFIType.i64,
  },
  // int SDL_GetDaysInMonth(int year, int month);                                                    // Get the number of days in a month for a given year.
  SDL_GetDaysInMonth: {
    args: [FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_GetDayOfYear(int year, int month, int day);                                             // Get the day of year for a calendar date.
  SDL_GetDayOfYear: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
  // int SDL_GetDayOfWeek(int year, int month, int day);                                             // Get the day of week for a calendar date.
  SDL_GetDayOfWeek: {
    args: [FFIType.i32, FFIType.i32, FFIType.i32],
    returns: FFIType.i32,
  },
} satisfies Record<string, FFIFunction>;
