import type { Int32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { ByteOffset } from './constant';

export class DateTime extends BaseStruct {
  public static override readonly BYTE_SIZE = 36;

  public get year() {
    return this.$view.getInt32(ByteOffset.year, true) as Int32;
  }

  public set year(value: Int32) {
    this.$view.setInt32(ByteOffset.year, value, true);
  }

  public get month() {
    return this.$view.getInt32(ByteOffset.month, true) as Int32;
  }

  public set month(value: Int32) {
    this.$view.setInt32(ByteOffset.month, value, true);
  }

  public get day() {
    return this.$view.getInt32(ByteOffset.day, true) as Int32;
  }

  public set day(value: Int32) {
    this.$view.setInt32(ByteOffset.day, value, true);
  }

  public get hour() {
    return this.$view.getInt32(ByteOffset.hour, true) as Int32;
  }

  public set hour(value: Int32) {
    this.$view.setInt32(ByteOffset.hour, value, true);
  }

  public get minute() {
    return this.$view.getInt32(ByteOffset.minute, true) as Int32;
  }

  public set minute(value: Int32) {
    this.$view.setInt32(ByteOffset.minute, value, true);
  }

  public get second() {
    return this.$view.getInt32(ByteOffset.second, true) as Int32;
  }

  public set second(value: Int32) {
    this.$view.setInt32(ByteOffset.second, value, true);
  }

  public get nanosecond() {
    return this.$view.getInt32(ByteOffset.nanosecond, true) as Int32;
  }

  public set nanosecond(value: Int32) {
    this.$view.setInt32(ByteOffset.nanosecond, value, true);
  }

  public get dayOfWeek() {
    return this.$view.getInt32(ByteOffset.day_of_week, true) as Int32;
  }

  public set dayOfWeek(value: Int32) {
    this.$view.setInt32(ByteOffset.day_of_week, value, true);
  }

  public get utcOffset() {
    return this.$view.getInt32(ByteOffset.utc_offset, true) as Int32;
  }

  public set utcOffset(value: Int32) {
    this.$view.setInt32(ByteOffset.utc_offset, value, true);
  }
}
