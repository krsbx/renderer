import type { SDL } from '@/sdl';
import type {
  GPUBuffer,
  GPUCommandBuffer,
  GPUDevice,
  GPUTexture,
} from '@/sdl/types/definition';
import { stringToCString } from '@utility/common';

// Debug/Naming

export function setGPUBufferName(
  this: SDL,
  options: {
    device: GPUDevice;
    buffer: GPUBuffer;
    text: string;
  }
) {
  this.symbols.SDL_SetGPUBufferName(
    options.device,
    options.buffer,
    stringToCString(options.text).ptr
  );
}

export function setGPUTextureName(
  this: SDL,
  options: {
    device: GPUDevice;
    texture: GPUTexture;
    text: string;
  }
) {
  this.symbols.SDL_SetGPUTextureName(
    options.device,
    options.texture,
    stringToCString(options.text).ptr
  );
}

export function insertGPUDebugLabel(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    text: string;
  }
) {
  this.symbols.SDL_InsertGPUDebugLabel(
    options.commandBuffer,
    stringToCString(options.text).ptr
  );
}

export function pushGPUDebugGroup(
  this: SDL,
  options: {
    commandBuffer: GPUCommandBuffer;
    name: string;
  }
) {
  this.symbols.SDL_PushGPUDebugGroup(
    options.commandBuffer,
    stringToCString(options.name).ptr
  );
}

export function popGPUDebugGroup(this: SDL, commandBuffer: GPUCommandBuffer) {
  this.symbols.SDL_PopGPUDebugGroup(commandBuffer);
}
