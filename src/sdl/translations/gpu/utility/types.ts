import type { Pointer } from 'bun:ffi';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';

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
