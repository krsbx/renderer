import type { RayLib } from '@/raylib';
import { VrStereoConfig, type VrDeviceInfo } from '../struct';

export function loadVrStereoConfig(this: RayLib, device: VrDeviceInfo) {
  const config = VrStereoConfig.create();

  return this.symbols.LoadVrStereoConfig(device.$memory, config.$memory);
}

export function unloadVrStereoConfig(this: RayLib, config: VrStereoConfig) {
  this.symbols.UnloadVrStereoConfig(config.$memory);
}
