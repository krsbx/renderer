import type { CString, Pointer } from 'bun:ffi';
import type { SDL } from '../../..';

// Debug/Naming

export function setGPUBufferName(
  this: SDL,
  options: {
    device: Pointer;
    buffer: Pointer;
    text: CString;
  }
) {
  this.symbols.SDL_SetGPUBufferName(
    options.device,
    options.buffer,
    options.text.ptr
  );
}

export function setGPUTextureName(
  this: SDL,
  options: {
    device: Pointer;
    texture: Pointer;
    text: CString;
  }
) {
  this.symbols.SDL_SetGPUTextureName(
    options.device,
    options.texture,
    options.text.ptr
  );
}

export function insertGPUDebugLabel(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    text: CString;
  }
) {
  this.symbols.SDL_InsertGPUDebugLabel(options.commandBuffer, options.text.ptr);
}

export function pushGPUDebugGroup(
  this: SDL,
  options: {
    commandBuffer: Pointer;
    name: CString;
  }
) {
  this.symbols.SDL_PushGPUDebugGroup(options.commandBuffer, options.name.ptr);
}

export function popGPUDebugGroup(this: SDL, commandBuffer: Pointer) {
  this.symbols.SDL_PopGPUDebugGroup(commandBuffer);
}
