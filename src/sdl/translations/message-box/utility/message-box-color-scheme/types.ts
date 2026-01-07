import type { FreeAddress, MemoryAddress } from '../../../../types/shared';
import type { MessageBoxColor } from '../message-box-color/message-box-color.snapshot';

export interface RawMessageBoxColorScheme extends FreeAddress, MemoryAddress {
  colors: MessageBoxColor[];
}
