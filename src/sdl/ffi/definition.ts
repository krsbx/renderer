import { AssertDefinition } from './assert/definition';
import { AsyncIODefinition } from './asyncio/definition';
import { AtomicDefinition } from './atomic/definition';
import { AudioDefinition } from './audio/definition';
import { BitsDefinition } from './bits/definition';
import { BlendModeDefinition } from './blend-mode/definition';
import { CameraDefinition } from './camera/definition';
import { ClipboardDefinition } from './clipboard/definition';
import { CPUInfoDefinition } from './cpu-info/definition';
import { DialogDefinition } from './dialog/definition';
import { EndianDefinition } from './endian/definition';
import { ErrorDefinition } from './error/definition';
import { EventsDefinition } from './events/definition';
import { FileSystemDefinition } from './file-system/definition';
import { GamepadDefinition } from './gamepad/definition';
import { GPUDefinition } from './gpu/definition';
import { GUIDDefinition } from './guid/definition';
import { HapticDefinition } from './haptic/definition';
import { HintsDefinition } from './hints/definition';
import { InitDefinition } from './init/definition';
import { IOStreamDefinition } from './io-stream/definition';
import { JoystickDefinition } from './joystick/definition';
import { KeyboardDefinition } from './keyboard/definition';
import { LocaleDefinition } from './locale/definition';
import { LogDefinition } from './log/definition';
import { MessageBoxDefinition } from './message-box/definition';
import { MetalDefinition } from './metal/definition';
import { MiscDefinition } from './misc/definition';
import { MouseDefinition } from './mouse/definition';
import { MutexDefinition } from './mutex/definition';
import { PixelsDefinition } from './pixels/definition';
import { PowerDefinition } from './power/definition';
import { ProcessDefinition } from './process/definition';
import { PropertiesDefinition } from './properties/definition';
import { RectDefinition } from './rect/definition';
import { RenderDefinition } from './render/definition';
import { SensorDefinition } from './sensor/definition';
import { SharedObjectDefinition } from './shared-object/definition';
import { StdIncDefinition } from './std-inc/definition';
import { StorageDefinition } from './storage/definition';
import { SurfaceDefinition } from './surface/definition';
import { SystemDefinition } from './system/definition';
import { ThreadDefinition } from './thread/definition';
import { TimeDefinition } from './time/definition';
import { TimerDefinition } from './timer/definition';
import { TouchDefinition } from './touch/definition';
import { TrayDefinition } from './tray/definition';
import { VersionDefinition } from './version/definition';
import { VideoDefinition } from './video/definition';
import { VulkanDefinition } from './vulkan/definition';

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
  ...GamepadDefinition,
  ...JoystickDefinition,
  ...HapticDefinition,
  ...AudioDefinition,
  ...TimeDefinition,
  ...TimerDefinition,
  ...RenderDefinition,
  ...SharedObjectDefinition,
  ...ThreadDefinition,
  ...MutexDefinition,
  ...AtomicDefinition,
  ...FileSystemDefinition,
  ...IOStreamDefinition,
  ...AsyncIODefinition,
  ...StorageDefinition,
  ...PixelsDefinition,
  ...SurfaceDefinition,
  ...BlendModeDefinition,
  ...RectDefinition,
  ...CameraDefinition,
  ...ClipboardDefinition,
  ...DialogDefinition,
  ...TrayDefinition,
  ...MessageBoxDefinition,
  ...GPUDefinition,
  ...VulkanDefinition,
  ...MetalDefinition,
  // ...PlatformDefinition, // Skip since it only contains internal definition
  ...PowerDefinition,
  ...SensorDefinition,
  ...ProcessDefinition,
  ...BitsDefinition,
  ...EndianDefinition,
  ...AssertDefinition,
  ...CPUInfoDefinition,
  // ...IntrinsicsDefinition, // Skip since it only contains internal definition
  ...LocaleDefinition,
  ...SystemDefinition,
  ...MiscDefinition,
  ...GUIDDefinition,
  ...StdIncDefinition,
};

export type FFIDefinition = typeof FFIDefinition;
