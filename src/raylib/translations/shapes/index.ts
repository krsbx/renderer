import * as basic from './basic';
import * as circle from './circle';
import * as collision from './collision';
import * as ellipse from './ellipse';
import * as polygon from './polygon';
import * as rectangle from './rectangle';
import * as ring from './ring';
import * as spline from './spline';
import * as triangle from './triangle';

export const ShapesTranslations = {
  ...basic,
  ...circle,
  ...collision,
  ...ellipse,
  ...polygon,
  ...rectangle,
  ...ring,
  ...spline,
  ...triangle,
};

export type ShapesTranslations = typeof ShapesTranslations;
