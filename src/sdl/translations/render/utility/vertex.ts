import { type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../..';
import { FColor } from '../../pixels/utility/fcolor';
import { FPoint } from '../../rect/utility/fpoint';
import type { RawVertex } from './types';

export class Vertex implements RawVertex {
  public position: FPoint;
  public color: FColor;
  public tex_coord: FPoint;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawVertex) {
    this.position = options.position;
    this.color = options.color;
    this.tex_coord = options.tex_coord;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = Vertex.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setFloat32(0, this.position.x, true);
    view.setFloat32(4, this.position.y, true);

    view.setFloat32(8, this.color.r, true);
    view.setFloat32(12, this.color.g, true);
    view.setFloat32(16, this.color.b, true);
    view.setFloat32(20, this.color.a, true);

    view.setFloat32(24, this.tex_coord.x, true);
    view.setFloat32(28, this.tex_coord.y, true);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(32);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const colorPtr = (BigInt(pointer) + 8n) as unknown as Pointer;
    const texCoordPtr = (BigInt(pointer) + 24n) as unknown as Pointer;

    const result = {
      position: FPoint.fromPointer(pointer, sdl),
      color: FColor.fromPointer(colorPtr, sdl),
      tex_coord: FPoint.fromPointer(texCoordPtr, sdl),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawVertex;

    return new Vertex(result);
  }

  public static fromMemory(data: Uint8Array) {
    const result = {
      position: FPoint.fromMemory(data.slice(0, 8)),
      color: FColor.fromMemory(data.slice(8, 24)),
      tex_coord: FPoint.fromMemory(data.slice(24, 32)),
      free: null,
      address: null,
    } as RawVertex;

    return new Vertex(result);
  }
}
