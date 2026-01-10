import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import { GPUMultisampleState, GPURasterizerState } from '../../common';
import { GPUDepthStencilState } from '../../stencil';
import { GPUVertexInputState } from '../../vertex';
import { GPUGraphicsPipelineTargetInfo } from '../gpu-graphics-pipeline-target-info';
import { ByteOffset } from './constant';

export class GPUGraphicsPipelineCreateInfo {
  public static readonly BYTE_SIZE = 168;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly vertex_input_state: GPUVertexInputState;
  public readonly rasterizer_state: GPURasterizerState;
  public readonly multisample_state: GPUMultisampleState;
  public readonly depth_stencil_state: GPUDepthStencilState;
  public readonly target_info: GPUGraphicsPipelineTargetInfo;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        GPUGraphicsPipelineCreateInfo.BYTE_SIZE
      );
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.vertex_input_state = new GPUVertexInputState(
      this.$memory.subarray(
        ByteOffset.vertex_input_state,
        GPUVertexInputState.BYTE_SIZE + ByteOffset.vertex_input_state
      )
    );
    this.rasterizer_state = new GPURasterizerState(
      this.$memory.subarray(
        ByteOffset.rasterizer_state,
        GPURasterizerState.BYTE_SIZE + ByteOffset.rasterizer_state
      )
    );
    this.multisample_state = new GPUMultisampleState(
      this.$memory.subarray(
        ByteOffset.multisample_state,
        GPUMultisampleState.BYTE_SIZE + ByteOffset.multisample_state
      )
    );
    this.depth_stencil_state = new GPUDepthStencilState(
      this.$memory.subarray(
        ByteOffset.depth_stencil_state,
        GPUDepthStencilState.BYTE_SIZE + ByteOffset.depth_stencil_state
      )
    );
    this.target_info = new GPUGraphicsPipelineTargetInfo(
      this.$memory.subarray(
        ByteOffset.target_info,
        GPUGraphicsPipelineTargetInfo.BYTE_SIZE + ByteOffset.target_info
      )
    );
  }

  public get vertex_shader() {
    const addr = this.$view.getBigUint64(ByteOffset.vertex_shader, true);

    return Number(addr) as Pointer;
  }

  public set vertex_shader(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.vertex_shader, BigInt(value), true);
  }

  public get fragment_shader() {
    const addr = this.$view.getBigUint64(ByteOffset.fragment_shader, true);

    return Number(addr) as Pointer;
  }

  public set fragment_shader(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.fragment_shader, BigInt(value), true);
  }

  public get primitive_type() {
    return this.$view.getInt32(ByteOffset.primitive_type, true);
  }

  public set primitive_type(value: number) {
    this.$view.setInt32(ByteOffset.primitive_type, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true);
  }

  public set props(value: number) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
