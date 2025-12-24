import * as error from './error';
import * as hints from './hints';
import * as init from './init';
import * as log from './log';
import * as properties from './properties';
import * as version from './version';

export const Translations = {
  ...error,
  ...hints,
  ...init,
  ...log,
  ...properties,
  ...version,
};

export type Translations = typeof Translations;
