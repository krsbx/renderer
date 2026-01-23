import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { stringToCString } from '../../../utility/common';

// Debug/Naming

export function setGPUBufferName(
  this: SDL,
  options: {
    device: Pointer;
    buffer: Pointer;
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
    device: Pointer;
    texture: Pointer;
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
    commandBuffer: Pointer;
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
    commandBuffer: Pointer;
    name: string;
  }
) {
  this.symbols.SDL_PushGPUDebugGroup(
    options.commandBuffer,
    stringToCString(options.name).ptr
  );
}

export function popGPUDebugGroup(this: SDL, commandBuffer: Pointer) {
  this.symbols.SDL_PopGPUDebugGroup(commandBuffer);
}
