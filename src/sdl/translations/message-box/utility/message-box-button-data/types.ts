import type { MessageBoxButtonFlags } from '../../../../ffi/message-box/constant';
import type { FreeAddress, MemoryAddress } from '../../../../types/shared';

export interface RawMessageBoxButtonData extends FreeAddress, MemoryAddress {
  flags: MessageBoxButtonFlags;
  buttonID: number;
  text: string;
}
