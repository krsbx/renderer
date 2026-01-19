import { FFIType, type FFIFunction } from 'bun:ffi';

export const GPUDefinition = {
  // bool SDL_GPUSupportsShaderFormats(SDL_GPUShaderFormat format_flags, const char *name);                                                                                                                                                                                                                    // Checks for GPU runtime support.
  SDL_GPUSupportsShaderFormats: {
    args: [FFIType.u32, FFIType.cstring],
    returns: FFIType.bool,
  },
  // bool SDL_GPUSupportsProperties(SDL_PropertiesID props);                                                                                                                                                                                                                                                   // Checks for GPU runtime support.
  SDL_GPUSupportsProperties: {
    args: [FFIType.u32],
    returns: FFIType.bool,
  },
  // SDL_GPUDevice * SDL_CreateGPUDevice(SDL_GPUShaderFormat format_flags, bool debug_mode, const char *name);                                                                                                                                                                                                 // Creates a GPU context.
  SDL_CreateGPUDevice: {
    args: [FFIType.u32, FFIType.bool, FFIType.cstring],
    returns: FFIType.ptr,
  },
  // SDL_GPUDevice * SDL_CreateGPUDeviceWithProperties(SDL_PropertiesID props);                                                                                                                                                                                                                                // Creates a GPU context.
  SDL_CreateGPUDeviceWithProperties: {
    args: [FFIType.u32],
    returns: FFIType.ptr,
  },
  // void SDL_DestroyGPUDevice(SDL_GPUDevice *device);                                                                                                                                                                                                                                                         // Destroys a GPU context previously returned by SDL_CreateGPUDevice.
  SDL_DestroyGPUDevice: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // int SDL_GetNumGPUDrivers(void);                                                                                                                                                                                                                                                                           // Get the number of GPU drivers compiled into SDL.
  SDL_GetNumGPUDrivers: {
    args: [],
    returns: FFIType.i32,
  },
  // const char * SDL_GetGPUDriver(int index);                                                                                                                                                                                                                                                                 // Get the name of a built in GPU driver.
  SDL_GetGPUDriver: {
    args: [FFIType.i32],
    returns: FFIType.cstring,
  },
  // const char * SDL_GetGPUDeviceDriver(SDL_GPUDevice *device);                                                                                                                                                                                                                                               // Returns the name of the backend used to create this GPU context.
  SDL_GetGPUDeviceDriver: {
    args: [FFIType.ptr],
    returns: FFIType.cstring,
  },
  // SDL_GPUShaderFormat SDL_GetGPUShaderFormats(SDL_GPUDevice *device);                                                                                                                                                                                                                                       // Returns the supported shader formats for this GPU context.
  SDL_GetGPUShaderFormats: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_PropertiesID SDL_GetGPUDeviceProperties(SDL_GPUDevice *device);                                                                                                                                                                                                                                       // Get the properties associated with a GPU device.
  SDL_GetGPUDeviceProperties: {
    args: [FFIType.ptr],
    returns: FFIType.u32,
  },
  // SDL_GPUComputePipeline * SDL_CreateGPUComputePipeline(SDL_GPUDevice *device, const SDL_GPUComputePipelineCreateInfo *createinfo);                                                                                                                                                                         // Creates a pipeline object to be used in a compute workflow.
  SDL_CreateGPUComputePipeline: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_GPUGraphicsPipeline * SDL_CreateGPUGraphicsPipeline(SDL_GPUDevice *device, const SDL_GPUGraphicsPipelineCreateInfo *createinfo);                                                                                                                                                                      // Creates a pipeline object to be used in a graphics workflow.
  SDL_CreateGPUGraphicsPipeline: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_GPUSampler * SDL_CreateGPUSampler(SDL_GPUDevice *device, const SDL_GPUSamplerCreateInfo *createinfo);                                                                                                                                                                                                 // Creates a sampler object to be used when binding textures in a graphics workflow.
  SDL_CreateGPUSampler: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_GPUShader * SDL_CreateGPUShader(SDL_GPUDevice *device, const SDL_GPUShaderCreateInfo *createinfo);                                                                                                                                                                                                    // Creates a shader to be used when creating a graphics pipeline.
  SDL_CreateGPUShader: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_GPUTexture * SDL_CreateGPUTexture(SDL_GPUDevice *device, const SDL_GPUTextureCreateInfo *createinfo);                                                                                                                                                                                                 // Creates a texture object to be used in graphics or compute workflows.
  SDL_CreateGPUTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_GPUBuffer * SDL_CreateGPUBuffer(SDL_GPUDevice *device, const SDL_GPUBufferCreateInfo *createinfo);                                                                                                                                                                                                    // Creates a buffer object to be used in graphics or compute workflows.
  SDL_CreateGPUBuffer: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // SDL_GPUTransferBuffer * SDL_CreateGPUTransferBuffer(SDL_GPUDevice *device, const SDL_GPUTransferBufferCreateInfo *createinfo);                                                                                                                                                                            // Creates a transfer buffer to be used when uploading to or downloading from graphics resources.
  SDL_CreateGPUTransferBuffer: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_SetGPUBufferName(SDL_GPUDevice *device, SDL_GPUBuffer *buffer, const char *text);                                                                                                                                                                                                                // Sets an arbitrary string constant to label a buffer.
  SDL_SetGPUBufferName: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_SetGPUTextureName(SDL_GPUDevice *device, SDL_GPUTexture *texture, const char *text);                                                                                                                                                                                                             // Sets an arbitrary string constant to label a texture.
  SDL_SetGPUTextureName: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_InsertGPUDebugLabel(SDL_GPUCommandBuffer *command_buffer, const char *text);                                                                                                                                                                                                                     // Inserts an arbitrary string label into the command buffer callstream.
  SDL_InsertGPUDebugLabel: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_PushGPUDebugGroup(SDL_GPUCommandBuffer *command_buffer, const char *name);                                                                                                                                                                                                                       // Begins a debug group with an arbitrary name.
  SDL_PushGPUDebugGroup: {
    args: [FFIType.ptr, FFIType.cstring],
    returns: FFIType.void,
  },
  // void SDL_PopGPUDebugGroup(SDL_GPUCommandBuffer *command_buffer);                                                                                                                                                                                                                                          // Ends the most-recently pushed debug group.
  SDL_PopGPUDebugGroup: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_ReleaseGPUTexture(SDL_GPUDevice *device, SDL_GPUTexture *texture);                                                                                                                                                                                                                               // Frees the given texture as soon as it is safe to do so.
  SDL_ReleaseGPUTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_ReleaseGPUSampler(SDL_GPUDevice *device, SDL_GPUSampler *sampler);                                                                                                                                                                                                                               // Frees the given sampler as soon as it is safe to do so.
  SDL_ReleaseGPUSampler: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_ReleaseGPUBuffer(SDL_GPUDevice *device, SDL_GPUBuffer *buffer);                                                                                                                                                                                                                                  // Frees the given buffer as soon as it is safe to do so.
  SDL_ReleaseGPUBuffer: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_ReleaseGPUTransferBuffer(SDL_GPUDevice *device, SDL_GPUTransferBuffer *transfer_buffer);                                                                                                                                                                                                         // Frees the given transfer buffer as soon as it is safe to do so.
  SDL_ReleaseGPUTransferBuffer: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_ReleaseGPUComputePipeline(SDL_GPUDevice *device, SDL_GPUComputePipeline *compute_pipeline);                                                                                                                                                                                                      // Frees the given compute pipeline as soon as it is safe to do so.
  SDL_ReleaseGPUComputePipeline: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_ReleaseGPUShader(SDL_GPUDevice *device, SDL_GPUShader *shader);                                                                                                                                                                                                                                  // Frees the given shader as soon as it is safe to do so.
  SDL_ReleaseGPUShader: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_ReleaseGPUGraphicsPipeline(SDL_GPUDevice *device, SDL_GPUGraphicsPipeline *graphics_pipeline);                                                                                                                                                                                                   // Frees the given graphics pipeline as soon as it is safe to do so.
  SDL_ReleaseGPUGraphicsPipeline: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_GPUCommandBuffer * SDL_AcquireGPUCommandBuffer(SDL_GPUDevice *device);                                                                                                                                                                                                                                // Acquire a command buffer.
  SDL_AcquireGPUCommandBuffer: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_PushGPUVertexUniformData(SDL_GPUCommandBuffer *command_buffer, Uint32 slot_index, const void *data, Uint32 length);                                                                                                                                                                              // Pushes data to a vertex uniform slot on the command buffer.
  SDL_PushGPUVertexUniformData: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_PushGPUFragmentUniformData(SDL_GPUCommandBuffer *command_buffer, Uint32 slot_index, const void *data, Uint32 length);                                                                                                                                                                            // Pushes data to a fragment uniform slot on the command buffer.
  SDL_PushGPUFragmentUniformData: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_PushGPUComputeUniformData(SDL_GPUCommandBuffer *command_buffer, Uint32 slot_index, const void *data, Uint32 length);                                                                                                                                                                             // Pushes data to a uniform slot on the command buffer.
  SDL_PushGPUComputeUniformData: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // SDL_GPURenderPass * SDL_BeginGPURenderPass(SDL_GPUCommandBuffer *command_buffer, const SDL_GPUColorTargetInfo *color_target_infos, Uint32 num_color_targets, const SDL_GPUDepthStencilTargetInfo *depth_stencil_target_info);                                                                             // Begins a render pass on a command buffer.
  SDL_BeginGPURenderPass: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_BindGPUGraphicsPipeline(SDL_GPURenderPass *render_pass, SDL_GPUGraphicsPipeline *graphics_pipeline);                                                                                                                                                                                             // Binds a graphics pipeline on a render pass to be used in rendering.
  SDL_BindGPUGraphicsPipeline: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_SetGPUViewport(SDL_GPURenderPass *render_pass, const SDL_GPUViewport *viewport);                                                                                                                                                                                                                 // Sets the current viewport state on a command buffer.
  SDL_SetGPUViewport: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_SetGPUScissor(SDL_GPURenderPass *render_pass, const SDL_Rect *scissor);                                                                                                                                                                                                                          // Sets the current scissor state on a command buffer.
  SDL_SetGPUScissor: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_SetGPUBlendConstants(SDL_GPURenderPass *render_pass, SDL_FColor blend_constants);                                                                                                                                                                                                                // Sets the current blend constants on a command buffer.
  SDL_SetGPUBlendConstants: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_SetGPUStencilReference(SDL_GPURenderPass *render_pass, Uint8 reference);                                                                                                                                                                                                                         // Sets the current stencil reference value on a command buffer.
  SDL_SetGPUStencilReference: {
    args: [FFIType.ptr, FFIType.u8],
    returns: FFIType.void,
  },
  // void SDL_BindGPUVertexBuffers(SDL_GPURenderPass *render_pass, Uint32 first_slot, const SDL_GPUBufferBinding *bindings, Uint32 num_bindings);                                                                                                                                                              // Binds vertex buffers on a command buffer for use with subsequent draw calls.
  SDL_BindGPUVertexBuffers: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUIndexBuffer(SDL_GPURenderPass *render_pass, const SDL_GPUBufferBinding *binding, SDL_GPUIndexElementSize index_element_size);                                                                                                                                                             // Binds an index buffer on a command buffer for use with subsequent draw calls.
  SDL_BindGPUIndexBuffer: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUVertexSamplers(SDL_GPURenderPass *render_pass, Uint32 first_slot, const SDL_GPUTextureSamplerBinding *texture_sampler_bindings, Uint32 num_bindings);                                                                                                                                     // Binds texture-sampler pairs for use on the vertex shader.
  SDL_BindGPUVertexSamplers: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUVertexStorageTextures(SDL_GPURenderPass *render_pass, Uint32 first_slot, SDL_GPUTexture *const *storage_textures, Uint32 num_bindings);                                                                                                                                                   // Binds storage textures for use on the vertex shader.
  SDL_BindGPUVertexStorageTextures: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUVertexStorageBuffers(SDL_GPURenderPass *render_pass, Uint32 first_slot, SDL_GPUBuffer *const *storage_buffers, Uint32 num_bindings);                                                                                                                                                      // Binds storage buffers for use on the vertex shader.
  SDL_BindGPUVertexStorageBuffers: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUFragmentSamplers(SDL_GPURenderPass *render_pass, Uint32 first_slot, const SDL_GPUTextureSamplerBinding *texture_sampler_bindings, Uint32 num_bindings);                                                                                                                                   // Binds texture-sampler pairs for use on the fragment shader.
  SDL_BindGPUFragmentSamplers: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUFragmentStorageTextures(SDL_GPURenderPass *render_pass, Uint32 first_slot, SDL_GPUTexture *const *storage_textures, Uint32 num_bindings);                                                                                                                                                 // Binds storage textures for use on the fragment shader.
  SDL_BindGPUFragmentStorageTextures: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUFragmentStorageBuffers(SDL_GPURenderPass *render_pass, Uint32 first_slot, SDL_GPUBuffer *const *storage_buffers, Uint32 num_bindings);                                                                                                                                                    // Binds storage buffers for use on the fragment shader.
  SDL_BindGPUFragmentStorageBuffers: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_DrawGPUIndexedPrimitives(SDL_GPURenderPass *render_pass, Uint32 num_indices, Uint32 num_instances, Uint32 first_index, Sint32 vertex_offset, Uint32 first_instance);                                                                                                                             // Draws data using bound graphics state with an index buffer and instancing enabled.
  SDL_DrawGPUIndexedPrimitives: {
    args: [
      FFIType.ptr,
      FFIType.u32,
      FFIType.u32,
      FFIType.u32,
      FFIType.i32,
      FFIType.u32,
    ],
    returns: FFIType.void,
  },
  // void SDL_DrawGPUPrimitives(SDL_GPURenderPass *render_pass, Uint32 num_vertices, Uint32 num_instances, Uint32 first_vertex, Uint32 first_instance);                                                                                                                                                        // Draws data using bound graphics state.
  SDL_DrawGPUPrimitives: {
    args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_DrawGPUPrimitivesIndirect(SDL_GPURenderPass *render_pass, SDL_GPUBuffer *buffer, Uint32 offset, Uint32 draw_count);                                                                                                                                                                              // Draws data using bound graphics state and with draw parameters set from a buffer.
  SDL_DrawGPUPrimitivesIndirect: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_DrawGPUIndexedPrimitivesIndirect(SDL_GPURenderPass *render_pass, SDL_GPUBuffer *buffer, Uint32 offset, Uint32 draw_count);                                                                                                                                                                       // Draws data using bound graphics state with an index buffer enabled and with draw parameters set from a buffer.
  SDL_DrawGPUIndexedPrimitivesIndirect: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_EndGPURenderPass(SDL_GPURenderPass *render_pass);                                                                                                                                                                                                                                                // Ends the given render pass.
  SDL_EndGPURenderPass: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_GPUComputePass * SDL_BeginGPUComputePass(SDL_GPUCommandBuffer *command_buffer, const SDL_GPUStorageTextureReadWriteBinding *storage_texture_bindings, Uint32 num_storage_texture_bindings, const SDL_GPUStorageBufferReadWriteBinding *storage_buffer_bindings, Uint32 num_storage_buffer_bindings);  // Begins a compute pass on a command buffer.
  SDL_BeginGPUComputePass: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.ptr,
  },
  // void SDL_BindGPUComputePipeline(SDL_GPUComputePass *compute_pass, SDL_GPUComputePipeline *compute_pipeline);                                                                                                                                                                                              // Binds a compute pipeline on a command buffer for use in compute dispatch.
  SDL_BindGPUComputePipeline: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_BindGPUComputeSamplers(SDL_GPUComputePass *compute_pass, Uint32 first_slot, const SDL_GPUTextureSamplerBinding *texture_sampler_bindings, Uint32 num_bindings);                                                                                                                                  // Binds texture-sampler pairs for use on the compute shader.
  SDL_BindGPUComputeSamplers: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUComputeStorageTextures(SDL_GPUComputePass *compute_pass, Uint32 first_slot, SDL_GPUTexture *const *storage_textures, Uint32 num_bindings);                                                                                                                                                // Binds storage textures as readonly for use on the compute pipeline.
  SDL_BindGPUComputeStorageTextures: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_BindGPUComputeStorageBuffers(SDL_GPUComputePass *compute_pass, Uint32 first_slot, SDL_GPUBuffer *const *storage_buffers, Uint32 num_bindings);                                                                                                                                                   // Binds storage buffers as readonly for use on the compute pipeline.
  SDL_BindGPUComputeStorageBuffers: {
    args: [FFIType.ptr, FFIType.u32, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_DispatchGPUCompute(SDL_GPUComputePass *compute_pass, Uint32 groupcount_x, Uint32 groupcount_y, Uint32 groupcount_z);                                                                                                                                                                             // Dispatches compute work.
  SDL_DispatchGPUCompute: {
    args: [FFIType.ptr, FFIType.u32, FFIType.u32, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_DispatchGPUComputeIndirect(SDL_GPUComputePass *compute_pass, SDL_GPUBuffer *buffer, Uint32 offset);                                                                                                                                                                                              // Dispatches compute work with parameters set from a buffer.
  SDL_DispatchGPUComputeIndirect: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.u32],
    returns: FFIType.void,
  },
  // void SDL_EndGPUComputePass(SDL_GPUComputePass *compute_pass);                                                                                                                                                                                                                                             // Ends the current compute pass.
  SDL_EndGPUComputePass: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void * SDL_MapGPUTransferBuffer(SDL_GPUDevice *device, SDL_GPUTransferBuffer *transfer_buffer, bool cycle);                                                                                                                                                                                               // Maps a transfer buffer into application address space.
  SDL_MapGPUTransferBuffer: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.bool],
    returns: FFIType.ptr,
  },
  // void SDL_UnmapGPUTransferBuffer(SDL_GPUDevice *device, SDL_GPUTransferBuffer *transfer_buffer);                                                                                                                                                                                                           // Unmaps a previously mapped transfer buffer.
  SDL_UnmapGPUTransferBuffer: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // SDL_GPUCopyPass * SDL_BeginGPUCopyPass(SDL_GPUCommandBuffer *command_buffer);                                                                                                                                                                                                                             // Begins a copy pass on a command buffer.
  SDL_BeginGPUCopyPass: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // void SDL_UploadToGPUTexture(SDL_GPUCopyPass *copy_pass, const SDL_GPUTextureTransferInfo *source, const SDL_GPUTextureRegion *destination, bool cycle);                                                                                                                                                   // Uploads data from a transfer buffer to a texture.
  SDL_UploadToGPUTexture: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.bool],
    returns: FFIType.void,
  },
  // void SDL_UploadToGPUBuffer(SDL_GPUCopyPass *copy_pass, const SDL_GPUTransferBufferLocation *source, const SDL_GPUBufferRegion *destination, bool cycle);                                                                                                                                                  // Uploads data from a transfer buffer to a buffer.
  SDL_UploadToGPUBuffer: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.bool],
    returns: FFIType.void,
  },
  // void SDL_CopyGPUTextureToTexture(SDL_GPUCopyPass *copy_pass, const SDL_GPUTextureLocation *source, const SDL_GPUTextureLocation *destination, Uint32 w, Uint32 h, Uint32 d, bool cycle);                                                                                                                  // Performs a texture-to-texture copy.
  SDL_CopyGPUTextureToTexture: {
    args: [
      FFIType.ptr,
      FFIType.ptr,
      FFIType.ptr,
      FFIType.u32,
      FFIType.u32,
      FFIType.u32,
      FFIType.bool,
    ],
    returns: FFIType.void,
  },
  // void SDL_CopyGPUBufferToBuffer(SDL_GPUCopyPass *copy_pass, const SDL_GPUBufferLocation *source, const SDL_GPUBufferLocation *destination, Uint32 size, bool cycle);                                                                                                                                       // Performs a buffer-to-buffer copy.
  SDL_CopyGPUBufferToBuffer: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.u32, FFIType.bool],
    returns: FFIType.void,
  },
  // void SDL_DownloadFromGPUTexture(SDL_GPUCopyPass *copy_pass, const SDL_GPUTextureRegion *source, const SDL_GPUTextureTransferInfo *destination);                                                                                                                                                           // Copies data from a texture to a transfer buffer on the GPU timeline.
  SDL_DownloadFromGPUTexture: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_DownloadFromGPUBuffer(SDL_GPUCopyPass *copy_pass, const SDL_GPUBufferRegion *source, const SDL_GPUTransferBufferLocation *destination);                                                                                                                                                          // Copies data from a buffer to a transfer buffer on the GPU timeline.
  SDL_DownloadFromGPUBuffer: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_EndGPUCopyPass(SDL_GPUCopyPass *copy_pass);                                                                                                                                                                                                                                                      // Ends the current copy pass.
  SDL_EndGPUCopyPass: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_GenerateMipmapsForGPUTexture(SDL_GPUCommandBuffer *command_buffer, SDL_GPUTexture *texture);                                                                                                                                                                                                     // Generates mipmaps for the given texture.
  SDL_GenerateMipmapsForGPUTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_BlitGPUTexture(SDL_GPUCommandBuffer *command_buffer, const SDL_GPUBlitInfo *info);                                                                                                                                                                                                               // Blits from a source texture region to a destination texture region.
  SDL_BlitGPUTexture: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_WindowSupportsGPUSwapchainComposition(SDL_GPUDevice *device, SDL_Window *window, SDL_GPUSwapchainComposition swapchain_composition);                                                                                                                                                             // Determines whether a swapchain composition is supported by the window.
  SDL_WindowSupportsGPUSwapchainComposition: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_WindowSupportsGPUPresentMode(SDL_GPUDevice *device, SDL_Window *window, SDL_GPUPresentMode present_mode);                                                                                                                                                                                        // Determines whether a presentation mode is supported by the window.
  SDL_WindowSupportsGPUPresentMode: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_ClaimWindowForGPUDevice(SDL_GPUDevice *device, SDL_Window *window);                                                                                                                                                                                                                              // Claims a window, creating a swapchain structure for it.
  SDL_ClaimWindowForGPUDevice: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_ReleaseWindowFromGPUDevice(SDL_GPUDevice *device, SDL_Window *window);                                                                                                                                                                                                                           // Unclaims a window, destroying its swapchain structure.
  SDL_ReleaseWindowFromGPUDevice: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // bool SDL_SetGPUSwapchainParameters(SDL_GPUDevice *device, SDL_Window *window, SDL_GPUSwapchainComposition swapchain_composition, SDL_GPUPresentMode present_mode);                                                                                                                                        // Changes the swapchain parameters for the given claimed window.
  SDL_SetGPUSwapchainParameters: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // bool SDL_SetGPUAllowedFramesInFlight(SDL_GPUDevice *device, Uint32 allowed_frames_in_flight);                                                                                                                                                                                                             // Configures the maximum allowed number of frames in flight.
  SDL_SetGPUAllowedFramesInFlight: {
    args: [FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // SDL_GPUTextureFormat SDL_GetGPUSwapchainTextureFormat(SDL_GPUDevice *device, SDL_Window *window);                                                                                                                                                                                                         // Obtains the texture format of the swapchain for the given window.
  SDL_GetGPUSwapchainTextureFormat: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.i32,
  },
  // bool SDL_AcquireGPUSwapchainTexture(SDL_GPUCommandBuffer *command_buffer, SDL_Window *window, SDL_GPUTexture **swapchain_texture, Uint32 *swapchain_texture_width, Uint32 *swapchain_texture_height);                                                                                                     // Acquire a texture to use in presentation.
  SDL_AcquireGPUSwapchainTexture: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WaitForGPUSwapchain(SDL_GPUDevice *device, SDL_Window *window);                                                                                                                                                                                                                                  // Blocks the thread until a swapchain texture is available to be acquired.
  SDL_WaitForGPUSwapchain: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WaitAndAcquireGPUSwapchainTexture(SDL_GPUCommandBuffer *command_buffer, SDL_Window *window, SDL_GPUTexture **swapchain_texture, Uint32 *swapchain_texture_width, Uint32 *swapchain_texture_height);                                                                                              // Blocks the thread until a swapchain texture is available to be acquired, and then acquires it.
  SDL_WaitAndAcquireGPUSwapchainTexture: {
    args: [FFIType.ptr, FFIType.ptr, FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_SubmitGPUCommandBuffer(SDL_GPUCommandBuffer *command_buffer);                                                                                                                                                                                                                                    // Submits a command buffer so its commands can be processed on the GPU.
  SDL_SubmitGPUCommandBuffer: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // SDL_GPUFence * SDL_SubmitGPUCommandBufferAndAcquireFence(SDL_GPUCommandBuffer *command_buffer);                                                                                                                                                                                                           // Submits a command buffer so its commands can be processed on the GPU, and acquires a fence associated with the command buffer.
  SDL_SubmitGPUCommandBufferAndAcquireFence: {
    args: [FFIType.ptr],
    returns: FFIType.ptr,
  },
  // bool SDL_CancelGPUCommandBuffer(SDL_GPUCommandBuffer *command_buffer);                                                                                                                                                                                                                                    // Cancels a command buffer.
  SDL_CancelGPUCommandBuffer: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WaitForGPUIdle(SDL_GPUDevice *device);                                                                                                                                                                                                                                                           // Blocks the thread until the GPU is completely idle.
  SDL_WaitForGPUIdle: {
    args: [FFIType.ptr],
    returns: FFIType.bool,
  },
  // bool SDL_WaitForGPUFences(SDL_GPUDevice *device, bool wait_all, SDL_GPUFence *const *fences, Uint32 num_fences);                                                                                                                                                                                          // Blocks the thread until the given fences are signaled.
  SDL_WaitForGPUFences: {
    args: [FFIType.ptr, FFIType.bool, FFIType.ptr, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_QueryGPUFence(SDL_GPUDevice *device, SDL_GPUFence *fence);                                                                                                                                                                                                                                       // Checks the status of a fence.
  SDL_QueryGPUFence: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.bool,
  },
  // void SDL_ReleaseGPUFence(SDL_GPUDevice *device, SDL_GPUFence *fence);                                                                                                                                                                                                                                     // Releases a fence obtained from SDL_SubmitGPUCommandBufferAndAcquireFence.
  SDL_ReleaseGPUFence: {
    args: [FFIType.ptr, FFIType.ptr],
    returns: FFIType.void,
  },
  // Uint32 SDL_GPUTextureFormatTexelBlockSize(SDL_GPUTextureFormat format);                                                                                                                                                                                                                                   // Obtains the texel block size for a texture format.
  SDL_GPUTextureFormatTexelBlockSize: {
    args: [FFIType.i32],
    returns: FFIType.u32,
  },
  // bool SDL_GPUTextureSupportsFormat(SDL_GPUDevice *device, SDL_GPUTextureFormat format, SDL_GPUTextureType type, SDL_GPUTextureUsageFlags usage);                                                                                                                                                           // Determines whether a texture format is supported for a given type and usage.
  SDL_GPUTextureSupportsFormat: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32, FFIType.u32],
    returns: FFIType.bool,
  },
  // bool SDL_GPUTextureSupportsSampleCount(SDL_GPUDevice *device, SDL_GPUTextureFormat format, SDL_GPUSampleCount sample_count);                                                                                                                                                                              // Determines if a sample count for a texture format is supported.
  SDL_GPUTextureSupportsSampleCount: {
    args: [FFIType.ptr, FFIType.i32, FFIType.i32],
    returns: FFIType.bool,
  },
  // Uint32 SDL_CalculateGPUTextureFormatSize(SDL_GPUTextureFormat format, Uint32 width, Uint32 height, Uint32 depth_or_layer_count);                                                                                                                                                                          // Calculate the size in bytes of a texture format with dimensions.
  SDL_CalculateGPUTextureFormatSize: {
    args: [FFIType.i32, FFIType.u32, FFIType.u32, FFIType.u32],
    returns: FFIType.u32,
  },
  // SDL_PixelFormat SDL_GetPixelFormatFromGPUTextureFormat(SDL_GPUTextureFormat format);                                                                                                                                                                                                                      // Get the SDL pixel format corresponding to a GPU texture format.
  SDL_GetPixelFormatFromGPUTextureFormat: {
    args: [FFIType.i32],
    returns: FFIType.u32,
  },
  // SDL_GPUTextureFormat SDL_GetGPUTextureFormatFromPixelFormat(SDL_PixelFormat format);                                                                                                                                                                                                                      // Get the GPU texture format corresponding to an SDL pixel format.
  SDL_GetGPUTextureFormatFromPixelFormat: {
    args: [FFIType.u32],
    returns: FFIType.i32,
  },
  // void SDL_GDKSuspendGPU(SDL_GPUDevice *device);                                                                                                                                                                                                                                                            // Call this to suspend GPU operation on Xbox when you receive the SDL_EVENT_DID_ENTER_BACKGROUND event.
  SDL_GDKSuspendGPU: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
  // void SDL_GDKResumeGPU(SDL_GPUDevice *device);                                                                                                                                                                                                                                                             // Call this to resume GPU operation on Xbox when you receive the SDL_EVENT_WILL_ENTER_FOREGROUND event.
  SDL_GDKResumeGPU: {
    args: [FFIType.ptr],
    returns: FFIType.void,
  },
} satisfies Record<string, FFIFunction>;
