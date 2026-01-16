import type { Brand } from '../../types/shared';

const RawHIDBusType = {
  /** Unknown bus type */
  UNKNOWN: 0x00,

  /** USB bus
       Specifications:
       https://usb.org/hid */
  USB: 0x01,

  /** Bluetooth or Bluetooth LE bus
       Specifications:
       https://www.bluetooth.com/specifications/specs/human-interface-device-profile-1-1-1/
       https://www.bluetooth.com/specifications/specs/hid-service-1-0/
       https://www.bluetooth.com/specifications/specs/hid-over-gatt-profile-1-0/ */
  BLUETOOTH: 0x02,

  /** I2C bus
       Specifications:
       https://docs.microsoft.com/previous-versions/windows/hardware/design/dn642101(v=vs.85) */
  I2C: 0x03,

  /** SPI bus
       Specifications:
       https://www.microsoft.com/download/details.aspx?id=103325 */
  SPI: 0x04,
} as const;

export const HIDBusType = RawHIDBusType as Readonly<
  Record<keyof typeof RawHIDBusType, Brand<number, 'HIDBusType'>>
>;

export type HIDBusType = (typeof HIDBusType)[keyof typeof HIDBusType];
