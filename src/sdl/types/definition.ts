import type { Int32, UInt32 } from '@/types/primitive';
import type { Brand } from '@/types/shared';
import type { Pointer } from 'bun:ffi';

type SDLOpaque<
  Key extends string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FinalKey = Key extends `SDL_${infer _}` ? Key : `SDL_${Key}`,
> = Pointer | Brand<Pointer, FinalKey>;
type SDLId<
  Key extends string,
  Unsigned extends boolean = true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  FinalKey = Key extends `SDL_${infer _}` ? Key : `SDL_${Key}`,
  MergeWith = Unsigned extends true ? UInt32 : Int32,
> = number | Brand<number, FinalKey> | MergeWith;

// Async IO
export type AsyncIO = SDLOpaque<'AsyncIO'>;
export type AsyncIOQueue = SDLOpaque<'AsyncIOQueue'>;

// Audio
export type AudioStream = SDLOpaque<'AudioStream'>;
export type AudioDeviceID = SDLId<'AudioDeviceID'>;

// Camera
export type Camera = SDLOpaque<'Camera'>;
export type CameraID = SDLId<'CameraID'>;

// Gamepad
export type Gamepad = SDLOpaque<'Gamepad'>;

// GPU
export type GPUDevice = SDLOpaque<'GPUDevice'>;
export type GPUBuffer = SDLOpaque<'GPUBuffer'>;
export type GPUTransferBuffer = SDLOpaque<'GPUTransferBuffer'>;
export type GPUTexture = SDLOpaque<'GPUTexture'>;
export type GPUSampler = SDLOpaque<'GPUSampler'>;
export type GPUShader = SDLOpaque<'GPUShader'>;
export type GPUComputePipeline = SDLOpaque<'GPUComputePipeline'>;
export type GPUGraphicsPipeline = SDLOpaque<'GPUGraphicsPipeline'>;
export type GPUCommandBuffer = SDLOpaque<'GPUCommandBuffer'>;
export type GPURenderPass = SDLOpaque<'GPURenderPass'>;
export type GPUComputePass = SDLOpaque<'GPUComputePass'>;
export type GPUCopyPass = SDLOpaque<'GPUCopyPass'>;
export type GPUFence = SDLOpaque<'GPUFence'>;

// Haptic
export type Haptic = SDLOpaque<'Haptic'>;
export type HapticID = SDLId<'HapticID'>;
export type HapticEffectID = SDLId<'HapticEffectID', false>;

// Joystick
export type Joystick = SDLOpaque<'Joystick'>;
export type JoystickID = SDLId<'JoystickID'>;

// IO Stream
export type IOStream = SDLOpaque<'IOStream'>;

// Keyboard
export type KeyboardID = SDLId<'KeyboardID'>;

// Metal
export type MetalView = SDLOpaque<'MetalView'>;

// Mouse
export type Cursor = SDLOpaque<'Cursor'>;
export type MouseID = SDLId<'MouseID'>;

// Pen
export type PenID = SDLId<'PenID'>;

// Mutex
export type Mutex = SDLOpaque<'Mutex'>;
export type RWLock = SDLOpaque<'RWLock'>;
export type Semaphore = SDLOpaque<'Semaphore'>;
export type Condition = SDLOpaque<'Condition'>;

// Process
export type Process = SDLOpaque<'Process'>;

// Properties
export type PropertiesID = SDLId<'PropertiesID'>;

// Renderer
export type Renderer = SDLOpaque<'Renderer'>;
export type Texture = SDLOpaque<'Texture'>;
export type GPURenderState = SDLOpaque<'GPURenderState'>;

// Sensor
export type Sensor = SDLOpaque<'Sensor'>;
export type SensorID = SDLId<'SensorID'>;

// Shared Object
export type SharedObject = SDLOpaque<'SharedObject'>;

// Storage
export type Storage = SDLOpaque<'Storage'>;

// Thread
export type Thread = SDLOpaque<'Thread'>;

// Timer
export type TimerID = SDLId<'TimerID'>;

// Tray
export type Tray = SDLOpaque<'Tray'>;
export type TrayMenu = SDLOpaque<'TrayMenu'>;
export type TrayEntry = SDLOpaque<'TrayEntry'>;

// Vulkan
export type VkInstance = SDLOpaque<'VkInstance'>;
export type VkSurfaceKHR = SDLOpaque<'VkSurfaceKHR'>;
export type VkPhysicalDevice = SDLOpaque<'VkPhysicalDevice'>;

// Video
export type DisplayID = SDLId<'DisplayID'>;
export type GLContext = SDLOpaque<'GLContext'>;
export type EGLDisplay = SDLOpaque<'EGLDisplay'>;
export type EGLConfig = SDLOpaque<'EGLConfig'>;

// Window
export type Window = SDLOpaque<'Window'>;
export type WindowID = SDLId<'WindowID'>;
