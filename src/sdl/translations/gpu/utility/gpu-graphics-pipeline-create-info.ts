import { type Pointer, read } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import type { GPUPrimitiveType } from '../../../ffi/gpu/constant';
import { GPUDepthStencilState } from './gpu-depth-stencil-state';
import { GPUGraphicsPipelineTargetInfo } from './gpu-graphics-pipeline-target-info';
import { GPUMultisampleState } from './gpu-multi-sample-state';
import { GPURasterizerState } from './gpu-rasterizer-state';
import { GPUVertexInputState } from './gpu-vertext-input-state';
import type { RawGPUGraphicsPipelineCreateInfo } from './types';

export class GPUGraphicsPipelineCreateInfo
  implements RawGPUGraphicsPipelineCreateInfo
{
  public static readonly BYTE_SIZE = 160;

  public vertex_shader: Pointer;
  public fragment_shader: Pointer;
  public vertex_input_state: GPUVertexInputState;
  public primitive_type: GPUPrimitiveType;
  public rasterizer_state: GPURasterizerState;
  public multisample_state: GPUMultisampleState;
  public depth_stencil_state: GPUDepthStencilState;
  public target_info: GPUGraphicsPipelineTargetInfo;
  public props: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawGPUGraphicsPipelineCreateInfo) {
    this.vertex_shader = options.vertex_shader;
    this.fragment_shader = options.fragment_shader;
    this.vertex_input_state = options.vertex_input_state;
    this.primitive_type = options.primitive_type;
    this.rasterizer_state = options.rasterizer_state;
    this.multisample_state = options.multisample_state;
    this.depth_stencil_state = options.depth_stencil_state;
    this.target_info = options.target_info;
    this.props = options.props;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = new Uint8Array(GPUGraphicsPipelineCreateInfo.BYTE_SIZE);
    const view = new DataView(buffer.buffer);

    view.setBigUint64(0, BigInt(this.vertex_shader ?? 0n), true);
    view.setBigUint64(8, BigInt(this.fragment_shader ?? 0n), true);

    buffer.set(this.vertex_input_state.toMemory(), 16);
    view.setInt32(48, this.primitive_type, true);
    buffer.set(this.rasterizer_state.toMemory(), 52);
    buffer.set(this.multisample_state.toMemory(), 80);
    buffer.set(this.depth_stencil_state.toMemory(), 92);
    buffer.set(this.target_info.toMemory(), 128);
    view.setUint32(152, this.props, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(GPUGraphicsPipelineCreateInfo.BYTE_SIZE);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const vertex_shader = read.ptr(pointer, 0);
    const fragment_shader = read.ptr(pointer, 8);
    const vertex_input_state = GPUVertexInputState.fromPointer(
      (BigInt(pointer) + 16n) as unknown as Pointer,
      sdl
    );
    const primitive_type = read.i32(pointer, 48);
    const rasterizer_state = GPURasterizerState.fromPointer(
      (BigInt(pointer) + 52n) as unknown as Pointer,
      sdl
    );
    const multisample_state = GPUMultisampleState.fromPointer(
      (BigInt(pointer) + 80n) as unknown as Pointer,
      sdl
    );
    const depth_stencil_state = GPUDepthStencilState.fromPointer(
      (BigInt(pointer) + 92n) as unknown as Pointer,
      sdl
    );
    const target_info = GPUGraphicsPipelineTargetInfo.fromPointer(
      (BigInt(pointer) + 128n) as unknown as Pointer,
      sdl
    );
    const props = read.u32(pointer, 152);

    const result = {
      vertex_shader,
      fragment_shader,
      vertex_input_state,
      primitive_type,
      rasterizer_state,
      multisample_state,
      depth_stencil_state,
      target_info,
      props,
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawGPUGraphicsPipelineCreateInfo;

    return new GPUGraphicsPipelineCreateInfo(result);
  }

  public static fromMemory(data: Uint8Array, sdl: BaseSDL) {
    const view = new DataView(data.buffer, data.byteOffset, data.byteLength);

    const result = {
      vertex_shader: view.getBigUint64(0, true) as unknown as Pointer,
      fragment_shader: view.getBigUint64(8, true) as unknown as Pointer,
      vertex_input_state: GPUVertexInputState.fromMemory(data.slice(16), sdl),
      primitive_type: view.getInt32(48, true),
      rasterizer_state: GPURasterizerState.fromMemory(data.slice(52)),
      multisample_state: GPUMultisampleState.fromMemory(data.slice(80)),
      depth_stencil_state: GPUDepthStencilState.fromMemory(data.slice(92)),
      target_info: GPUGraphicsPipelineTargetInfo.fromMemory(
        data.slice(128),
        sdl
      ),
      props: view.getUint32(152, true),
      free: null,
      address: null,
    } as RawGPUGraphicsPipelineCreateInfo;

    return new GPUGraphicsPipelineCreateInfo(result);
  }
}
