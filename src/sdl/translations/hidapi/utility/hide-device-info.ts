import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { HIDBusType } from '../../../ffi/hidapi/constant';
import type { RawHIDDeviceInfo } from './types';

export class HIDDeviceInfo implements RawHIDDeviceInfo {
  public static readonly BYTE_SIZE = 80;

  public path: string;
  public vendor_id: number;
  public product_id: number;
  public serial_number: string;
  public release_number: number;
  public manufacturer_string: string;
  public product_string: string;
  public usage_page: number;
  public usage: number;
  public interface_number: number;
  public interface_class: number;
  public interface_subclass: number;
  public interface_protocol: number;
  public bus_type: HIDBusType;
  public next: Pointer | null;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawHIDDeviceInfo) {
    this.path = options.path;
    this.vendor_id = options.vendor_id;
    this.product_id = options.product_id;
    this.serial_number = options.serial_number;
    this.release_number = options.release_number;
    this.manufacturer_string = options.manufacturer_string;
    this.product_string = options.product_string;
    this.usage_page = options.usage_page;
    this.usage = options.usage;
    this.interface_number = options.interface_number;
    this.interface_class = options.interface_class;
    this.interface_subclass = options.interface_subclass;
    this.interface_protocol = options.interface_protocol;
    this.bus_type = options.bus_type;
    this.next = options.next;
    this.free = options.free;
    this.address = options.address;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL | null = null) {
    const pathPtr = read.ptr(pointer, 0) as Pointer;
    const serialNumberPtr = read.ptr(pointer, 16) as Pointer;
    const manufacturerStringPtr = read.ptr(pointer, 32) as Pointer;
    const productStringPtr = read.ptr(pointer, 40) as Pointer;
    const nextPtr = read.ptr(pointer, 72) as Pointer | null;

    const result = {
      path: new CString(pathPtr).toString(),
      vendor_id: read.u16(pointer, 8),
      product_id: read.u16(pointer, 10),
      serial_number: new CString(serialNumberPtr).toString(),
      release_number: read.u16(pointer, 24),
      manufacturer_string: new CString(manufacturerStringPtr).toString(),
      product_string: new CString(productStringPtr).toString(),
      usage_page: read.u16(pointer, 48),
      usage: read.u16(pointer, 50),
      interface_number: read.i32(pointer, 52),
      interface_class: read.i32(pointer, 56),
      interface_subclass: read.i32(pointer, 60),
      interface_protocol: read.i32(pointer, 64),
      bus_type: read.i32(pointer, 68),
      next: nextPtr,
      free: sdl ? () => sdl.symbols.SDL_free(pointer) : null,
      address: pointer,
    } as RawHIDDeviceInfo;

    return new HIDDeviceInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const pathPtr = view.getBigUint64(0, true) as unknown as Pointer;
    const serialNumberPtr = view.getBigUint64(16, true) as unknown as Pointer;
    const manufacturerStringPtr = view.getBigUint64(
      32,
      true
    ) as unknown as Pointer;
    const productStringPtr = view.getBigUint64(40, true) as unknown as Pointer;
    const nextPtr = view.getBigUint64(72, true) as unknown as Pointer | null;

    const result = {
      path: new CString(pathPtr).toString(),
      vendor_id: view.getUint16(8, true),
      product_id: view.getUint16(10, true),
      serial_number: new CString(serialNumberPtr).toString(),
      release_number: view.getUint16(24, true),
      manufacturer_string: new CString(manufacturerStringPtr).toString(),
      product_string: new CString(productStringPtr).toString(),
      usage_page: view.getUint16(48, true),
      usage: view.getUint16(50, true),
      interface_number: view.getInt32(52, true),
      interface_class: view.getInt32(56, true),
      interface_subclass: view.getInt32(60, true),
      interface_protocol: view.getInt32(64, true),
      bus_type: view.getInt32(68, true),
      next: nextPtr,
      free: null,
      address: null,
    } as RawHIDDeviceInfo;

    return new HIDDeviceInfo(result);
  }
}
