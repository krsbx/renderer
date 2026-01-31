import type { SDL } from '@/sdl';
import { CStruct } from '@cstruct';
import { type Pointer } from 'bun:ffi';
import type { TextureAddressMode } from '../../../ffi/render/constant';
import { FColor } from '../../pixels/struct';
import { Vertex } from '../struct';

export function renderGeometry(
  this: SDL,
  options: {
    renderer: Pointer;
    texture?: Pointer | null;
    vertices: Vertex[];
    indices?: Uint8Array | null;
    numIndices?: number;
  }
) {
  const { buffer } = CStruct.writeArray(options.vertices, Vertex.BYTE_SIZE);

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
    buffer,
    options.vertices.length,
    options.indices ?? null,
    numIndices
  );
}

export function renderGeometryRaw(
  this: SDL,
  options: {
    renderer: Pointer;
    texture?: Pointer | null;
    xy: Uint8Array;
    xyStride: number;
    color: FColor;
    colorStride: number;
    uv: Uint8Array;
    uvStride: number;
    numVertices: number;
    indices?: Uint8Array | null;
    numIndices: number;
    sizeIndices: number;
  }
) {
  return this.symbols.SDL_RenderGeometryRaw(
    options.renderer,
    options.texture ?? null,
    options.xy,
    options.xyStride,
    options.color.$address,
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
