import { ErrorDefinition } from './error/definition';
import { EventsDefinition } from './events/definition';
import { HintsDefinition } from './hints/definition';
import { InitDefinition } from './init/definition';
import { KeyboardDefinition } from './keyboard/definition';
import { LogDefinition } from './log/definition';
import { MouseDefinition } from './mouse/definition';
import { PropertiesDefinition } from './properties/definition';
import { TouchDefinition } from './touch/definition';
import { VersionDefinition } from './version/definition';
import { VideoDefinition } from './video/definition';

export const FFIDefinition = {
  ...ErrorDefinition,
  ...HintsDefinition,
  ...InitDefinition,
  ...VersionDefinition,
  ...PropertiesDefinition,
  ...LogDefinition,
  ...VideoDefinition,
  ...EventsDefinition,
  ...KeyboardDefinition,
  ...MouseDefinition,
  ...TouchDefinition,
};

export type FFIDefinition = typeof FFIDefinition;
