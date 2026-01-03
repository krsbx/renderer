import type { Pointer } from 'bun:ffi';
import type { HIDBusType } from '../../../ffi/hidapi/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawHIDDeviceInfo extends FreeAddress, MemoryAddress {
  /** Platform-specific device path */
  path: string;
  /** Device Vendor ID */
  vendor_id: number;
  /** Device Product ID */
  product_id: number;
  /** Serial Number */
  serial_number: string;
  /** Device Release Number in binary-coded decimal,
        also known as Device Version Number */
  release_number: number;
  /** Manufacturer String */
  manufacturer_string: string;
  /** Product string */
  product_string: string;
  /** Usage Page for this Device/Interface
        (Windows/Mac/hidraw only) */
  usage_page: number;
  /** Usage for this Device/Interface
        (Windows/Mac/hidraw only) */
  usage: number;
  /** The USB interface which this logical device
        represents.

        Valid only if the device is a USB HID device.
        Set to -1 in all other cases.
    */
  interface_number: number;

  /** Additional information about the USB interface.
        Valid on libusb and Android implementations. */
  interface_class: number;
  interface_subclass: number;
  interface_protocol: number;

  /** Underlying bus type */
  bus_type: HIDBusType;

  /** Pointer to the next device */
  next: Pointer | null;
}
