import { BaseStruct, type BaseStructOptions } from '@/utility/base-struct';
import { stringToCString } from '@utility/common';
import { CString, ptr, read, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { ClipboardEventType } from './types';

export class ClipboardEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public $mimeTypesBuffer: Uint8Array | null;

  private $cache: Partial<{
    mimeTypes: CString[];
  }>;

  public constructor(data: BaseStructOptions) {
    super(data);

    this.$mimeTypesBuffer = null;
    this.$cache = {};
  }

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as ClipboardEventType;
  }

  public set type(value: ClipboardEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true);
  }

  public set reserved(value: number) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get owner() {
    return this.$view.getUint8(ByteOffset.owner) === 1;
  }

  public set owner(value: boolean) {
    this.$view.setUint8(ByteOffset.owner, value ? 1 : 0);
  }

  public get mimeTypesCount() {
    return this.$view.getInt32(ByteOffset.num_mime_types, true);
  }

  public set mimeTypesCount(value: number) {
    this.$view.setInt32(ByteOffset.num_mime_types, value, true);
  }

  public get mimeTypes() {
    const mimeTypesCount = this.mimeTypesCount;
    const mimeTypesAddr = this.$view.getBigUint64(ByteOffset.mime_types, true);

    if (!mimeTypesCount || !mimeTypesAddr || mimeTypesAddr === 0n) return [];

    const mimeTypes: string[] = [];
    const mimeTypesPtr = Number(mimeTypesAddr) as Pointer;

    for (let i = 0; i < mimeTypesCount; i++) {
      const stringPtr = read.ptr(mimeTypesPtr, i * 8) as Pointer | null;

      if (!stringPtr) continue;

      mimeTypes.push(new CString(stringPtr).toString());
    }

    return mimeTypes;
  }

  public set mimeTypes(value: string[]) {
    this.mimeTypesCount = value.length;

    if (this.mimeTypesCount === 0) {
      this.$view.setBigUint64(ByteOffset.mime_types, 0n, true);
      this.$mimeTypesBuffer = null;
      return;
    }

    this.$cache.mimeTypes = value.map(stringToCString);

    const buffer = new Uint8Array(value.length * 8);
    const view = new DataView(buffer.buffer);

    for (let i = 0; i < this.mimeTypesCount; i++) {
      const stringPtr = this.$cache.mimeTypes[i]!.ptr;

      view.setBigUint64(i * 8, BigInt(stringPtr), true);
    }

    this.$mimeTypesBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.mime_types,
      BigInt(ptr(this.$mimeTypesBuffer)),
      true
    );
  }
}
