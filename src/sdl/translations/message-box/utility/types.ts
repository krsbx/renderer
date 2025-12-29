import type { MessageBoxButtonFlags } from '../../../ffi/message-box/constant';
import type { FreeAddress, MemoryAddress } from '../../../types/shared';
import type { MessageBoxColor } from './message-box-color';

export interface RawMessageBoxButtonData extends FreeAddress, MemoryAddress {
  flags: MessageBoxButtonFlags;
  buttonID: number;
  text: string;
}

export interface RawMessageBoxColor extends FreeAddress, MemoryAddress {
  r: number;
  g: number;
  b: number;
}

export interface RawMessageBoxColorScheme extends FreeAddress, MemoryAddress {
  colors: MessageBoxColor[];
}
