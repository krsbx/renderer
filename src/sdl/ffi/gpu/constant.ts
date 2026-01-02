export const GPUPrimitiveType = {
  TRIANGLELIST: 0 /**< A series of separate triangles. */,
  TRIANGLESTRIP: 1 /**< A series of connected triangles. */,
  LINELIST: 2 /**< A series of separate lines. */,
  LINESTRIP: 3 /**< A series of connected lines. */,
  POINTLIST: 4 /**< A series of separate points. */,
} as const;

export type GPUPrimitiveType =
  (typeof GPUPrimitiveType)[keyof typeof GPUPrimitiveType];

export const GPULoadOp = {
  LOAD: 0 /**< The previous contents of the texture will be preserved. */,
  CLEAR: 1 /**< The contents of the texture will be cleared to a color. */,
  DONT_CARE: 2 /**< The previous contents of the texture need not be preserved. The contents will be undefined. */,
} as const;

export type GPULoadOp = (typeof GPULoadOp)[keyof typeof GPULoadOp];

export const GPUStoreOp = {
  STORE: 0 /**< The contents generated during the render pass will be written to memory. */,
  DONT_CARE: 1 /**< The contents generated during the render pass are not needed and may be discarded. The contents will be undefined. */,
  RESOLVE: 2 /**< The multisample contents generated during the render pass will be resolved to a non-multisample texture. The contents in the multisample texture may then be discarded and will be undefined. */,
  RESOLVE_AND_STORE: 3 /**< The multisample contents generated during the render pass will be resolved to a non-multisample texture. The contents in the multisample texture will be written to memory. */,
} as const;

export type GPUStoreOp = (typeof GPUStoreOp)[keyof typeof GPUStoreOp];

export const GPUIndexElementSize = {
  '16BIT': 0 /**< The index elements are 16-bit. */,
  '32BIT': 1 /**< The index elements are 32-bit. */,
} as const;

export type GPUIndexElementSize =
  (typeof GPUIndexElementSize)[keyof typeof GPUIndexElementSize];

