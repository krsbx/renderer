import * as automation from './automation';
import * as callback from './callback';
import * as camera from './camera';
import * as compressionEncoding from './compression-encoding';
import * as cursor from './cursor';
import * as draw from './draw';
import * as fileManagement from './file-management';
import * as fileSystem from './file-system';
import * as frame from './frame';
import * as input from './input';
import * as misc from './misc';
import * as rng from './rng';
import * as screenSpace from './screen-space';
import * as shader from './shader';
import * as timing from './timing';
import * as utils from './utils';
import * as vr from './vr';
import * as window from './window';

export const CoreTranslations = {
  ...automation,
  ...callback,
  ...camera,
  ...compressionEncoding,
  ...cursor,
  ...draw,
  ...fileManagement,
  ...fileSystem,
  ...frame,
  ...input,
  ...misc,
  ...rng,
  ...screenSpace,
  ...shader,
  ...timing,
  ...utils,
  ...vr,
  ...window,
};

export type CoreTranslations = typeof CoreTranslations;
