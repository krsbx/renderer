import { CStruct } from '@/utility/cstruct';
import { BaseStruct } from '@basestruct';
import type { Pointer } from 'bun:ffi';
import { Color } from '../color';
import { ByteOffset } from './constant';

export class Palette extends BaseStruct {
  public static override readonly BYTE_SIZE = 24;

  private $colorsBuffer: Uint8Array | null = null;

  public get colorCount() {
    return this.$view.getInt32(ByteOffset.ncolors, true);
  }

  public set colorCount(value: number) {
    this.$view.setInt32(ByteOffset.ncolors, value, true);
  }

  public get colors() {
    const addr = this.$view.getBigUint64(ByteOffset.colors, true);

    if (!addr || addr === 0n) return [];

    return CStruct.readArray(Color, Number(addr) as Pointer, this.colorCount);
  }

  public set colors(value: Color[]) {
    this.colorCount = value.length;

    if (value.length === 0) {
      this.$colorsBuffer = null;
      this.$view.setBigUint64(ByteOffset.colors, 0n, true);
      return;
    }

    const { address, buffer } = CStruct.writeArray(value, Color.BYTE_SIZE);

    this.$colorsBuffer = buffer;

    this.$view.setBigUint64(ByteOffset.colors, BigInt(address), true);
  }

  public get version() {
    return this.$view.getUint32(ByteOffset.version, true);
  }

  public set version(value: number) {
    this.$view.setUint32(ByteOffset.version, value, true);
  }

  public get refcount() {
    return this.$view.getInt32(ByteOffset.refcount, true);
  }

  public set refcount(value: number) {
    this.$view.setInt32(ByteOffset.refcount, value, true);
  }
}
