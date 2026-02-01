import type { SDL } from '@/sdl';
import type {
  GPUBuffer,
  GPUComputePipeline,
  GPUDevice,
  GPUGraphicsPipeline,
  GPUSampler,
  GPUShader,
  GPUTexture,
  GPUTransferBuffer,
} from '@/sdl/types/definition';
import {
  GPUBufferCreateInfo,
  GPUComputePipelineCreateInfo,
  GPUGraphicsPipelineCreateInfo,
  GPUSamplerCreateInfo,
  GPUShaderCreateInfo,
  GPUTextureCreateInfo,
  GPUTransferBufferCreateInfo,
} from '../struct';

// Create Pipeline/Shader/Sampler

export function createGPUComputePipeline(
  this: SDL,
  options: {
    device: GPUDevice;
    createInfo: GPUComputePipelineCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUComputePipeline(
    options.device,
    options.createInfo.$address
  ) as GPUComputePipeline | null;
}

export function createGPUGraphicsPipeline(
  this: SDL,
  options: {
    device: GPUDevice;
    createInfo: GPUGraphicsPipelineCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUGraphicsPipeline(
    options.device,
    options.createInfo.$address
  ) as GPUGraphicsPipeline | null;
}

export function createGPUSampler(
  this: SDL,
  options: {
    device: GPUDevice;
    createInfo: GPUSamplerCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUSampler(
    options.device,
    options.createInfo.$address
  ) as GPUSampler | null;
}

export function createGPUShader(
  this: SDL,
  options: {
    device: GPUDevice;
    createInfo: GPUShaderCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUShader(
    options.device,
    options.createInfo.$address
  ) as GPUShader | null;
}

// Create Texture/Buffer

export function createGPUTexture(
  this: SDL,
  options: {
    device: GPUDevice;
    createInfo: GPUTextureCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUTexture(
    options.device,
    options.createInfo.$address
  ) as GPUTexture | null;
}

export function createGPUBuffer(
  this: SDL,
  options: {
    device: GPUDevice;
    createInfo: GPUBufferCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUBuffer(
    options.device,
    options.createInfo.$address
  ) as GPUBuffer | null;
}

export function createGPUTransferBuffer(
  this: SDL,
  options: {
    device: GPUDevice;
    createInfo: GPUTransferBufferCreateInfo;
  }
) {
  return this.symbols.SDL_CreateGPUTransferBuffer(
    options.device,
    options.createInfo.$address
  ) as GPUTransferBuffer | null;
}

// Release Resources

export function releaseGPUTexture(
  this: SDL,
  options: {
    device: GPUDevice;
    texture: GPUTexture;
  }
) {
  this.symbols.SDL_ReleaseGPUTexture(options.device, options.texture);
}

export function releaseGPUSampler(
  this: SDL,
  options: {
    device: GPUDevice;
    sampler: GPUSampler;
  }
) {
  this.symbols.SDL_ReleaseGPUSampler(options.device, options.sampler);
}

export function releaseGPUBuffer(
  this: SDL,
  options: {
    device: GPUDevice;
    buffer: GPUBuffer;
  }
) {
  this.symbols.SDL_ReleaseGPUBuffer(options.device, options.buffer);
}

export function releaseGPUTransferBuffer(
  this: SDL,
  options: {
    device: GPUDevice;
    transferBuffer: GPUTransferBuffer;
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
    device: GPUDevice;
    computePipeline: GPUComputePipeline;
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
    device: GPUDevice;
    shader: GPUShader;
  }
) {
  this.symbols.SDL_ReleaseGPUShader(options.device, options.shader);
}

export function releaseGPUGraphicsPipeline(
  this: SDL,
  options: {
    device: GPUDevice;
    graphicsPipeline: GPUGraphicsPipeline;
  }
) {
  this.symbols.SDL_ReleaseGPUGraphicsPipeline(
    options.device,
    options.graphicsPipeline
  );
}
