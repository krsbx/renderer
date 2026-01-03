import type { Library, Pointer } from 'bun:ffi';
import type { SensorType } from '../../../ffi/sensor/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { VirtualJoystickDescDefinition } from './definition';
import type { VirtualJoystickSensorDesc } from './virtual-joystick-sensor-desc';
import type { VirtualJoystickTouchpadDesc } from './virtual-joystick-touchpad-desc';

export interface RawVirtualJoystickTouchpadDesc
  extends FreeAddress,
    MemoryAddress {
  nfingers: number;
  padding: [padding1: number, padding2: number, padding3: number];
}

export interface RawVirtualJoystickSensorDesc
  extends FreeAddress,
    MemoryAddress {
  type: SensorType;
  rate: number;
}

export interface RawVirtualJoystickDesc extends FreeAddress, MemoryAddress {
  version: number;
  type: number;
  padding: number;
  vendor_id: number;
  product_id: number;
  naxes: number;
  nbuttons: number;
  nballs: number;
  nhats: number;
  ntouchpads: number;
  nsensors: number;
  padding2: [padding1: number, padding2: number];
  button_mask: number;
  axis_mask: number;
  name: string;
  touchpads: VirtualJoystickTouchpadDesc[];
  sensors: VirtualJoystickSensorDesc[];

  $ffi: Library<VirtualJoystickDescDefinition>;
}

export interface CreateFfiOptions {
  updatePtr: Pointer;
  setPlayerIndexPtr: Pointer;
  rumblePtr: Pointer;
  rumbleTriggersPtr: Pointer;
  setLEDPtr: Pointer;
  sendEffectPtr: Pointer;
  setSensorsEnabledPtr: Pointer;
  cleanupPtr: Pointer;
}

export interface SetPlayerIndexOptions {
  userData?: Pointer | null;
  player_index: number;
}

export interface RumbleOptions {
  userData?: Pointer | null;
  low_frequency_rumble: number;
  high_frequency_rumble: number;
}

export interface RumbleTriggersOptions {
  userData?: Pointer | null;
  left_rumble: number;
  right_rumble: number;
}

export interface SetLEDOptions {
  userData?: Pointer | null;
  r: number;
  g: number;
  b: number;
}

export interface SendEffectOptions {
  userData?: Pointer | null;
  data: Pointer;
  size: number;
}

export interface SetSensorsEnabledOptions {
  userData?: Pointer | null;
  enabled: boolean;
}
