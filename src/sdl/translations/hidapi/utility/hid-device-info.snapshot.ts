import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { HIDBusType } from '../../../ffi/hidapi/constant';
import { ByteOffset } from './constant';
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
    const pathPtr = read.ptr(pointer, ByteOffset.path) as Pointer;
    const serialNumberPtr = read.ptr(
      pointer,
      ByteOffset.serial_number
    ) as Pointer;
    const manufacturerStringPtr = read.ptr(
      pointer,
      ByteOffset.manufacturer_string
    ) as Pointer;
    const productStringPtr = read.ptr(
      pointer,
      ByteOffset.product_string
    ) as Pointer;
    const nextPtr = read.ptr(pointer, ByteOffset.next) as Pointer | null;

    const result = {
      path: new CString(pathPtr).toString(),
      vendor_id: read.u16(pointer, ByteOffset.vendor_id),
      product_id: read.u16(pointer, ByteOffset.product_id),
      serial_number: new CString(serialNumberPtr).toString(),
      release_number: read.u16(pointer, ByteOffset.release_number),
      manufacturer_string: new CString(manufacturerStringPtr).toString(),
      product_string: new CString(productStringPtr).toString(),
      usage_page: read.u16(pointer, ByteOffset.usage_page),
      usage: read.u16(pointer, ByteOffset.usage),
      interface_number: read.i32(pointer, ByteOffset.interface_number),
      interface_class: read.i32(pointer, ByteOffset.interface_class),
      interface_subclass: read.i32(pointer, ByteOffset.interface_subclass),
      interface_protocol: read.i32(pointer, ByteOffset.interface_protocol),
      bus_type: read.i32(pointer, ByteOffset.bus_type),
      next: nextPtr,
      free: sdl ? () => sdl.symbols.SDL_free(pointer) : null,
      address: pointer,
    } as RawHIDDeviceInfo;

    return new HIDDeviceInfo(result);
  }

  public static fromMemory(data: Uint8Array) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    const pathPtr = view.getBigUint64(
      ByteOffset.path,
      true
    ) as unknown as Pointer;
    const serialNumberPtr = view.getBigUint64(
      ByteOffset.serial_number,
      true
    ) as unknown as Pointer;
    const manufacturerStringPtr = view.getBigUint64(
      ByteOffset.manufacturer_string,
      true
    ) as unknown as Pointer;
    const productStringPtr = view.getBigUint64(
      ByteOffset.product_string,
      true
    ) as unknown as Pointer;
    const nextPtr = view.getBigUint64(
      ByteOffset.next,
      true
    ) as unknown as Pointer | null;

    const result = {
      path: new CString(pathPtr).toString(),
      vendor_id: view.getUint16(ByteOffset.vendor_id, true),
      product_id: view.getUint16(ByteOffset.product_id, true),
      serial_number: new CString(serialNumberPtr).toString(),
      release_number: view.getUint16(ByteOffset.release_number, true),
      manufacturer_string: new CString(manufacturerStringPtr).toString(),
      product_string: new CString(productStringPtr).toString(),
      usage_page: view.getUint16(ByteOffset.usage_page, true),
      usage: view.getUint16(ByteOffset.usage, true),
      interface_number: view.getInt32(ByteOffset.interface_number, true),
      interface_class: view.getInt32(ByteOffset.interface_class, true),
      interface_subclass: view.getInt32(ByteOffset.interface_subclass, true),
      interface_protocol: view.getInt32(ByteOffset.interface_protocol, true),
      bus_type: view.getInt32(ByteOffset.bus_type, true),
      next: nextPtr,
      free: null,
      address: null,
    } as RawHIDDeviceInfo;

    return new HIDDeviceInfo(result);
  }
}
