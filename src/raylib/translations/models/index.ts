import * as animation from './animation';
import * as basic3d from './basic-3d';
import * as collision from './collision';
import * as material from './material';
import * as mesh from './mesh';
import * as model from './model';

export const ModelsTranslations = {
  ...animation,
  ...basic3d,
  ...collision,
  ...material,
  ...mesh,
  ...model,
};

export type ModelsTranslations = typeof ModelsTranslations;
