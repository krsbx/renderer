import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';

export class HIDDeviceInfo {
  public static readonly BYTE_SIZE = 80;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, HIDDeviceInfo.BYTE_SIZE);
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
    const buffer = new Uint8Array(HIDDeviceInfo.BYTE_SIZE);

    return buffer;
  }

  public get path() {
    const pathPtr = this.$view.getBigUint64(
      ByteOffset.path,
      true
    ) as unknown as Pointer;

    return new CString(pathPtr);
  }

  public set path(value: CString) {
    this.$view.setBigUint64(ByteOffset.path, BigInt(value.ptr), true);
  }

  public get vendor_id() {
    return this.$view.getUint16(ByteOffset.vendor_id, true);
  }

  public set vendor_id(value: number) {
    this.$view.setUint16(ByteOffset.vendor_id, value, true);
  }

  public get product_id() {
    return this.$view.getUint16(ByteOffset.product_id, true);
  }

  public set product_id(value: number) {
    this.$view.setUint16(ByteOffset.product_id, value, true);
  }

  public get serial_number() {
    const serialNumberPtr = this.$view.getBigUint64(
      ByteOffset.serial_number,
      true
    ) as unknown as Pointer;

    return new CString(serialNumberPtr);
  }

  public set serial_number(value: CString) {
    this.$view.setBigUint64(ByteOffset.serial_number, BigInt(value.ptr), true);
  }

  public get release_number() {
    return this.$view.getUint16(ByteOffset.release_number, true);
  }

  public set release_number(value: number) {
    this.$view.setUint16(ByteOffset.serial_number, value, true);
  }

  public get manufacturer_string() {
    const manufacturerStringPtr = this.$view.getBigUint64(
      ByteOffset.manufacturer_string,
      true
    ) as unknown as Pointer;

    return new CString(manufacturerStringPtr);
  }

  public set manufacturer_string(value: CString) {
    this.$view.setBigUint64(
      ByteOffset.manufacturer_string,
      BigInt(value.ptr),
      true
    );
  }

  public get product_string() {
    const productStringPtr = this.$view.getBigUint64(
      ByteOffset.product_string,
      true
    ) as unknown as Pointer;

    return new CString(productStringPtr);
  }

  public set product_string(value: CString) {
    this.$view.setBigUint64(ByteOffset.product_string, BigInt(value.ptr), true);
  }

  public get usage_page() {
    return this.$view.getUint16(ByteOffset.usage_page, true);
  }

  public set usage_page(value: number) {
    this.$view.setUint16(ByteOffset.usage_page, value, true);
  }

  public get usage() {
    return this.$view.getUint16(ByteOffset.usage, true);
  }

  public set usage(value: number) {
    this.$view.setUint16(ByteOffset.usage, value, true);
  }

  public get interface_number() {
    return this.$view.getInt32(ByteOffset.interface_number, true);
  }

  public set interface_number(value: number) {
    this.$view.setInt32(ByteOffset.interface_number, value, true);
  }

  public get interface_class() {
    return this.$view.getInt32(ByteOffset.interface_class, true);
  }

  public set interface_class(value: number) {
    this.$view.setInt32(ByteOffset.interface_class, value, true);
  }

  public get interface_subclass() {
    return this.$view.getInt32(ByteOffset.interface_subclass, true);
  }

  public set interface_subclass(value: number) {
    this.$view.setInt32(ByteOffset.interface_subclass, value, true);
  }

  public get interface_protocol() {
    return this.$view.getInt32(ByteOffset.interface_protocol, true);
  }

  public set interface_protocol(value: number) {
    this.$view.setInt32(ByteOffset.interface_protocol, value, true);
  }

  public get bus_type() {
    return this.$view.getInt32(ByteOffset.bus_type, true);
  }

  public set bus_type(value: number) {
    this.$view.setInt32(ByteOffset.bus_type, value, true);
  }

  public get next(): HIDDeviceInfo | null {
    const next = this.$view.getBigUint64(
      ByteOffset.next,
      true
    ) as unknown as Pointer | null;

    if (!next || next === (0n as unknown as Pointer)) return null;

    return new HIDDeviceInfo(next);
  }
}
