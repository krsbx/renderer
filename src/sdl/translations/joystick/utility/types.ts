import type { SensorType } from '../../../ffi/sensor/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

export interface RawVirtualJoystickTouchpadDesc
  extends FreeAddress,
    MemoryAddress {
  nfingers: number;
  padding: [padding1: number, padding2: number, padding: 3];
}

export interface RawVirtualJoystickSensorDesc
  extends FreeAddress,
    MemoryAddress {
  type: SensorType;
  rate: number;
}
