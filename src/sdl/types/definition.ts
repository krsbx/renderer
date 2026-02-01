import type { Brand } from '@/types/shared';
import type { Pointer } from 'bun:ffi';

type SDLOpaque<
  K extends string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T = K extends `SDL_${infer _}` ? K : `SDL_${K}`,
> = Pointer | Brand<Pointer, T>;

// Async IO
export type AsyncIO = SDLOpaque<'AsyncIO'>;
export type AsyncIOQueue = SDLOpaque<'AsyncIOQueue'>;

// Audio
export type AudioStream = SDLOpaque<'AudioStream'>;

// Camera
export type Camera = SDLOpaque<'Camera'>;

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

// Joystick
export type Joystick = SDLOpaque<'Joystick'>;

// IO Stream
export type IOStream = SDLOpaque<'IOStream'>;

// Metal
export type MetalView = SDLOpaque<'MetalView'>;

// Mouse
export type Cursor = SDLOpaque<'Cursor'>;

// Mutex
export type Mutex = SDLOpaque<'Mutex'>;
export type RWLock = SDLOpaque<'RWLock'>;
export type Semaphore = SDLOpaque<'Semaphore'>;
export type Condition = SDLOpaque<'Condition'>;

// Process
export type Process = SDLOpaque<'Process'>;

// Renderer
export type Renderer = SDLOpaque<'Renderer'>;
export type Texture = SDLOpaque<'Texture'>;
export type GPURenderState = SDLOpaque<'GPURenderState'>;

// Sensor
export type Sensor = SDLOpaque<'Sensor'>;

// Shared Object
export type SharedObject = SDLOpaque<'SharedObject'>;

// Storage
export type Storage = SDLOpaque<'Storage'>;

// Thread
export type Thread = SDLOpaque<'Thread'>;

// Tray
export type Tray = SDLOpaque<'Tray'>;
export type TrayMenu = SDLOpaque<'TrayMenu'>;
export type TrayEntry = SDLOpaque<'TrayEntry'>;

// Vulkan
export type VkInstance = SDLOpaque<'VkInstance'>;
export type VkSurfaceKHR = SDLOpaque<'VkSurfaceKHR'>;
export type VkPhysicalDevice = SDLOpaque<'VkPhysicalDevice'>;

// Video
export type GLContext = SDLOpaque<'GLContext'>;
export type EGLDisplay = SDLOpaque<'EGLDisplay'>;
export type EGLConfig = SDLOpaque<'EGLConfig'>;

// Window
export type Window = SDLOpaque<'Window'>;
