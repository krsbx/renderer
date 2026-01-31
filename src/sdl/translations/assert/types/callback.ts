import type { AssertState } from '@/sdl/ffi/assert/constant';
import type { AssertData } from '../struct';

export interface AssertionHandlerFn {
  (data: AssertData): AssertState;
}
