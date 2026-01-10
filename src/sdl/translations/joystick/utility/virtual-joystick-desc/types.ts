import type { Pointer } from 'bun:ffi';

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
