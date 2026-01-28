import type { BuildTuple } from '@/types/shared';
import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { CStruct } from '@/utility/cstruct';
import { type Pointer } from 'bun:ffi';
import { MaterialMap } from '../material-map';
import { Shader } from '../shader';
import { ByteOffset } from './constant';

// raylib defines MAX_MATERIAL_MAPS = 12
const MAX_MATERIAL_MAPS = 12;

export class Material extends BaseStruct {
  public static override readonly BYTE_SIZE = 40;

  public readonly shader: Shader;

  private $params: BuildTuple<4, number> | null = null;
  private $maps: MaterialMap[] | null = null;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.shader = new Shader(
      this.$memory.subarray(
        ByteOffset.shader,
        ByteOffset.shader + Shader.BYTE_SIZE
      )
    );
  }

  public get maps_ptr() {
    const addr = this.$view.getBigUint64(ByteOffset.maps, true);

    return Number(addr) as Pointer;
  }

  public set maps_ptr(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.maps, BigInt(value), true);
    this.$maps = null;
  }

  public get maps() {
    if (this.$maps) return this.$maps;

    const ptr = this.maps_ptr;
    if (!ptr) return null;

    this.$maps = CStruct.readArray(MaterialMap, ptr, MAX_MATERIAL_MAPS);

    return this.$maps;
  }

  public get params() {
    if (this.$params) return this.$params;

    this.$params = new Float32Array(
      this.$memory.buffer,
      this.$memory.byteOffset + ByteOffset.params,
      4
    ) as never;

    return this.$params;
  }
}
