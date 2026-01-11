import { CString, ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type { HIDBusType } from '../../../../ffi/hidapi/constant';
import { CWideString } from '../../../../utility/cwstring';
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
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get path() {
    const pathAddr = this.$view.getBigUint64(ByteOffset.path, true);
    const pathPtr = Number(pathAddr) as Pointer;

    return new CString(pathPtr);
  }

  public set path(value: CString) {
    this.$view.setBigUint64(ByteOffset.path, BigInt(value.ptr), true);
  }

  public get vendorId() {
    return this.$view.getUint16(ByteOffset.vendor_id, true);
  }

  public set vendorId(value: number) {
    this.$view.setUint16(ByteOffset.vendor_id, value, true);
  }

  public get productId() {
    return this.$view.getUint16(ByteOffset.product_id, true);
  }

  public set productId(value: number) {
    this.$view.setUint16(ByteOffset.product_id, value, true);
  }

  public get serialNumber() {
    const serialNumberAddr = this.$view.getBigUint64(
      ByteOffset.serial_number,
      true
    );
    const serialNumberPtr = Number(serialNumberAddr) as Pointer;

    return new CWideString(serialNumberPtr);
  }

  public set serialNumber(value: CWideString) {
    this.$view.setBigUint64(ByteOffset.serial_number, BigInt(value.ptr), true);
  }

  public get releaseNumber() {
    return this.$view.getUint16(ByteOffset.release_number, true);
  }

  public set releaseNumber(value: number) {
    this.$view.setUint16(ByteOffset.serial_number, value, true);
  }

  public get manufacturerString() {
    const manufacturerStringAddr = this.$view.getBigUint64(
      ByteOffset.manufacturer_string,
      true
    );
    const manufacturerStringPtr = Number(manufacturerStringAddr) as Pointer;

    return new CWideString(manufacturerStringPtr);
  }

  public set manufacturerString(value: CWideString) {
    this.$view.setBigUint64(
      ByteOffset.manufacturer_string,
      BigInt(value.ptr),
      true
    );
  }

  public get productString() {
    const productStringAddr = this.$view.getBigUint64(
      ByteOffset.product_string,
      true
    );
    const productStringPtr = Number(productStringAddr) as Pointer;

    return new CWideString(productStringPtr);
  }

  public set productString(value: CWideString) {
    this.$view.setBigUint64(ByteOffset.product_string, BigInt(value.ptr), true);
  }

  public get usagePage() {
    return this.$view.getUint16(ByteOffset.usage_page, true);
  }

  public set usagePage(value: number) {
    this.$view.setUint16(ByteOffset.usage_page, value, true);
  }

  public get usage() {
    return this.$view.getUint16(ByteOffset.usage, true);
  }

  public set usage(value: number) {
    this.$view.setUint16(ByteOffset.usage, value, true);
  }

  public get interfaceNumber() {
    return this.$view.getInt32(ByteOffset.interface_number, true);
  }

  public set interfaceNumber(value: number) {
    this.$view.setInt32(ByteOffset.interface_number, value, true);
  }

  public get interfaceClass() {
    return this.$view.getInt32(ByteOffset.interface_class, true);
  }

  public set interfaceClass(value: number) {
    this.$view.setInt32(ByteOffset.interface_class, value, true);
  }

  public get interfaceSubclass() {
    return this.$view.getInt32(ByteOffset.interface_subclass, true);
  }

  public set interfaceSubclass(value: number) {
    this.$view.setInt32(ByteOffset.interface_subclass, value, true);
  }

  public get interfaceProtocol() {
    return this.$view.getInt32(ByteOffset.interface_protocol, true);
  }

  public set interfaceProtocol(value: number) {
    this.$view.setInt32(ByteOffset.interface_protocol, value, true);
  }

  public get busType() {
    return this.$view.getInt32(ByteOffset.bus_type, true) as HIDBusType;
  }

  public set busType(value: HIDBusType) {
    this.$view.setInt32(ByteOffset.bus_type, value, true);
  }

  public get next(): HIDDeviceInfo | null {
    const nextAddr = this.$view.getBigUint64(ByteOffset.next, true) as
      | bigint
      | null;

    if (!nextAddr || nextAddr === 0n) return null;

    const nextPtr = Number(nextAddr) as Pointer;

    return new HIDDeviceInfo(nextPtr);
  }
}
