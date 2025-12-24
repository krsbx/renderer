import { ErrorDefinition } from './error/definition';
import { HintsDefinition } from './hints/definition';
import { InitDefinition } from './init/definition';
import { LogDefinition } from './log/definition';
import { PropertiesDefinition } from './properties/definition';
import { VersionDefinition } from './version/definition';
import { VideoDefinition } from './video/definition';

export const FFFIDefinition = {
  ...ErrorDefinition,
  ...HintsDefinition,
  ...InitDefinition,
  ...VersionDefinition,
  ...PropertiesDefinition,
  ...LogDefinition,
  ...VideoDefinition,
};

export type FFFIDefinition = typeof FFFIDefinition;
