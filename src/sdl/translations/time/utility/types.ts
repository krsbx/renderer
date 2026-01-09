import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawDateTime extends FreeAddress, MemoryAddress {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  nanosecond: number;
  day_of_week: number;
  utc_offset: number;
}
