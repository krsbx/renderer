import { AudioDeviceDefinition } from './device/definition';
import { MusicDefinition } from './music/definition';
import { SoundDefinition } from './sound/definition';
import { AudioStreamDefinition } from './stream/definition';
import { WaveDefinition } from './wave/definition';

export const AudioDefinition = {
  ...AudioDeviceDefinition,
  ...WaveDefinition,
  ...SoundDefinition,
  ...MusicDefinition,
  ...AudioStreamDefinition,
} as const;
