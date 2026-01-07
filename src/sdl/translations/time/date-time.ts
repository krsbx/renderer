import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class DateTime {
  public static readonly BYTE_SIZE = 36;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, DateTime.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get year() {
    return this.$view.getInt32(ByteOffset.year, true);
  }

  public set year(value: number) {
    this.$view.setInt32(ByteOffset.year, value, true);
  }

  public get month() {
    return this.$view.getInt32(ByteOffset.month, true);
  }

  public set month(value: number) {
    this.$view.setInt32(ByteOffset.month, value, true);
  }

  public get day() {
    return this.$view.getInt32(ByteOffset.day, true);
  }

  public set day(value: number) {
    this.$view.setInt32(ByteOffset.day, value, true);
  }

  public get hour() {
    return this.$view.getInt32(ByteOffset.hour, true);
  }

  public set hour(value: number) {
    this.$view.setInt32(ByteOffset.hour, value, true);
  }

  public get minute() {
    return this.$view.getInt32(ByteOffset.minute, true);
  }

  public set minute(value: number) {
    this.$view.setInt32(ByteOffset.minute, value, true);
  }

  public get second() {
    return this.$view.getInt32(ByteOffset.second, true);
  }

  public set second(value: number) {
    this.$view.setInt32(ByteOffset.second, value, true);
  }

  public get nanosecond() {
    return this.$view.getInt32(ByteOffset.nanosecond, true);
  }

  public set nanosecond(value: number) {
    this.$view.setInt32(ByteOffset.nanosecond, value, true);
  }

  public get day_of_week() {
    return this.$view.getInt32(ByteOffset.day_of_week, true);
  }

  public set day_of_week(value: number) {
    this.$view.setInt32(ByteOffset.day_of_week, value, true);
  }

  public get utc_offset() {
    return this.$view.getInt32(ByteOffset.utc_offset, true);
  }

  public set utc_offset(value: number) {
    this.$view.setInt32(ByteOffset.utc_offset, value, true);
  }
}
