import { ptr, toArrayBuffer, type Pointer } from 'bun:ffi';
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
    const buffer = new Uint8Array(AsyncIOOutcome.BYTE_SIZE);

    return buffer;
  }

  public get asyncio() {
    return this.$view.getBigUint64(
      ByteOffset.asyncio,
      true
    ) as unknown as Pointer;
  }

  public set asyncio(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.asyncio, BigInt(value ?? 0n), true);
  }

  public get type() {
    return this.$view.getInt32(ByteOffset.type, true);
  }

  public set type(value: number) {
    this.$view.setInt32(ByteOffset.type, value, true);
  }

  public get result() {
    return this.$view.getInt32(ByteOffset.result, true);
  }

  public set result(value: number) {
    this.$view.setInt32(ByteOffset.result, value, true);
  }

  public get buffer() {
    return this.$view.getBigUint64(
      ByteOffset.buffer,
      true
    ) as unknown as Pointer;
  }

  public set buffer(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.buffer, BigInt(value ?? 0n), true);
  }

  public get offset() {
    return this.$view.getBigUint64(ByteOffset.offset, true);
  }

  public set offset(value: bigint) {
    this.$view.setBigUint64(ByteOffset.offset, value, true);
  }

  public get bytes_requested() {
    return this.$view.getBigUint64(ByteOffset.bytes_requested, true);
  }

  public set bytes_requested(value: bigint) {
    this.$view.setBigUint64(ByteOffset.bytes_requested, value, true);
  }

  public get bytes_transferred() {
    return this.$view.getBigUint64(ByteOffset.bytes_transferred, true);
  }

  public set bytes_transferred(value: bigint) {
    this.$view.setBigUint64(ByteOffset.bytes_transferred, value, true);
  }

  public get userdata() {
    return this.$view.getBigUint64(
      ByteOffset.userdata,
      true
    ) as unknown as Pointer;
  }

  public set userdata(value: Pointer) {
    this.$view.setBigUint64(ByteOffset.userdata, BigInt(value ?? 0n), true);
  }
}
