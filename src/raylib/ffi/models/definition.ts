import { AnimationDefinition } from './animation/definition';
import { Basic3DDefinition } from './basic-3d/definition';
import { ModelCollisionDefinition } from './collision/definition';
import { MaterialDefinition } from './material/definition';
import { MeshDefinition } from './mesh/definition';
import { ModelManagementDefinition } from './model/definition';

export const ModelDefinition = {
  ...Basic3DDefinition,
  ...ModelManagementDefinition,
  ...MeshDefinition,
  ...MaterialDefinition,
  ...AnimationDefinition,
  ...ModelCollisionDefinition,
} as const;
