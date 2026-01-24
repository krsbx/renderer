import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { getStructMemoryAddress } from '@utility/common';
import { type Pointer } from 'bun:ffi';
import type { TextureAddressMode } from '../../../ffi/render/constant';
import { FColor } from '../../pixels/utility';
import { Vertex } from '../utility';

export function renderGeometry(
  this: SDL,
  options: {
    renderer: Pointer;
    texture?: Pointer | null;
    vertices: Vertex[];
    indices?: CStruct | Uint8Array | null;
    numIndices?: number;
  }
) {
  const verticesStruct = new CStruct({
    length: Vertex.BYTE_SIZE * options.vertices.length,
  });

  for (let i = 0; i < options.vertices.length; i++) {
    const offset = i * Vertex.BYTE_SIZE;
    const vertex = options.vertices[i];

    if (!vertex) continue;

    // position (FPoint: 2 floats)
    verticesStruct.setValue(offset + 0, vertex.position.x, 'f32');
    verticesStruct.setValue(offset + 4, vertex.position.y, 'f32');
    // color (FColor: 4 floats)
    verticesStruct.setValue(offset + 8, vertex.color.r, 'f32');
    verticesStruct.setValue(offset + 12, vertex.color.g, 'f32');
    verticesStruct.setValue(offset + 16, vertex.color.b, 'f32');
    verticesStruct.setValue(offset + 20, vertex.color.a, 'f32');
    // tex_coord (FPoint: 2 floats)
    verticesStruct.setValue(offset + 24, vertex.texCoord.x, 'f32');
    verticesStruct.setValue(offset + 28, vertex.texCoord.y, 'f32');
  }

  const numIndices = options.numIndices
    ? options.numIndices
    : options.indices instanceof CStruct
      ? (options.indices.$memory?.length ?? 0) / 4
      : options.indices instanceof Uint8Array
        ? options.indices.length / 4
        : 0;

  return this.symbols.SDL_RenderGeometry(
    options.renderer,
    options.texture ?? null,
    verticesStruct.$address,
    options.vertices.length,
    options.indices ? getStructMemoryAddress(options.indices) : null,
    numIndices
  );
}

export function renderGeometryRaw(
  this: SDL,
  options: {
    renderer: Pointer;
    texture?: Pointer | null;
    xy: CStruct | Uint8Array;
    xyStride: number;
    color: FColor | Uint8Array;
    colorStride: number;
    uv: CStruct | Uint8Array;
    uvStride: number;
    numVertices: number;
    indices?: CStruct | Uint8Array | null;
    numIndices: number;
    sizeIndices: number;
  }
) {
  return this.symbols.SDL_RenderGeometryRaw(
    options.renderer,
    options.texture ?? null,
    getStructMemoryAddress(options.xy),
    options.xyStride,
    getStructMemoryAddress(options.color),
    options.colorStride,
    getStructMemoryAddress(options.uv),
    options.uvStride,
    options.numVertices,
    options.indices ? getStructMemoryAddress(options.indices) : null,
    options.numIndices,
    options.sizeIndices
  );
}

// Texture Address Mode

export function setRenderTextureAddressMode(
  this: SDL,
  options: {
    renderer: Pointer;
    uMode: TextureAddressMode;
    vMode: TextureAddressMode;
  }
) {
  return this.symbols.SDL_SetRenderTextureAddressMode(
    options.renderer,
    options.uMode,
    options.vMode
  );
}

export function getRenderTextureAddressMode(this: SDL, renderer: Pointer) {
  const uModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const vModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderTextureAddressMode(
    renderer,
    uModeStruct.$address,
    vModeStruct.$address
  );

  if (!success) return null;

  return {
    uMode: uModeStruct.getValue(0, 'i32') as TextureAddressMode,
    vMode: vModeStruct.getValue(0, 'i32') as TextureAddressMode,
  };
}
