import { BaseStruct, type BaseStructOptions } from '@basestruct';
import type { Int32 } from '@/types/primitive';
import type { GPUShader, PropertiesID } from '@/sdl/types/definition';
import { GPUMultisampleState, GPURasterizerState } from '../../common';
import { GPUDepthStencilState } from '../../stencil';
import { GPUVertexInputState } from '../../vertex';
import { GPUGraphicsPipelineTargetInfo } from '../gpu-graphics-pipeline-target-info';
import { ByteOffset } from './constant';

export class GPUGraphicsPipelineCreateInfo extends BaseStruct {
  public static override readonly BYTE_SIZE = 168;

  public readonly vertexInputState: GPUVertexInputState;
  public readonly rasterizerState: GPURasterizerState;
  public readonly multisampleState: GPUMultisampleState;
  public readonly depthStencilState: GPUDepthStencilState;
  public readonly targetInfo: GPUGraphicsPipelineTargetInfo;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.vertexInputState = new GPUVertexInputState(
      this.$memory.subarray(
        ByteOffset.vertex_input_state,
        GPUVertexInputState.BYTE_SIZE + ByteOffset.vertex_input_state
      )
    );
    this.rasterizerState = new GPURasterizerState(
      this.$memory.subarray(
        ByteOffset.rasterizer_state,
        GPURasterizerState.BYTE_SIZE + ByteOffset.rasterizer_state
      )
    );
    this.multisampleState = new GPUMultisampleState(
      this.$memory.subarray(
        ByteOffset.multisample_state,
        GPUMultisampleState.BYTE_SIZE + ByteOffset.multisample_state
      )
    );
    this.depthStencilState = new GPUDepthStencilState(
      this.$memory.subarray(
        ByteOffset.depth_stencil_state,
        GPUDepthStencilState.BYTE_SIZE + ByteOffset.depth_stencil_state
      )
    );
    this.targetInfo = new GPUGraphicsPipelineTargetInfo(
      this.$memory.subarray(
        ByteOffset.target_info,
        GPUGraphicsPipelineTargetInfo.BYTE_SIZE + ByteOffset.target_info
      )
    );
  }

  public get vertexShader() {
    const addr = this.$view.getBigUint64(ByteOffset.vertex_shader, true);

    return Number(addr) as GPUShader;
  }

  public set vertexShader(value: GPUShader) {
    this.$view.setBigUint64(ByteOffset.vertex_shader, BigInt(value), true);
  }

  public get fragmentShader() {
    const addr = this.$view.getBigUint64(ByteOffset.fragment_shader, true);

    return Number(addr) as GPUShader;
  }

  public set fragmentShader(value: GPUShader) {
    this.$view.setBigUint64(ByteOffset.fragment_shader, BigInt(value), true);
  }

  public get primitiveType() {
    return this.$view.getInt32(ByteOffset.primitive_type, true) as Int32;
  }

  public set primitiveType(value: Int32) {
    this.$view.setInt32(ByteOffset.primitive_type, value, true);
  }

  public get props() {
    return this.$view.getUint32(ByteOffset.props, true) as PropertiesID;
  }

  public set props(value: PropertiesID) {
    this.$view.setUint32(ByteOffset.props, value, true);
  }
}
