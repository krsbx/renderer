import type { SDL } from '@/sdl';
import type { Pointer } from 'bun:ffi';
import {
  GPUBufferCreateInfo,
  GPUComputePipelineCreateInfo,
  GPUGraphicsPipelineCreateInfo,
  GPUSamplerCreateInfo,
  GPUShaderCreateInfo,
  GPUTextureCreateInfo,
  GPUTransferBufferCreateInfo,
} from '../utility';

// Create Pipeline/Shader/Sampler

export function createGPUComputePipeline(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUComputePipelineCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUComputePipeline(
    options.device,
    options.createInfo.$address
  );
}

export function createGPUGraphicsPipeline(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUGraphicsPipelineCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUGraphicsPipeline(
    options.device,
    options.createInfo.$address
  );
}

export function createGPUSampler(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUSamplerCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUSampler(
    options.device,
    options.createInfo.$address
  );
}

export function createGPUShader(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUShaderCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUShader(
    options.device,
    options.createInfo.$address
  );
}

// Create Texture/Buffer

export function createGPUTexture(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUTextureCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUTexture(
    options.device,
    options.createInfo.$address
  );
}

export function createGPUBuffer(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUBufferCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUBuffer(
    options.device,
    options.createInfo.$address
  );
}

export function createGPUTransferBuffer(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUTransferBufferCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUTransferBuffer(
    options.device,
    options.createInfo.$address
  );
}

// Release Resources

export function releaseGPUTexture(
  this: SDL,
  options: {
    device: Pointer;
    texture: Pointer;
  }
) {
  this.symbols.SDL_ReleaseGPUTexture(options.device, options.texture);
}

export function releaseGPUSampler(
  this: SDL,
  options: {
    device: Pointer;
    sampler: Pointer;
  }
) {
  this.symbols.SDL_ReleaseGPUSampler(options.device, options.sampler);
}

export function releaseGPUBuffer(
  this: SDL,
  options: {
    device: Pointer;
    buffer: Pointer;
  }
) {
  this.symbols.SDL_ReleaseGPUBuffer(options.device, options.buffer);
}

export function releaseGPUTransferBuffer(
  this: SDL,
  options: {
    device: Pointer;
    transferBuffer: Pointer;
  }
) {
  this.symbols.SDL_ReleaseGPUTransferBuffer(
    options.device,
    options.transferBuffer
  );
}

export function releaseGPUComputePipeline(
  this: SDL,
  options: {
    device: Pointer;
    computePipeline: Pointer;
  }
) {
  this.symbols.SDL_ReleaseGPUComputePipeline(
    options.device,
    options.computePipeline
  );
}

export function releaseGPUShader(
  this: SDL,
  options: {
    device: Pointer;
    shader: Pointer;
  }
) {
  this.symbols.SDL_ReleaseGPUShader(options.device, options.shader);
}

export function releaseGPUGraphicsPipeline(
  this: SDL,
  options: {
    device: Pointer;
    graphicsPipeline: Pointer;
  }
) {
  this.symbols.SDL_ReleaseGPUGraphicsPipeline(
    options.device,
    options.graphicsPipeline
  );
}
