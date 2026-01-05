import type { Pointer } from 'bun:ffi';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { GPUTextureSamplerBinding } from '../../gpu/utility/gpu-texture-sampler-binding';
import type { FColor } from '../../pixels/utility/fcolor';
import type { FPoint } from '../../rect/utility/fpoint';

export interface RawVertex extends FreeAddress, MemoryAddress {
  position: FPoint;
  color: FColor;
  tex_coord: FPoint;
}

export interface RawGPURenderStateCreateInfo
  extends FreeAddress,
    MemoryAddress {
  fragment_shader: Pointer;
  num_sampler_bindings: number;
  sampler_bindings: GPUTextureSamplerBinding[];
  num_storage_textures: number;
  storage_textures: Pointer;
  num_storage_buffers: number;
  storage_buffers: Pointer;
  props: number;
}
