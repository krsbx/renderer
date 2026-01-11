import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
import type {
  AsyncIOResult,
  AsyncIOTaskType,
} from '../../../../ffi/asyncio/constant';
import { ByteOffset } from './constant';

export class AsyncIOOutcome {
  public static readonly BYTE_SIZE = 56;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(data, 0, AsyncIOOutcome.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get asyncio() {
    const asyncioAddr = this.$view.getBigUint64(ByteOffset.asyncio, true);
    const asyncioPtr = Number(asyncioAddr) as Pointer;

    return asyncioPtr;
  }

  public set asyncio(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.asyncio, BigInt(value), true);
  }

  public get type() {
    return this.$view.getInt32(ByteOffset.type, true) as AsyncIOTaskType;
  }

  public set type(value: AsyncIOTaskType) {
    this.$view.setInt32(ByteOffset.type, value, true);
  }

  public get result() {
    return this.$view.getInt32(ByteOffset.result, true) as AsyncIOResult;
  }

  public set result(value: AsyncIOResult) {
    this.$view.setInt32(ByteOffset.result, value, true);
  }

  public get buffer() {
    const addr = this.$view.getBigUint64(ByteOffset.buffer, true);

    return Number(addr) as Pointer;
  }

  public set buffer(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.buffer, BigInt(value), true);
  }

  public get offset() {
    return this.$view.getBigUint64(ByteOffset.offset, true);
  }

  public set offset(value: bigint) {
    this.$view.setBigUint64(ByteOffset.offset, value, true);
  }

  public get bytesRequested() {
    return this.$view.getBigUint64(ByteOffset.bytes_requested, true);
  }

  public set bytesRequested(value: bigint) {
    this.$view.setBigUint64(ByteOffset.bytes_requested, value, true);
  }

  public get bytesTransferred() {
    return this.$view.getBigUint64(ByteOffset.bytes_transferred, true);
  }

  public set bytesTransferred(value: bigint) {
    this.$view.setBigUint64(ByteOffset.bytes_transferred, value, true);
  }

  public get userdata() {
    const addr = this.$view.getBigUint64(ByteOffset.userdata, true);

    return Number(addr) as Pointer;
  }

  public set userdata(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.userdata, BigInt(value), true);
  }
}