export const GPUTextureFormat = {
  INVALID: 0,

  /* Unsigned Normalized Float Color Formats */
  A8_UNORM: 1,
  R8_UNORM: 2,
  R8G8_UNORM: 3,
  R8G8B8A8_UNORM: 4,
  R16_UNORM: 5,
  R16G16_UNORM: 6,
  R16G16B16A16_UNORM: 7,
  R10G10B10A2_UNORM: 8,
  B5G6R5_UNORM: 9,
  B5G5R5A1_UNORM: 10,
  B4G4R4A4_UNORM: 11,
  B8G8R8A8_UNORM: 12,
  /* Compressed Unsigned Normalized Float Color Formats */
  BC1_RGBA_UNORM: 13,
  BC2_RGBA_UNORM: 14,
  BC3_RGBA_UNORM: 15,
  BC4_R_UNORM: 16,
  BC5_RG_UNORM: 17,
  BC7_RGBA_UNORM: 18,
  /* Compressed Signed Float Color Formats */
  BC6H_RGB_FLOAT: 19,
  /* Compressed Unsigned Float Color Formats */
  BC6H_RGB_UFLOAT: 20,
  /* Signed Normalized Float Color Formats  */
  R8_SNORM: 21,
  R8G8_SNORM: 22,
  R8G8B8A8_SNORM: 23,
  R16_SNORM: 24,
  R16G16_SNORM: 25,
  R16G16B16A16_SNORM: 26,
  /* Signed Float Color Formats */
  R16_FLOAT: 27,
  R16G16_FLOAT: 28,
  R16G16B16A16_FLOAT: 29,
  R32_FLOAT: 30,
  R32G32_FLOAT: 31,
  R32G32B32A32_FLOAT: 32,
  /* Unsigned Float Color Formats */
  R11G11B10_UFLOAT: 33,
  /* Unsigned Integer Color Formats */
  R8_UINT: 34,
  R8G8_UINT: 35,
  R8G8B8A8_UINT: 36,
  R16_UINT: 37,
  R16G16_UINT: 38,
  R16G16B16A16_UINT: 39,
  R32_UINT: 40,
  R32G32_UINT: 41,
  R32G32B32A32_UINT: 42,
  /* Signed Integer Color Formats */
  R8_INT: 43,
  R8G8_INT: 44,
  R8G8B8A8_INT: 45,
  R16_INT: 46,
  R16G16_INT: 47,
  R16G16B16A16_INT: 48,
  R32_INT: 49,
  R32G32_INT: 50,
  R32G32B32A32_INT: 51,
  /* SRGB Unsigned Normalized Color Formats */
  R8G8B8A8_UNORM_SRGB: 52,
  B8G8R8A8_UNORM_SRGB: 53,
  /* Compressed SRGB Unsigned Normalized Color Formats */
  BC1_RGBA_UNORM_SRGB: 54,
  BC2_RGBA_UNORM_SRGB: 55,
  BC3_RGBA_UNORM_SRGB: 56,
  BC7_RGBA_UNORM_SRGB: 57,
  /* Depth Formats */
  D16_UNORM: 58,
  D24_UNORM: 59,
  D32_FLOAT: 60,
  D24_UNORM_S8_UINT: 61,
  D32_FLOAT_S8_UINT: 62,
  /* Compressed ASTC Normalized Float Color Formats*/
  ASTC_4x4_UNORM: 63,
  ASTC_5x4_UNORM: 64,
  ASTC_5x5_UNORM: 65,
  ASTC_6x5_UNORM: 66,
  ASTC_6x6_UNORM: 67,
  ASTC_8x5_UNORM: 68,
  ASTC_8x6_UNORM: 69,
  ASTC_8x8_UNORM: 70,
  ASTC_10x5_UNORM: 71,
  ASTC_10x6_UNORM: 72,
  ASTC_10x8_UNORM: 73,
  ASTC_10x10_UNORM: 74,
  ASTC_12x10_UNORM: 75,
  ASTC_12x12_UNORM: 76,
  /* Compressed SRGB ASTC Normalized Float Color Formats*/
  ASTC_4x4_UNORM_SRGB: 77,
  ASTC_5x4_UNORM_SRGB: 78,
  ASTC_5x5_UNORM_SRGB: 79,
  ASTC_6x5_UNORM_SRGB: 80,
  ASTC_6x6_UNORM_SRGB: 81,
  ASTC_8x5_UNORM_SRGB: 82,
  ASTC_8x6_UNORM_SRGB: 83,
  ASTC_8x8_UNORM_SRGB: 84,
  ASTC_10x5_UNORM_SRGB: 85,
  ASTC_10x6_UNORM_SRGB: 86,
  ASTC_10x8_UNORM_SRGB: 87,
  ASTC_10x10_UNORM_SRGB: 88,
  ASTC_12x10_UNORM_SRGB: 89,
  ASTC_12x12_UNORM_SRGB: 90,
  /* Compressed ASTC Signed Float Color Formats*/
  ASTC_4x4_FLOAT: 91,
  ASTC_5x4_FLOAT: 92,
  ASTC_5x5_FLOAT: 93,
  ASTC_6x5_FLOAT: 94,
  ASTC_6x6_FLOAT: 95,
  ASTC_8x5_FLOAT: 96,
  ASTC_8x6_FLOAT: 97,
  ASTC_8x8_FLOAT: 98,
  ASTC_10x5_FLOAT: 99,
  ASTC_10x6_FLOAT: 100,
  ASTC_10x8_FLOAT: 101,
  ASTC_10x10_FLOAT: 102,
  ASTC_12x10_FLOAT: 103,
  ASTC_12x12_FLOAT: 104,
} as const;

export type GPUTextureFormat =
  (typeof GPUTextureFormat)[keyof typeof GPUTextureFormat];

