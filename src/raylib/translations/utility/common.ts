import { CStruct } from '@/utility/cstruct';
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
