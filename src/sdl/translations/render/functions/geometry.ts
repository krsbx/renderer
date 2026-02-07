import type { SDL } from '@/sdl';
import type { Renderer, Texture } from '@/sdl/types/definition';
import type { Int32 } from '@/types/primitive';
import { CStruct } from '@cstruct';
import type { TextureAddressMode } from '../../../ffi/render/constant';
import { FColor } from '../../pixels/struct';
import { Vertex } from '../struct';

export function renderGeometry(
  this: SDL,
  options: {
    renderer: Renderer;
    texture?: Texture | null;
    vertices: Vertex[];
    indices?: Uint8Array | null;
    numIndices?: number;
  }
) {
  const { buffer: vertices } = CStruct.writeArray(
    options.vertices,
    Vertex.BYTE_SIZE
  );

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
    vertices,
    options.vertices.length,
    options.indices ?? null,
    numIndices
  );
}

export function renderGeometryRaw(
  this: SDL,
  options: {
    renderer: Renderer;
    texture?: Texture | null;
    xy: Uint8Array;
    xyStride: Int32;
    color: FColor;
    colorStride: Int32;
    uv: Uint8Array;
    uvStride: Int32;
    numVertices: Int32;
    indices?: Uint8Array | null;
    numIndices: Int32;
    sizeIndices: Int32;
  }
) {
  return this.symbols.SDL_RenderGeometryRaw(
    options.renderer,
    options.texture ?? null,
    options.xy,
    options.xyStride,
    options.color.$memory,
    options.colorStride,
    options.uv,
    options.uvStride,
    options.numVertices,
    options.indices ?? null,
    options.numIndices,
    options.sizeIndices
  );
}

// Texture Address Mode

export function setRenderTextureAddressMode(
  this: SDL,
  options: {
    renderer: Renderer;
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

export function getRenderTextureAddressMode(this: SDL, renderer: Renderer) {
  const uModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });
  const vModeStruct = new CStruct({ length: CStruct.BYTE_SIZE.i32 });

  const success = this.symbols.SDL_GetRenderTextureAddressMode(
    renderer,
    uModeStruct.$memory,
    vModeStruct.$memory
  );

  if (!success) return null;

  return {
    uMode: uModeStruct.getValue(0, 'i32') as TextureAddressMode,
    vMode: vModeStruct.getValue(0, 'i32') as TextureAddressMode,
  };
}