export const GPUTextureUsageFlags = {
  SAMPLER: 1 << 0 /**< Texture supports sampling. */,
  COLOR_TARGET: 1 << 1 /**< Texture is a color render target. */,
  DEPTH_STENCIL_TARGET: 1 << 2 /**< Texture is a depth stencil target. */,
  GRAPHICS_STORAGE_READ:
    1 << 3 /**< Texture supports storage reads in graphics stages. */,
  COMPUTE_STORAGE_READ:
    1 << 4 /**< Texture supports storage reads in the compute stage. */,
  COMPUTE_STORAGE_WRITE:
    1 << 5 /**< Texture supports storage writes in the compute stage. */,
  COMPUTE_STORAGE_SIMULTANEOUS_READ_WRITE:
    1 <<
    6 /**< Texture supports reads and writes in the same compute shader. This is NOT equivalent to READ | WRITE. */,
} as const;

export type GPUTextureUsageFlags =
  (typeof GPUTextureUsageFlags)[keyof typeof GPUTextureUsageFlags];

export const GPUTextureType = {
  '2D': 0 /**< The texture is a 2-dimensional image. */,
  '2D_ARRAY': 1 /**< The texture is a 2-dimensional array image. */,
  '3D': 2 /**< The texture is a 3-dimensional image. */,
  CUBE: 3 /**< The texture is a cube image. */,
  CUBE_ARRAY: 4 /**< The texture is a cube array image. */,
} as const;

export type GPUTextureType =
  (typeof GPUTextureType)[keyof typeof GPUTextureType];

export const GPUSampleCount = {
  '1': 0 /**< No multisampling. */,
  '2': 1 /**< MSAA 2x */,
  '4': 2 /**< MSAA 4x */,
  '8': 3 /**< MSAA 8x */,

  // Aliases
  NONE: 0 /**< No multisampling. */,
  '2X': 1 /**< MSAA 2x */,
  '4X': 2 /**< MSAA 4x */,
  '8X': 3 /**< MSAA 8x */,
} as const;

export type GPUSampleCount =
  (typeof GPUSampleCount)[keyof typeof GPUSampleCount];

export const GPUCubeMapFace = {
  POSITIVEX: 0,
  NEGATIVEX: 1,
  POSITIVEY: 2,
  NEGATIVEY: 3,
  POSITIVEZ: 4,
  NEGATIVEZ: 5,
} as const;

export type GPUCubeMapFace =
  (typeof GPUCubeMapFace)[keyof typeof GPUCubeMapFace];

export const GPUBufferUsageFlags = {
  VERTEX: 1 << 0 /**< Buffer is a vertex buffer. */,
  INDEX: 1 << 1 /**< Buffer is an index buffer. */,
  INDIRECT: 1 << 2 /**< Buffer is an indirect buffer. */,
  GRAPHICS_STORAGE_READ:
    1 << 3 /**< Buffer supports storage reads in graphics stages. */,
  COMPUTE_STORAGE_READ:
    1 << 4 /**< Buffer supports storage reads in the compute stage. */,
  COMPUTE_STORAGE_WRITE:
    1 << 5 /**< Buffer supports storage writes in the compute stage. */,
} as const;

export type GPUBufferUsageFlags =
  (typeof GPUBufferUsageFlags)[keyof typeof GPUBufferUsageFlags];

export const GPUTransferBufferUsage = {
  UPLOAD: 0,
  DOWNLOAD: 1,
} as const;

export type GPUTransferBufferUsage =
  (typeof GPUTransferBufferUsage)[keyof typeof GPUTransferBufferUsage];

export const GPUShaderStage = {
  VERTEX: 0,
  FRAGMENT: 1,
} as const;

export type GPUShaderStage =
  (typeof GPUShaderStage)[keyof typeof GPUShaderStage];

export const GPUShaderFormat = {
  INVALID: 0,
  PRIVATE: 1 << 0 /**< Shaders for NDA'd platforms. */,
  SPIRV: 1 << 1 /**< SPIR-V shaders for Vulkan. */,
  DXBC: 1 << 2 /**< DXBC SM5_1 shaders for D3D12. */,
  DXIL: 1 << 3 /**< DXIL SM6_0 shaders for D3D12. */,
  MSL: 1 << 4 /**< MSL shaders for Metal. */,
  METALLIB: 1 << 5 /**< Precompiled metallib shaders for Metal. */,
} as const;

export type GPUShaderFormat =
  (typeof GPUShaderFormat)[keyof typeof GPUShaderFormat];

