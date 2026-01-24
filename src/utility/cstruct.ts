import { type Pointer, ptr, read, toArrayBuffer } from 'bun:ffi';

type ReadType = keyof typeof read;

interface StructConstructor<T> {
  new (data: Pointer | Uint8Array): T;
  readonly BYTE_SIZE: number;
}

type CStructOptions =
  | {
      length: number;
      address: Pointer;
    }
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

  public $memory: Uint8Array | null;
  public $address: Pointer;
  public $view: DataView | null;

  public constructor(options: CStructOptions) {
    if ('address' in options && 'length' in options) {
      const buffer = toArrayBuffer(options.address, 0, options.length);
      this.$memory = new Uint8Array(buffer);
      this.$address = options.address;
    } else if ('length' in options) {
      this.$memory = new Uint8Array(options.length);
      this.$address = ptr(this.$memory);
    } else {
      this.$memory = null;
      this.$address = options.address;
      this.$view = null;
    }

    if (this.$memory) {
      this.$view = new DataView(
        this.$memory.buffer,
        this.$memory.byteOffset,
        this.$memory.byteLength
      );
    } else {
      this.$view = null;
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
    value: number,
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

  public clone() {
    if (!this.$memory) {
      throw new Error('Cannot clone a read-only struct');
    }

    const struct = new CStruct({
      length: this.$memory.byteLength,
    });

    struct.$memory = this.$memory.slice();
    struct.$address = ptr(struct.$memory);

    return struct as CStruct & { $memory: Uint8Array };
  }

  public static readArray<T>(
    StructClass: StructConstructor<T>,
    address: Pointer,
    count: number
  ): T[] {
    if (!address || count <= 0) return [];

    const totalSize = count * StructClass.BYTE_SIZE;
    const buffer = toArrayBuffer(address, 0, totalSize);
    const memory = new Uint8Array(buffer);

    return Array.from({ length: count }, (_, i) => {
      const offset = i * StructClass.BYTE_SIZE;
      return new StructClass(
        memory.subarray(offset, offset + StructClass.BYTE_SIZE)
      );
    });
  }

  public static writeArray<T extends { $memory: Uint8Array }>(
    items: T[],
    itemSize: number
  ): { buffer: Uint8Array; address: Pointer } {
    const buffer = new Uint8Array(items.length * itemSize);

    for (let i = 0; i < items.length; i++) {
      const offset = i * itemSize;
      buffer.set(items[i]!.$memory, offset);
    }

    return { buffer, address: ptr(buffer) };
  }
}
