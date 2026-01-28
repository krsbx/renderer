import type { StructInit } from '@/types/shared';
import { CStruct } from '@cstruct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { GlyphInfo } from '../glyph-info';
import { Rectangle } from '../rectangle';
import { Texture2D } from '../texture';
import { ByteOffset } from './constant';

export class Font {
  public static readonly BYTE_SIZE = 48;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly texture: Texture2D;

  private $recsBuffer: Uint8Array | null;
  private $glyphsBuffer: Uint8Array | null;
  private $cache: Partial<{
    recs: Rectangle[];
    glyphs: GlyphInfo[];
  }>;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, Font.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.texture = new Texture2D(
      this.$memory.subarray(
        ByteOffset.texture,
        ByteOffset.texture + Texture2D.BYTE_SIZE
      )
    );

    this.$recsBuffer = null;
    this.$glyphsBuffer = null;
    this.$cache = {};
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get baseSize() {
    return this.$view.getInt32(ByteOffset.baseSize, true);
  }

  public set baseSize(value: number) {
    this.$view.setInt32(ByteOffset.baseSize, value, true);
  }

  public get glyphCount() {
    return this.$view.getInt32(ByteOffset.glyphCount, true);
  }

  public set glyphCount(value: number) {
    this.$view.setInt32(ByteOffset.glyphCount, value, true);
  }

  public get glyphPadding() {
    return this.$view.getInt32(ByteOffset.glyphPadding, true);
  }

  public set glyphPadding(value: number) {
    this.$view.setInt32(ByteOffset.glyphPadding, value, true);
  }

  public get recs_ptr() {
    const addr = this.$view.getBigUint64(ByteOffset.recs, true);
    return Number(addr) as unknown as Pointer;
  }

  public get recs() {
    if (this.$cache.recs) return this.$cache.recs;

    this.$cache.recs = CStruct.readArray(
      Rectangle,
      this.recs_ptr,
      this.glyphCount
    );

    return this.$cache.recs;
  }

  public set recs(value: Rectangle[]) {
    this.$cache.recs = value;

    const { buffer, address } = CStruct.writeArray(value, Rectangle.BYTE_SIZE);

    this.$recsBuffer = buffer;
    this.$view.setBigUint64(ByteOffset.recs, BigInt(address), true);
  }

  public get glyphs_ptr() {
    const addr = this.$view.getBigUint64(ByteOffset.glyphs, true);
    return Number(addr) as unknown as Pointer;
  }

  public get glyphs() {
    if (this.$cache.glyphs) return this.$cache.glyphs;

    this.$cache.glyphs = CStruct.readArray(
      GlyphInfo,
      this.glyphs_ptr,
      this.glyphCount
    );

    return this.$cache.glyphs;
  }

  public set glyphs(value: GlyphInfo[]) {
    this.$cache.glyphs = value;

    const { buffer, address } = CStruct.writeArray(value, GlyphInfo.BYTE_SIZE);

    this.$glyphsBuffer = buffer;
    this.$view.setBigUint64(ByteOffset.glyphs, BigInt(address), true);
  }
}