export const GPUVertexElementFormat = {
  INVALID: 0,

  /* 32-bit Signed Integers */
  INT: 1,
  INT2: 2,
  INT3: 3,
  INT4: 4,

  /* 32-bit Unsigned Integers */
  UINT: 5,
  UINT2: 6,
  UINT3: 7,
  UINT4: 8,

  /* 32-bit Floats */
  FLOAT: 9,
  FLOAT2: 10,
  FLOAT3: 11,
  FLOAT4: 12,

  /* 8-bit Signed Integers */
  BYTE2: 13,
  BYTE4: 14,

  /* 8-bit Unsigned Integers */
  UBYTE2: 15,
  UBYTE4: 16,

  /* 8-bit Signed Normalized */
  BYTE2_NORM: 17,
  BYTE4_NORM: 18,

  /* 8-bit Unsigned Normalized */
  UBYTE2_NORM: 19,
  UBYTE4_NORM: 20,

  /* 16-bit Signed Integers */
  SHORT2: 21,
  SHORT4: 22,

  /* 16-bit Unsigned Integers */
  USHORT2: 23,
  USHORT4: 24,

  /* 16-bit Signed Normalized */
  SHORT2_NORM: 25,
  SHORT4_NORM: 26,

  /* 16-bit Unsigned Normalized */
  USHORT2_NORM: 27,
  USHORT4_NORM: 28,

  /* 16-bit Floats */
  HALF2: 29,
  HALF4: 30,
} as const;

export type GPUVertexElementFormat =
  (typeof GPUVertexElementFormat)[keyof typeof GPUVertexElementFormat];

export const GPUVertexInputRate = {
  VERTEX: 0 /**< Attribute addressing is a function of the vertex index. */,
  INSTANCE: 1 /**< Attribute addressing is a function of the instance index. */,
} as const;

export type GPUVertexInputRate =
  (typeof GPUVertexInputRate)[keyof typeof GPUVertexInputRate];

export const GPUFillMode = {
  FILL: 0 /**< Polygons will be rendered via rasterization. */,
  LINE: 1 /**< Polygon edges will be drawn as line segments. */,
} as const;

export type GPUFillMode = (typeof GPUFillMode)[keyof typeof GPUFillMode];

export const GPUCullMode = {
  NONE: 0 /**< No triangles are culled. */,
  FRONT: 1 /**< Front-facing triangles are culled. */,
  BACK: 2 /**< Back-facing triangles are culled. */,
} as const;

export type GPUCullMode = (typeof GPUCullMode)[keyof typeof GPUCullMode];

export const GPUFrontFace = {
  COUNTER_CLOCKWISE: 0 /**< A triangle with counter-clockwise vertex winding will be considered front-facing. */,
  CLOCKWISE: 1 /**< A triangle with clockwise vertex winding will be considered front-facing. */,
} as const;

export type GPUFrontFace = (typeof GPUFrontFace)[keyof typeof GPUFrontFace];

export const GPUCompareOp = {
  INVALID: 0,
  NEVER: 1 /**< The comparison always evaluates false. */,
  LESS: 2 /**< The comparison evaluates reference < test. */,
  EQUAL: 3 /**< The comparison evaluates reference == test. */,
  LESS_OR_EQUAL: 4 /**< The comparison evaluates reference <= test. */,
  GREATER: 5 /**< The comparison evaluates reference > test. */,
  NOT_EQUAL: 6 /**< The comparison evaluates reference != test. */,
  GREATER_OR_EQUAL: 7 /**< The comparison evaluates reference >= test. */,
  ALWAYS: 8 /**< The comparison always evaluates true. */,
} as const;

export type GPUCompareOp = (typeof GPUCompareOp)[keyof typeof GPUCompareOp];

