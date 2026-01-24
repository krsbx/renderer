import { AutomationDefinition } from './automation/definition';
import { CallbackDefinition } from './callback/definition';
import { CameraDefinition } from './camera/definition';
import { CompressionEncodingDefinition } from './compression-encoding/definition';
import { CursorDefinition } from './cursor/definition';
import { DrawDefinition } from './draw/definition';
import { FileManagementDefinition } from './file-management/definition';
import { FileSystemDefinition } from './file-system/definition';
import { FrameDefinition } from './frame/definition';
import { InputDefinition } from './input/definition';
import { MiscDefinition } from './misc/definition';
import { RNGDefinition } from './rng/definition';
import { ScreenSpaceDefinition } from './screen-space/definition';
import { ShaderDefinition } from './shader/definition';
import { TimingDefinition } from './timing/definition';
import { UtilsDefinition } from './utils/definition';
import { VRDefinition } from './vr/definition';
import { WindowDefinition } from './window/definition';

export const CoreDefinition = {
  ...WindowDefinition,
  ...CursorDefinition,
  ...DrawDefinition,
  ...VRDefinition,
  ...ShaderDefinition,
  ...ScreenSpaceDefinition,
  ...TimingDefinition,
  ...MiscDefinition,
  ...FrameDefinition,
  ...RNGDefinition,
  ...FileManagementDefinition,
  ...FileSystemDefinition,
  ...CompressionEncodingDefinition,
  ...AutomationDefinition,
  ...InputDefinition,
  ...CameraDefinition,
  ...CallbackDefinition,
  ...UtilsDefinition,
} as const;
