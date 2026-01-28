import { type Pointer, ptr, toArrayBuffer } from 'bun:ffi';
import { CStruct } from '.';
import type { BaseStruct, BaseStructConstructor } from '../base-struct';
import type { ReadType } from './types';

export function readArray<
  T extends BaseStructConstructor,
  U extends InstanceType<T>,
>(StructClass: T, address: Pointer, count: number): U[];
export function readArray<
  T extends BaseStructConstructor,
  U extends InstanceType<T>,
>(StructClass: T, address: Pointer, count: number, clone: true): U[];
export function readArray<T extends BaseStructConstructor>(
  StructClass: T,
  address: Pointer,
  count: number,
  clone?: boolean
) {
  if (!address || count <= 0) return [];

  const totalSize = count * StructClass.BYTE_SIZE;
  const buffer = toArrayBuffer(address, 0, totalSize);
  const memory = new Uint8Array(buffer);

  return Array.from({ length: count }, (_, i) => {
    const offset = i * StructClass.BYTE_SIZE;

    const instance = new StructClass(
      memory.subarray(offset, offset + StructClass.BYTE_SIZE)
    );

    return clone ? instance.clone() : instance;
  });
}

export function readArrayLazy<
  T extends BaseStructConstructor,
  U extends InstanceType<T>,
>(StructClass: T, address: Pointer, count: number): readonly U[] {
  if (!address || count <= 0) return [];

  function createInstance(index: number) {
    const offset = index * StructClass.BYTE_SIZE;

    return new StructClass(
      new Uint8Array(toArrayBuffer(address, offset, StructClass.BYTE_SIZE))
    );
  }

  return new Proxy([], {
    get(_, prop) {
      if (prop === 'length') return count;

      if (prop === Symbol.iterator) {
        return function* () {
          for (let i = 0; i < count; i++) {
            yield createInstance(i);
          }
        };
      }

      const index = Number(prop);

      if (typeof prop === 'string' && !Number.isNaN(index)) {
        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        return createInstance(index);
      }

      return undefined;
    },
    set() {
      throw new TypeError('Cannot assign to read only array');
    },
    has(_, prop) {
      if (prop === 'length') return true;

      if (typeof prop === 'string' && !isNaN(Number(prop))) {
        const index = Number(prop);
        return index >= 0 && index < count;
      }

      return false;
    },
  });
}

export function readArrayPrimitive(
  address: Pointer,
  count: number,
  type: Exclude<ReadType, 'u64' | 'i64' | 'intptr' | 'ptr'>
): number[];
export function readArrayPrimitive(
  address: Pointer,
  count: number,
  type: Extract<ReadType, 'u64' | 'i64'>
): bigint[];
export function readArrayPrimitive(
  address: Pointer,
  count: number,
  type: Extract<ReadType, 'intptr' | 'ptr'>
): Pointer[];
export function readArrayPrimitive(
  address: Pointer,
  count: number,
  type: ReadType
) {
  if (!address || count <= 0) return [];

  const list = new CStruct({
    address,
    length: count * CStruct.BYTE_SIZE[type],
  });

  return Array.from({ length: count }, (_, i) =>
    list.getValue(i * CStruct.BYTE_SIZE[type], type as never)
  ) as never;
}

export function writeArray<T extends BaseStruct>(
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