export const GPUStencilOp = {
  INVALID: 0,
  KEEP: 1 /**< Keeps the current value. */,
  ZERO: 2 /**< Sets the value to 0. */,
  REPLACE: 3 /**< Sets the value to reference. */,
  INCREMENT_AND_CLAMP: 4 /**< Increments the current value and clamps to the maximum value. */,
  DECREMENT_AND_CLAMP: 5 /**< Decrements the current value and clamps to 0. */,
  INVERT: 6 /**< Bitwise-inverts the current value. */,
  INCREMENT_AND_WRAP: 7 /**< Increments the current value and wraps back to 0. */,
  DECREMENT_AND_WRAP: 8 /**< Decrements the current value and wraps to the maximum value. */,
} as const;

export type GPUStencilOp = (typeof GPUStencilOp)[keyof typeof GPUStencilOp];

export const GPUBlendOp = {
  INVALID: 0,
  ADD: 1 /**< (source * source_factor) + (destination * destination_factor) */,
  SUBTRACT: 2 /**< (source * source_factor) - (destination * destination_factor) */,
  REVERSE_SUBTRACT: 3 /**< (destination * destination_factor) - (source * source_factor) */,
  MIN: 4 /**< min(source, destination) */,
  MAX: 5 /**< max(source, destination) */,
} as const;

export type GPUBlendOp = (typeof GPUBlendOp)[keyof typeof GPUBlendOp];

export const GPUBlendFactor = {
  INVALID: 0,
  ZERO: 1 /**< 0 */,
  ONE: 2 /**< 1 */,
  SRC_COLOR: 3 /**< source color */,
  ONE_MINUS_SRC_COLOR: 4 /**< 1 - source color */,
  DST_COLOR: 5 /**< destination color */,
  ONE_MINUS_DST_COLOR: 6 /**< 1 - destination color */,
  SRC_ALPHA: 7 /**< source alpha */,
  ONE_MINUS_SRC_ALPHA: 8 /**< 1 - source alpha */,
  DST_ALPHA: 9 /**< destination alpha */,
  ONE_MINUS_DST_ALPHA: 10 /**< 1 - destination alpha */,
  CONSTANT_COLOR: 11 /**< blend constant */,
  ONE_MINUS_CONSTANT_COLOR: 12 /**< 1 - blend constant */,
  SRC_ALPHA_SATURATE: 13 /**< min(source alpha, 1 - destination alpha) */,
} as const;

export type GPUBlendFactor =
  (typeof GPUBlendFactor)[keyof typeof GPUBlendFactor];

export const GPUColorComponentFlags = {
  R: 1 << 0,
  G: 1 << 1,
  B: 1 << 2,
  A: 1 << 3,
} as const;

export type GPUColorComponentFlags =
  (typeof GPUColorComponentFlags)[keyof typeof GPUColorComponentFlags];

export const GPUFilter = {
  NEAREST: 0 /**< Point filtering. */,
  LINEAR: 1 /**< Linear filtering. */,
} as const;

export type GPUFilter = (typeof GPUFilter)[keyof typeof GPUFilter];

export const GPUSamplerMipmapMode = {
  NEAREST: 0 /**< Point filtering. */,
  LINEAR: 1 /**< Linear filtering. */,
} as const;

export type GPUSamplerMipmapMode =
  (typeof GPUSamplerMipmapMode)[keyof typeof GPUSamplerMipmapMode];

export const GPUSamplerAddressMode = {
  REPEAT: 0 /**< Specifies that the coordinates will wrap around. */,
  MIRRORED_REPEAT: 1 /**< Specifies that the coordinates will wrap around mirrored. */,
  CLAMP_TO_EDGE: 2 /**< Specifies that the coordinates will clamp to the 0-1 range. */,
} as const;

export type GPUSamplerAddressMode =
  (typeof GPUSamplerAddressMode)[keyof typeof GPUSamplerAddressMode];

export const GPUPresentMode = {
  VSYNC: 0,
  IMMEDIATE: 1,
  MAILBOX: 2,
} as const;

export type GPUPresentMode =
  (typeof GPUPresentMode)[keyof typeof GPUPresentMode];

export const GPUSwapchainComposition = {
  SDR: 0,
  SDR_LINEAR: 1,
  HDR_EXTENDED_LINEAR: 2,
  HDR10_ST2084: 3,
} as const;

export type GPUSwapchainComposition =
  (typeof GPUSwapchainComposition)[keyof typeof GPUSwapchainComposition];
