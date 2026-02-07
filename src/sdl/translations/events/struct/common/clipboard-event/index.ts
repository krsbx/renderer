import type { Int32, UInt32 } from '@/types/primitive';
import { BaseStruct } from '@basestruct';
import { CStruct } from '@utility/cstruct';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { ClipboardEventType } from './types';

export class ClipboardEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 32;

  public $mimeTypesBuffer: BigUint64Array | null = null;

  private $cache: Partial<{
    mimeTypes: CString[];
  }> = {};

  public get type() {
    return this.$view.getUint32(ByteOffset.type, true) as ClipboardEventType;
  }

  public set type(value: ClipboardEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true) as UInt32;
  }

  public set reserved(value: UInt32) {
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
    return this.$view.getInt32(ByteOffset.num_mime_types, true) as Int32;
  }

  public set mimeTypesCount(value: Int32) {
    this.$view.setInt32(ByteOffset.num_mime_types, value, true);
  }

  public get mimeTypes() {
    const mimeTypesCount = this.mimeTypesCount;
    const mimeTypesAddr = this.$view.getBigUint64(ByteOffset.mime_types, true);

    if (!mimeTypesCount || !mimeTypesAddr || mimeTypesAddr === 0n) return [];

    const mimeTypesPtr = Number(mimeTypesAddr) as Pointer;
    const mimeTypes = CStruct.readArrayString(mimeTypesPtr, mimeTypesCount);

    return mimeTypes;
  }

  public set mimeTypes(value: string[]) {
    this.mimeTypesCount = value.length as Int32;

    if (this.mimeTypesCount === (0 as Int32)) {
      this.$view.setBigUint64(ByteOffset.mime_types, 0n, true);
      this.$mimeTypesBuffer = null;
      return;
    }

    const { buffer, address, converted } = CStruct.writeArrayString(value);

    this.$cache.mimeTypes = converted;
    this.$mimeTypesBuffer = buffer;

    this.$view.setBigUint64(ByteOffset.mime_types, BigInt(address), true);
  }
}
