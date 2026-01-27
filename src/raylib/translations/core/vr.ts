import type { RayLib } from '@/raylib';
import { VrStereoConfig, type VrDeviceInfo } from '../struct';

export function loadVrStereoConfig(this: RayLib, device: VrDeviceInfo) {
  const config = new VrStereoConfig(VrStereoConfig.allocMemory());

  return this.symbols.LoadVrStereoConfig(device.$address, config.$address);
}

export function unloadVrStereoConfig(this: RayLib, config: VrStereoConfig) {
  this.symbols.UnloadVrStereoConfig(config.$address);
}
