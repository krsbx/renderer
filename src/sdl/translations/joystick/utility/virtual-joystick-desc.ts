import {
  CString,
  linkSymbols,
  read,
  type Library,
  type Pointer,
} from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { VirtualJoystickDescDefinition } from './definition';
import type {
  CreateFfiOptions,
  RawVirtualJoystickDesc,
  RumbleOptions,
  RumbleTriggersOptions,
  SendEffectOptions,
  SetLEDOptions,
  SetPlayerIndexOptions,
  SetSensorsEnabledOptions,
} from './types';
import { VirtualJoystickSensorDesc } from './virtual-joystick-sensor-desc';
import { VirtualJoystickTouchpadDesc } from './virtual-joystick-touchpad-desc';

export class VirtualJoystickDesc implements RawVirtualJoystickDesc {
  public version: number;
  public type: number;
  public padding: number;
  public vendor_id: number;
  public product_id: number;
  public naxes: number;
  public nbuttons: number;
  public nballs: number;
  public nhats: number;
  public ntouchpads: number;
  public nsensors: number;
  public padding2: [padding1: number, padding2: number];
  public button_mask: number;
  public axis_mask: number;
  public name: string;
  public touchpads: VirtualJoystickTouchpadDesc[];
  public sensors: VirtualJoystickSensorDesc[];
  public $ffi: Library<VirtualJoystickDescDefinition>;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawVirtualJoystickDesc) {
    this.version = options.version;
    this.type = options.type;
    this.padding = options.padding;
    this.vendor_id = options.vendor_id;
    this.product_id = options.product_id;
    this.naxes = options.naxes;
    this.nbuttons = options.nbuttons;
    this.nballs = options.nballs;
    this.nhats = options.nhats;
    this.ntouchpads = options.ntouchpads;
    this.nsensors = options.nsensors;
    this.padding2 = options.padding2;
    this.button_mask = options.button_mask;
    this.axis_mask = options.axis_mask;
    this.name = options.name;
    this.touchpads = options.touchpads;
    this.sensors = options.sensors;
    this.$ffi = options.$ffi;
    this.free = options.free;
    this.address = options.address;
  }

  public [Symbol.dispose]() {
    this.$ffi.close();
  }

  public update(userdata?: Pointer | null) {
    return this.$ffi.symbols.Update(userdata ?? null);
  }

  public setPlayerIndex(options: SetPlayerIndexOptions) {
    return this.$ffi.symbols.SetPlayerIndex(
      options.userData ?? null,
      options.player_index
    );
  }

  public rumble(options: RumbleOptions) {
    return this.$ffi.symbols.Rumble(
      options.userData ?? null,
      options.low_frequency_rumble,
      options.high_frequency_rumble
    );
  }

  public rumbleTriggers(options: RumbleTriggersOptions) {
    return this.$ffi.symbols.RumbleTriggers(
      options.userData ?? null,
      options.left_rumble,
      options.right_rumble
    );
  }

  public setLED(options: SetLEDOptions) {
    return this.$ffi.symbols.SetLED(
      options.userData ?? null,
      options.r,
      options.g,
      options.b
    );
  }

  public sendEffect(options: SendEffectOptions) {
    return this.$ffi.symbols.SendEffect(
      options.userData ?? null,
      options.data,
      options.size
    );
  }

  public setSensorsEnabled(options: SetSensorsEnabledOptions) {
    return this.$ffi.symbols.SetSensorsEnabled(
      options.userData ?? null,
      options.enabled
    );
  }

  public cleanup(userData?: Pointer | null) {
    return this.$ffi.symbols.Cleanup(userData ?? null);
  }

  public static allocMemory() {
    return new Uint8Array(136);
  }

  private static createFfi(options: CreateFfiOptions) {
    const $ffi = linkSymbols({
      Update: {
        ...VirtualJoystickDescDefinition.Update,
        ptr: options.updatePtr,
      },
      SetPlayerIndex: {
        ...VirtualJoystickDescDefinition.SetPlayerIndex,
        ptr: options.setPlayerIndexPtr,
      },
      Rumble: {
        ...VirtualJoystickDescDefinition.Rumble,
        ptr: options.rumblePtr,
      },
      RumbleTriggers: {
        ...VirtualJoystickDescDefinition.RumbleTriggers,
        ptr: options.rumbleTriggersPtr,
      },
      SetLED: {
        ...VirtualJoystickDescDefinition.SetLED,
        ptr: options.setLEDPtr,
      },
      SendEffect: {
        ...VirtualJoystickDescDefinition.SendEffect,
        ptr: options.sendEffectPtr,
      },
      SetSensorsEnabled: {
        ...VirtualJoystickDescDefinition.SetSensorsEnabled,
        ptr: options.setSensorsEnabledPtr,
      },
      Cleanup: {
        ...VirtualJoystickDescDefinition.Cleanup,
        ptr: options.cleanupPtr,
      },
    });

    return $ffi;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const ntouchpads = read.u16(pointer, 20);
    const nsensors = read.u16(pointer, 22);
    const namePtr = read.ptr(pointer, 40) as Pointer;
    const touchpadsPtr = read.ptr(pointer, 48) as Pointer | null;
    const sensorsPtr = read.ptr(pointer, 56) as Pointer | null;
    const updatePtr = read.ptr(pointer, 72) as Pointer;
    const setPlayerIndexPtr = read.ptr(pointer, 80) as Pointer;
    const rumblePtr = read.ptr(pointer, 88) as Pointer;
    const rumbleTriggersPtr = read.ptr(pointer, 96) as Pointer;
    const setLEDPtr = read.ptr(pointer, 104) as Pointer;
    const sendEffectPtr = read.ptr(pointer, 112) as Pointer;
    const setSensorsEnabledPtr = read.ptr(pointer, 120) as Pointer;
    const cleanupPtr = read.ptr(pointer, 128) as Pointer;

    const touchpads: VirtualJoystickTouchpadDesc[] = [];
    const sensors: VirtualJoystickSensorDesc[] = [];

    if (touchpadsPtr && ntouchpads > 0) {
      for (let i = 0; i < ntouchpads; i++) {
        const touchpadPtr = (Number(touchpadsPtr) + i * 8) as Pointer | null;

        if (!touchpadPtr) continue;

        touchpads.push(
          VirtualJoystickTouchpadDesc.fromPointer(touchpadPtr, sdl)
        );
      }
    }

    if (sensorsPtr && nsensors > 0) {
      for (let i = 0; i < nsensors; i++) {
        const sensorPtr = (Number(sensorsPtr) + i * 8) as Pointer | null;

        if (!sensorPtr) continue;

        sensors.push(VirtualJoystickSensorDesc.fromPointer(sensorPtr, sdl));
      }
    }

    const $ffi = VirtualJoystickDesc.createFfi({
      updatePtr,
      setPlayerIndexPtr,
      rumblePtr,
      rumbleTriggersPtr,
      setLEDPtr,
      sendEffectPtr,
      setSensorsEnabledPtr,
      cleanupPtr,
    });

    const result = {
      version: read.u32(pointer, 0),
      type: read.u16(pointer, 4),
      padding: read.u16(pointer, 6),
      vendor_id: read.u16(pointer, 8),
      product_id: read.u16(pointer, 10),
      naxes: read.u16(pointer, 12),
      nbuttons: read.u16(pointer, 14),
      nballs: read.u16(pointer, 16),
      nhats: read.u16(pointer, 18),
      ntouchpads,
      nsensors,
      padding2: [read.u16(pointer, 24), read.u16(pointer, 26)],
      button_mask: read.u32(pointer, 28),
      axis_mask: read.u32(pointer, 32),
      name: new CString(namePtr).toString(),
      touchpads,
      sensors,
      $ffi,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawVirtualJoystickDesc;

    return new VirtualJoystickDesc(result);
  }

  public static fromMemory(data: Uint8Array, sdl: BaseSDL) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const ntouchpads = view.getUint16(20, true);
    const nsensors = view.getUint16(22, true);
    const namePtr = view.getBigUint64(40, true) as unknown as Pointer;
    const touchpadsPtr = view.getBigUint64(
      48,
      true
    ) as unknown as Pointer | null;
    const sensorsPtr = view.getBigUint64(56, true) as unknown as Pointer | null;
    const updatePtr = view.getBigUint64(72, true) as unknown as Pointer;
    const setPlayerIndexPtr = view.getBigUint64(80, true) as unknown as Pointer;
    const rumblePtr = view.getBigUint64(88, true) as unknown as Pointer;
    const rumbleTriggersPtr = view.getBigUint64(96, true) as unknown as Pointer;
    const setLEDPtr = view.getBigUint64(104, true) as unknown as Pointer;
    const sendEffectPtr = view.getBigUint64(112, true) as unknown as Pointer;
    const setSensorsEnabledPtr = view.getBigUint64(
      120,
      true
    ) as unknown as Pointer;
    const cleanupPtr = view.getBigUint64(128, true) as unknown as Pointer;

    const touchpads: VirtualJoystickTouchpadDesc[] = [];
    const sensors: VirtualJoystickSensorDesc[] = [];

    if (touchpadsPtr && ntouchpads > 0) {
      for (let i = 0; i < ntouchpads; i++) {
        const touchpadPtr = (Number(touchpadsPtr) + i * 8) as Pointer | null;

        if (!touchpadPtr) continue;

        touchpads.push(
          VirtualJoystickTouchpadDesc.fromPointer(touchpadPtr, sdl)
        );
      }
    }

    if (sensorsPtr && nsensors > 0) {
      for (let i = 0; i < nsensors; i++) {
        const sensorPtr = (Number(sensorsPtr) + i * 8) as Pointer | null;

        if (!sensorPtr) continue;

        sensors.push(VirtualJoystickSensorDesc.fromPointer(sensorPtr, sdl));
      }
    }

    const $ffi = VirtualJoystickDesc.createFfi({
      updatePtr,
      setPlayerIndexPtr,
      rumblePtr,
      rumbleTriggersPtr,
      setLEDPtr,
      sendEffectPtr,
      setSensorsEnabledPtr,
      cleanupPtr,
    });

    const result = {
      version: view.getUint32(0, true),
      type: view.getUint16(4, true),
      padding: view.getUint16(6, true),
      vendor_id: view.getUint16(8, true),
      product_id: view.getUint16(10, true),
      naxes: view.getUint16(12, true),
      nbuttons: view.getUint16(14, true),
      nballs: view.getUint16(16, true),
      nhats: view.getUint16(18, true),
      ntouchpads,
      nsensors,
      padding2: [view.getUint16(24, true), view.getUint16(26, true)],
      button_mask: view.getUint32(28, true),
      axis_mask: view.getUint32(32, true),
      name: new CString(namePtr).toString(),
      touchpads,
      sensors,
      $ffi,
      free: null,
      address: null,
    } as RawVirtualJoystickDesc;

    return new VirtualJoystickDesc(result);
  }
}
