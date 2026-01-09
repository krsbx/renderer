import type { Pointer } from 'bun:ffi';
import type {
  GPUBlendFactor,
  GPUBlendOp,
  GPUBufferUsageFlags,
  GPUColorComponentFlags,
  GPUCompareOp,
  GPUCullMode,
  GPUFillMode,
  GPUFilter,
  GPUFrontFace,
  GPULoadOp,
  GPUPrimitiveType,
  GPUSampleCount,
  GPUSamplerAddressMode,
  GPUSamplerMipmapMode,
  GPUShaderFormat,
  GPUShaderStage,
  GPUStencilOp,
  GPUStoreOp,
  GPUTextureFormat,
  GPUTextureType,
  GPUTextureUsageFlags,
  GPUTransferBufferUsage,
  GPUVertexElementFormat,
  GPUVertexInputRate,
} from '../../../ffi/gpu/constant';
import type { FlipMode } from '../../../ffi/surface/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { FColor } from '../../pixels/utility/fcolor/fcolor.snapshot';
import type { GPUBlitRegion } from './gpu-blit-region';
import type { GPUColorTargetBlendState } from './gpu-color-target-blend-state';
import type { GPUColorTargetDescription } from './gpu-color-target-description';
import type { GPUDepthStencilState } from './gpu-depth-stencil-state';
import type { GPUGraphicsPipelineTargetInfo } from './gpu-graphics-pipeline-target-info';
import type { GPUMultisampleState } from './gpu-multi-sample-state';
import type { GPURasterizerState } from './gpu-rasterizer-state';
import type { GPUStencilOpState } from './gpu-stencil-op-state';
import type { GPUVertexAttribute } from './gpu-vertex-attribute';
import type { GPUVertexBufferDescription } from './gpu-vertex-buffer-description';
import type { GPUVertexInputState } from './gpu-vertext-input-state';

export interface RawGPUViewport extends FreeAddress, MemoryAddress {
  x: number;
  y: number;
  w: number;
  h: number;
  min_depth: number;
  max_depth: number;
}

export interface RawGPUTextureTransferInfo extends FreeAddress, MemoryAddress {
  transfer_buffer: Pointer;
  offset: number;
  pixels_per_row: number;
  rows_per_layer: number;
}

export interface RawGPUTransferBufferLocation
  extends FreeAddress,
    MemoryAddress {
  transfer_buffer: Pointer;
  offset: number;
}

export interface RawGPUTextureLocation extends FreeAddress, MemoryAddress {
  texture: Pointer;
  mip_level: number;
  layer: number;
  x: number;
  y: number;
  z: number;
}

export interface RawGPUTextureRegion extends FreeAddress, MemoryAddress {
  texture: Pointer;
  mip_level: number;
  layer: number;
  x: number;
  y: number;
  z: number;
  w: number;
  h: number;
  d: number;
}

