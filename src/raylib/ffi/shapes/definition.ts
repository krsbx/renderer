import { BasicShapeDefinition } from './basic/definition';
import { CircleDefinition } from './circle/definition';
import { ShapeCollisionDefinition } from './collision/definition';
import { EllipseDefinition } from './ellipse/definition';
import { PolygonDefinition } from './polygon/definition';
import { RectangleDefinition } from './rectangle/definition';
import { RingDefinition } from './ring/definition';
import { SplineDefinition } from './spline/definition';
import { TriangleDefinition } from './triangle/definition';

export const ShapeDefinition = {
  ...BasicShapeDefinition,
  ...CircleDefinition,
  ...EllipseDefinition,
  ...RingDefinition,
  ...RectangleDefinition,
  ...TriangleDefinition,
  ...PolygonDefinition,
  ...SplineDefinition,
  ...ShapeCollisionDefinition,
} as const;
