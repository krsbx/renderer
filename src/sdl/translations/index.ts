import * as assert from './assert';
import * as asyncio from './asyncio';
import * as atomic from './atomic';
import * as audio from './audio';
import * as blendMode from './blend-mode';
import * as camera from './camera';
import * as clipboard from './clipboard';
import * as cpuInfo from './cpu-info';
import * as dialog from './dialog';
import * as error from './error';
import * as events from './events';
import * as fileSystem from './file-system';
import * as gamepad from './gamepad';
import * as gpu from './gpu';
import * as guid from './guid';
import * as haptic from './haptic';
import * as hints from './hints/functions';
import * as init from './init/functions';
import * as ioStream from './io-stream';
import * as joystick from './joystick';
import * as keyboard from './keyboard';
import * as locale from './locale';
import * as log from './log/functions';
import * as messageBox from './message-box';
import * as metal from './metal';
import * as misc from './misc';
import * as mouse from './mouse';
import * as mutex from './mutex';
import * as pixels from './pixels';
import * as power from './power';
import * as process from './process';
import * as properties from './properties';
import * as rect from './rect';
import * as render from './render';
import * as sensor from './sensor';
import * as sharedObject from './shared-object';
import * as stdInc from './std-inc';
import * as storage from './storage';
import * as surface from './surface';
import * as system from './system';
import * as thread from './thread';
import * as time from './time';
import * as timer from './timer';
import * as touch from './touch';
import * as tray from './tray';
import * as version from './version';
import * as video from './video';
import * as vulkan from './vulkan';

export const Translations = {
  ...assert,
  ...asyncio,
  ...atomic,
  ...audio,
  ...blendMode,
  ...camera,
  ...clipboard,
  ...cpuInfo,
  ...dialog,
  ...error,
  ...events,
  ...fileSystem,
  ...gamepad,
  ...gpu,
  ...guid,
  ...haptic,
  ...hints,
  ...init,
  ...ioStream,
  ...joystick,
  ...keyboard,
  ...locale,
  ...log,
  ...messageBox,
  ...metal,
  ...misc,
  ...mouse,
  ...mutex,
  ...pixels,
  ...power,
  ...process,
  ...properties,
  ...rect,
  ...render,
  ...sensor,
  ...sharedObject,
  ...stdInc,
  ...storage,
  ...surface,
  ...system,
  ...thread,
  ...time,
  ...timer,
  ...touch,
  ...tray,
  ...version,
  ...video,
  ...vulkan,
};

export type Translations = typeof Translations;