export interface RawGPUBlitRegion extends FreeAddress, MemoryAddress {
  texture: Pointer;
  mip_level: number;
  layer_or_depth_plane: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface RawGPUBufferLocation extends FreeAddress, MemoryAddress {
  buffer: Pointer;
  offset: number;
}

export interface RawGPUBufferRegion extends FreeAddress, MemoryAddress {
  buffer: Pointer;
  offset: number;
  size: number;
}

export interface RawGPUIndirectDrawCommand extends FreeAddress, MemoryAddress {
  num_vertices: number;
  num_instances: number;
  first_vertex: number;
  first_instance: number;
}

export interface RawGPUIndexedIndirectDrawCommand
  extends FreeAddress,
    MemoryAddress {
  num_indices: number;
  num_instances: number;
  first_index: number;
  vertex_offset: number;
  first_instance: number;
}

export interface RawGPUIndirectDispatchCommand
  extends FreeAddress,
    MemoryAddress {
  groupcount_x: number;
  groupcount_y: number;
  groupcount_z: number;
}

export interface RawGPUSamplerCreateInfo extends FreeAddress, MemoryAddress {
  min_filter: GPUFilter;
  mag_filter: GPUFilter;
  mipmap_mode: GPUSamplerMipmapMode;
  address_mode_u: GPUSamplerAddressMode;
  address_mode_v: GPUSamplerAddressMode;
  address_mode_w: GPUSamplerAddressMode;
  mip_lod_bias: number;
  max_anisotropy: number;
  compare_op: GPUCompareOp;
  min_lod: number;
  max_lod: number;
  enable_anisotropy: boolean;
  enable_compare: boolean;
  padding1: number;
  padding2: number;
  props: number;
}

export interface RawGPUVertexBufferDescription
  extends FreeAddress,
    MemoryAddress {
  slot: number;
  pitch: number;
  input_rate: GPUVertexInputRate;
  instance_step_rate: number;
}

export interface RawGPUVertexAttribute extends FreeAddress, MemoryAddress {
  location: number;
  buffer_slot: number;
  format: GPUVertexElementFormat;
  offset: number;
}

export interface RawGPUVertexInputState extends FreeAddress, MemoryAddress {
  vertex_buffer_descriptions: GPUVertexBufferDescription[];
  num_vertex_buffers: number;
  vertex_attributes: GPUVertexAttribute[];
  num_vertex_attributes: number;
}

export interface RawGPUStencilOpState extends FreeAddress, MemoryAddress {
  fail_op: GPUStencilOp;
  pass_op: GPUStencilOp;
  depth_fail_op: GPUStencilOp;
  compare_op: GPUStencilOp;
}

export interface RawGPUColorTargetBlendState
  extends FreeAddress,
    MemoryAddress {
  src_color_blendfactor: GPUBlendFactor;
  dst_color_blendfactor: GPUBlendFactor;
  color_blend_op: GPUBlendOp;
  src_alpha_blendfactor: GPUBlendFactor;
  dst_alpha_blendfactor: GPUBlendFactor;
  alpha_blend_op: GPUBlendOp;
  color_write_mask: GPUColorComponentFlags;
  enable_blend: boolean;
  enable_color_write_mask: boolean;
  padding1: number;
  padding2: number;
}

export interface RawGPUShaderCreateInfo extends FreeAddress, MemoryAddress {
  code_size: bigint;
  code: Pointer;
  entrypoint: string;
  format: GPUShaderFormat;
  stage: GPUShaderStage;
  num_samplers: number;
  num_storage_textures: number;
  num_storage_buffers: number;
  num_uniform_buffers: number;
  props: number;
}

export interface RawGPUTextureCreateInfo extends FreeAddress, MemoryAddress {
  type: GPUTextureType;
  format: GPUTextureFormat;
  usage: GPUTextureUsageFlags;
  width: number;
  height: number;
  layer_count_or_depth: number;
  num_levels: number;
  sample_count: GPUSampleCount;
  props: number;
}

export interface RawGPUBufferCreateInfo extends FreeAddress, MemoryAddress {
  usage: GPUBufferUsageFlags;
  size: number;
  props: number;
}

export interface RawGPUTransferBufferCreateInfo
  extends FreeAddress,
    MemoryAddress {
  usage: GPUTransferBufferUsage;
  size: number;
  props: number;
}

export interface RawGPURasterizerState extends FreeAddress, MemoryAddress {
  fill_mode: GPUFillMode;
  cull_mode: GPUCullMode;
  front_face: GPUFrontFace;
  depth_bias_constant_factor: number;
  depth_bias_clamp: number;
  depth_bias_slope_factor: number;
  enable_depth_bias: boolean;
  enable_depth_clip: boolean;
  padding1: number;
  padding2: number;
}

export interface RawGPUMultisampleState extends FreeAddress, MemoryAddress {
  sample_count: GPUSampleCount;
  sample_mask: number;
  enable_mask: boolean;
  enable_alpha_to_coverage: boolean;
  padding2: number;
  padding3: number;
}

export interface RawGPUDepthStencilState extends FreeAddress, MemoryAddress {
  compare_op: GPUCompareOp;
  back_stencil_state: GPUStencilOpState;
  front_stencil_state: GPUStencilOpState;
  compare_mask: number;
  write_mask: number;
  enable_depth_test: boolean;
  enable_depth_write: boolean;
  enable_stencil_test: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export interface RawGPUColorTargetDescription
  extends FreeAddress,
    MemoryAddress {
  format: GPUTextureFormat;
  blend_state: GPUColorTargetBlendState;
}

export interface RawGPUGraphicsPipelineTargetInfo
  extends FreeAddress,
    MemoryAddress {
  color_target_descriptions: GPUColorTargetDescription[];
  num_color_targets: number;
  depth_stencil_format: GPUTextureFormat;
  has_depth_stencil_target: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export interface RawGPUGraphicsPipelineCreateInfo
  extends FreeAddress,
    MemoryAddress {
  vertex_shader: Pointer;
  fragment_shader: Pointer;
  vertex_input_state: GPUVertexInputState;
  primitive_type: GPUPrimitiveType;
  rasterizer_state: GPURasterizerState;
  multisample_state: GPUMultisampleState;
  depth_stencil_state: GPUDepthStencilState;
  target_info: GPUGraphicsPipelineTargetInfo;
  props: number;
}

export interface RawGPUComputePipelineCreateInfo
  extends FreeAddress,
    MemoryAddress {
  code_size: bigint;
  code: Pointer;
  entrypoint: string;
  format: GPUShaderFormat;
  num_samplers: number;
  num_readonly_storage_textures: number;
  num_readonly_storage_buffers: number;
  num_readwrite_storage_textures: number;
  num_readwrite_storage_buffers: number;
  num_uniform_buffers: number;
  threadcount_x: number;
  threadcount_y: number;
  threadcount_z: number;
  props: number;
}

export interface RawGPUColorTargetInfo extends FreeAddress, MemoryAddress {
  texture: Pointer;
  mip_level: number;
  layer_or_depth_plane: number;
  clear_color: FColor;
  load_op: GPULoadOp;
  store_op: GPUStoreOp;
  resolve_texture: Pointer;
  resolve_mip_level: number;
  resolve_layer: number;
  cycle: boolean;
  cycle_resolve_texture: boolean;
  padding1: number;
  padding2: number;
}

export interface RawGPUDepthStencilTargetInfo
  extends FreeAddress,
    MemoryAddress {
  texture: Pointer;
  clear_depth: number;
  load_op: GPULoadOp;
  store_op: GPUStoreOp;
  stencil_load_op: GPULoadOp;
  stencil_store_op: GPUStoreOp;
  cycle: boolean;
  clear_stencil: number;
  mip_level: number;
  layer: number;
}

export interface RawGPUBlitInfo extends FreeAddress, MemoryAddress {
  source: GPUBlitRegion;
  destination: GPUBlitRegion;
  load_op: GPULoadOp;
  clear_color: FColor;
  flip_mode: FlipMode;
  filter: GPUFilter;
  cycle: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export interface RawGPUBufferBinding extends FreeAddress, MemoryAddress {
  buffer: Pointer;
  offset: number;
}

export interface RawGPUTextureSamplerBinding
  extends FreeAddress,
    MemoryAddress {
  texture: Pointer;
  sampler: Pointer;
}

export interface RawGPUStorageBufferReadWriteBinding
  extends FreeAddress,
    MemoryAddress {
  buffer: Pointer;
  cycle: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export interface RawGPUStorageTextureReadWriteBinding
  extends FreeAddress,
    MemoryAddress {
  texture: Pointer;
  mip_level: number;
  layer: number;
  cycle: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}
