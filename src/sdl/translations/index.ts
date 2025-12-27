import * as error from './error';
import * as hints from './hints';
import * as init from './init';
import * as log from './log';
import * as properties from './properties';
import * as version from './version';
import * as video from './video';

export const Translations = {
  ...error,
  ...hints,
  ...init,
  ...log,
  ...properties,
  ...version,
  ...video,
};

export type Translations = typeof Translations;
