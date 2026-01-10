import { CString, ptr, read, toArrayBuffer, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { ClipboardEventType } from './types';

export class ClipboardEvent {
  public static readonly BYTE_SIZE = 32;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public $mimeTypesBuffer: Uint8Array | null;
  public $mimeTypesStrings: CString[] | null;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, ClipboardEvent.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.$mimeTypesBuffer = null;
    this.$mimeTypesStrings = null;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
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

  public get num_mime_types() {
    return this.$view.getInt32(ByteOffset.num_mime_types, true);
  }

  public set num_mime_types(value: number) {
    this.$view.setInt32(ByteOffset.num_mime_types, value, true);
  }

  public get mime_types() {
    const num_mime_types = this.num_mime_types;
    const mimeTypesAddr = this.$view.getBigUint64(ByteOffset.mime_types, true);

    if (!num_mime_types || !mimeTypesAddr || mimeTypesAddr === 0n) return [];

    const mimeTypes: CString[] = [];
    const mimeTypesPtr = Number(mimeTypesAddr) as Pointer;

    for (let i = 0; i < num_mime_types; i++) {
      const strPtr = read.ptr(mimeTypesPtr, i * 8) as Pointer | null;

      if (!strPtr) continue;

      mimeTypes.push(new CString(strPtr));
    }

    return mimeTypes;
  }

  public set mime_types(value: CString[]) {
    this.num_mime_types = value.length;
    this.$mimeTypesStrings = value;

    if (this.num_mime_types === 0) {
      this.$view.setBigUint64(ByteOffset.mime_types, 0n, true);
      this.$mimeTypesBuffer = null;
      return;
    }

    const buffer = new Uint8Array(value.length * 8);
    const view = new DataView(buffer.buffer);

    for (let i = 0; i < this.$mimeTypesStrings.length; i++) {
      const stringPtr = this.$mimeTypesStrings[i]!.ptr;

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
