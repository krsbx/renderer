import type { RayLib } from '@/raylib';

export function initAudioDevice(this: RayLib) {
  this.symbols.InitAudioDevice();
}

export function closeAudioDevice(this: RayLib) {
  this.symbols.CloseAudioDevice();
}

export function isAudioDeviceReady(this: RayLib) {
  return this.symbols.IsAudioDeviceReady();
}

export function setMasterVolume(this: RayLib, volume: number) {
  this.symbols.SetMasterVolume(volume);
}

export function getMasterVolume(this: RayLib) {
  return this.symbols.GetMasterVolume();
}
