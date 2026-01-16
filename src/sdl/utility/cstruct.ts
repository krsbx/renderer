import { type Pointer, ptr, read } from 'bun:ffi';

type ReadType = keyof typeof read;

type CStructOptions =
  | {
      length: number;
    }
  | {
      address: Pointer;
    };

export class CStruct {
  public static readonly BYTE_SIZE = {
    u8: 1,
    i8: 1,
    u16: 2,
    i16: 2,
    u32: 4,
    i32: 4,
    f32: 4,
    u64: 8,
    i64: 8,
    f64: 8,
    intptr: 8,
    ptr: 8,
  } as const;

  private $memory: Uint8Array | null;
  public $address: Pointer;
  public $view: DataView | null;

  public constructor(options: CStructOptions) {
    if ('address' in options) {
      this.$memory = null;
      this.$address = options.address;
      this.$view = null;
    } else {
      this.$memory = new Uint8Array(options.length);
      this.$address = ptr(this.$memory);
      this.$view = new DataView(
        this.$memory.buffer,
        this.$memory.byteOffset,
        this.$memory.byteLength
      );
    }
  }

  public getValue(
    offset: number,
    type: Exclude<ReadType, 'u64' | 'i64' | 'intptr' | 'ptr'>
  ): number;
  public getValue(
    offset: number,
    type: Extract<ReadType, 'u64' | 'i64'>
  ): bigint;
  public getValue(
    offset: number,
    type: Extract<ReadType, 'intptr' | 'ptr'>
  ): Pointer;
  public getValue(offset: number, type: ReadType) {
    switch (type) {
      case 'u8':
        return this.$view
          ? this.$view.getUint8(offset)
          : read.u8(this.$address, offset);

      case 'i8':
        return this.$view
          ? this.$view.getInt8(offset)
          : read.i8(this.$address, offset);

      case 'u16':
        return this.$view
          ? this.$view.getUint16(offset, true)
          : read.u16(this.$address, offset);

      case 'i16':
        return this.$view
          ? this.$view.getInt16(offset, true)
          : read.i16(this.$address, offset);

      case 'u32':
        return this.$view
          ? this.$view.getUint32(offset, true)
          : read.u32(this.$address, offset);

      case 'i32':
        return this.$view
          ? this.$view.getInt32(offset, true)
          : read.i32(this.$address, offset);

      case 'f32':
        return this.$view
          ? this.$view.getFloat32(offset, true)
          : read.f32(this.$address, offset);

      case 'u64':
        return this.$view
          ? this.$view.getBigUint64(offset, true)
          : read.u64(this.$address, offset);

      case 'i64':
        return this.$view
          ? this.$view.getBigInt64(offset, true)
          : read.i64(this.$address, offset);

      case 'f64':
        return this.$view
          ? this.$view.getFloat64(offset, true)
          : read.f64(this.$address, offset);

      case 'intptr':
      case 'ptr': {
        if (this.$view)
          return Number(this.$view.getBigInt64(offset, true)) as Pointer;

        return read.ptr(this.$address, offset);
      }

      default:
        throw new Error(`Unsupported type: ${type}`);
    }
  }

  public setValue(
    offset: number,
    value: number,
    type: Exclude<ReadType, 'u64' | 'i64' | 'intptr' | 'ptr'>
  ): this;
  public setValue(
    offset: number,
    value: bigint,
    type: Extract<ReadType, 'u64' | 'i64'>
  ): this;
  public setValue(
    offset: number,
    value: bigint,
    type: Extract<ReadType, 'intptr' | 'ptr'>
  ): this;
  public setValue(offset: number, value: never, type: ReadType) {
    if (!this.$view) {
      throw new Error('Cannot write to a read-only struct');
    }

    switch (type) {
      case 'u8':
        this.$view.setUint8(offset, value);
        break;

      case 'i8':
        this.$view.setInt8(offset, value);
        break;

      case 'u16':
        this.$view.setUint16(offset, value, true);
        break;

      case 'i16':
        this.$view.setInt16(offset, value, true);
        break;

      case 'u32':
        this.$view.setUint32(offset, value, true);
        break;

      case 'i32':
        this.$view.setInt32(offset, value, true);
        break;

      case 'f32':
        this.$view.setFloat32(offset, value, true);
        break;

      case 'u64':
        this.$view.setBigUint64(offset, BigInt(value), true);
        break;

      case 'i64':
        this.$view.setBigInt64(offset, BigInt(value), true);
        break;

      case 'f64':
        this.$view.setFloat64(offset, value, true);
        break;

      case 'intptr':
      case 'ptr':
        this.$view.setBigInt64(offset, BigInt(value), true);
        break;

      default:
        throw new Error(`Unsupported type: ${type}`);
    }

    return this;
  }
}
