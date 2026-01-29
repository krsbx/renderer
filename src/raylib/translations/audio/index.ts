import * as device from './device';
import * as music from './music';
import * as sound from './sound';
import * as stream from './stream';
import * as wave from './wave';

export const AudioTranslation = {
  ...device,
  ...music,
  ...sound,
  ...stream,
  ...wave,
};

export type AudioTranslation = typeof AudioTranslation;
