import { ErrorDefinition } from './error/definition';
import { EventsDefinition } from './events/definition';
import { HintsDefinition } from './hints/definition';
import { InitDefinition } from './init/definition';
import { KeyboardDefinition } from './keyboard/definition';
import { LogDefinition } from './log/definition';
import { PropertiesDefinition } from './properties/definition';
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
};

export type FFIDefinition = typeof FFIDefinition;
