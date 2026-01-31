import * as assert from '../assert/functions';
import * as asyncio from '../asyncio/functions';
import * as atomic from '../atomic/functions';
import * as audio from '../audio/functions';
import * as blendMode from '../blend-mode/functions';
import * as camera from '../camera/functions';
import * as clipboard from '../clipboard/functions';
import * as cpuInfo from '../cpu-info/functions';
import * as dialog from '../dialog/functions';
import * as error from '../error/functions';
import * as events from '../events/functions';
import * as fileSystem from '../file-system/functions';
import * as gamepad from '../gamepad/functions';
import * as gpu from '../gpu/functions';
import * as guid from '../guid/functions';
import * as haptic from '../haptic/functions';
import * as hints from '../hints/functions';
import * as init from '../init/functions';
import * as ioStream from '../io-stream/functions';
import * as joystick from '../joystick/functions';
import * as keyboard from '../keyboard/functions';
import * as locale from '../locale/functions';
import * as log from '../log/functions';
import * as messageBox from '../message-box/functions';
import * as metal from '../metal/functions';
import * as misc from '../misc/functions';
import * as mouse from '../mouse/functions';
import * as mutex from '../mutex/functions';
import * as pixels from '../pixels/functions';
import * as power from '../power/functions';
import * as process from '../process/functions';
import * as properties from '../properties/functions';
import * as rect from '../rect/functions';
import * as render from '../render/functions';
import * as sensor from '../sensor/functions';
import * as sharedObject from '../shared-object/functions';
import * as stdInc from '../std-inc/functions';
import * as storage from '../storage/functions';
import * as surface from '../surface/functions';
import * as system from '../system/functions';
import * as thread from '../thread/functions';
import * as time from '../time/functions';
import * as timer from '../timer/functions';
import * as touch from '../touch/functions';
import * as tray from '../tray/functions';
import * as version from '../version/functions';
import * as video from '../video/functions';
import * as vulkan from '../vulkan/functions';

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
