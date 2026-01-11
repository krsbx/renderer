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
  userdata?: Pointer | null;
  player_index: number;
}

export interface RumbleOptions {
  userdata?: Pointer | null;
  low_frequency_rumble: number;
  high_frequency_rumble: number;
}

export interface RumbleTriggersOptions {
  userdata?: Pointer | null;
  left_rumble: number;
  right_rumble: number;
}

export interface SetLEDOptions {
  userdata?: Pointer | null;
  r: number;
  g: number;
  b: number;
}

export interface SendEffectOptions {
  userdata?: Pointer | null;
  data: Pointer;
  size: number;
}

export interface SetSensorsEnabledOptions {
  userdata?: Pointer | null;
  enabled: boolean;
}
