import type { Pointer } from 'bun:ffi';
import type { SDL } from '../../..';
import { getStructAddress } from '../../../utility/common';
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
    createInfo: GPUComputePipelineCreateInfo | Pointer;
  }
) {
  return this.symbols.SDL_CreateGPUComputePipeline(
    options.device,
    getStructAddress(options.createInfo)
  );
}

export function createGPUGraphicsPipeline(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUGraphicsPipelineCreateInfo | Pointer;
  }
) {
  return this.symbols.SDL_CreateGPUGraphicsPipeline(
    options.device,
    getStructAddress(options.createInfo)
  );
}

export function createGPUSampler(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUSamplerCreateInfo | Pointer;
  }
) {
  return this.symbols.SDL_CreateGPUSampler(
    options.device,
    getStructAddress(options.createInfo)
  );
}

export function createGPUShader(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUShaderCreateInfo | Pointer;
  }
) {
  return this.symbols.SDL_CreateGPUShader(
    options.device,
    getStructAddress(options.createInfo)
  );
}

// Create Texture/Buffer

export function createGPUTexture(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUTextureCreateInfo | Pointer;
  }
) {
  return this.symbols.SDL_CreateGPUTexture(
    options.device,
    getStructAddress(options.createInfo)
  );
}

export function createGPUBuffer(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUBufferCreateInfo | Pointer;
  }
) {
  return this.symbols.SDL_CreateGPUBuffer(
    options.device,
    getStructAddress(options.createInfo)
  );
}

export function createGPUTransferBuffer(
  this: SDL,
  options: {
    device: Pointer;
    createInfo: GPUTransferBufferCreateInfo | Pointer;
  }
) {
  return this.symbols.SDL_CreateGPUTransferBuffer(
    options.device,
    getStructAddress(options.createInfo)
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
