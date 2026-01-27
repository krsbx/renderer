import { CStruct, type StructConstructor } from '@/utility/cstruct';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { Vector2 } from '../struct';

export function generateVector2Points(points: Vector2[]) {
  const struct = new CStruct({
    length: Vector2.BYTE_SIZE * points.length,
  });

  for (let i = 0; i < points.length; i++) {
    const point = points[i];

    if (!point) continue;

    struct.setValue(i * Vector2.BYTE_SIZE, point.x, 'f32');
    struct.setValue(
      i * Vector2.BYTE_SIZE + CStruct.BYTE_SIZE.f32,
      point.y,
      'f32'
    );
  }

  return struct;
}

export function lazyLoadStructArray<T>(
  StructClass: StructConstructor<T>,
  address: Pointer,
  count: number
) {
  return new Proxy([] as T[], {
    get(_, prop) {
      if (prop === 'length') return count;

      const index = Number(prop);

      if (typeof prop === 'string' && !Number.isNaN(index)) {
        if (index < 0 || index >= count) {
          throw new RangeError(`Index out of range: ${index}`);
        }

        const offset = index * StructClass.BYTE_SIZE;

        return new StructClass(
          new Uint8Array(toArrayBuffer(address, offset, StructClass.BYTE_SIZE))
        );
      }

      return undefined;
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
