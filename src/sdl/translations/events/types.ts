import type { EventType, MouseWheelDirection } from '../../ffi/events/constant';
import type { MouseButton, MouseButtonFlags } from '../../ffi/mouse/constant';
import type { FreeAddress, MemoryAddress } from '../../types/shared';

export interface RawCommonEvent extends FreeAddress, MemoryAddress {
  type: EventType;
  reserved: number;
  timestamp: bigint;
}

export interface RawDisplayEvent extends RawCommonEvent {
  displayID: number;
  data1: number;
  data2: number;
}

export interface RawWindowEvent extends RawCommonEvent {
  displayID: number;
  data1: number;
  data2: number;
}

export interface RawKeyboardDeviceEvent extends RawCommonEvent {
  which: number;
}

export interface RawKeyboardEvent extends RawKeyboardDeviceEvent {
  windowID: number;
  scancode: number;
  key: number;
  mod: number;
  raw: number;
  down: boolean;
  repeat: boolean;
}

export interface RawTextEditingEvent extends RawCommonEvent {
  windowID: number;
  text: string;
  start: number;
  length: number;
}

export interface RawTextEditingCandidatesEvent extends RawCommonEvent {
  windowID: number;
  candidates: string[];
  num_candidates: number;
  selected_candidate: number;
  horizontal: boolean;
  padding1: number;
  padding2: number;
  padding3: number;
}

export interface RawTextInputEvent extends RawCommonEvent {
  windowID: number;
  text: string;
}

export interface RawMouseDeviceEvent extends RawCommonEvent {
  which: number;
}

export interface RawMouseMotionEvent extends RawMouseDeviceEvent {
  windowID: number;
  which: number;
  state: MouseButtonFlags;
  x: number;
  y: number;
  xrel: number;
  yrel: number;
}

export interface RawMouseButtonEvent extends RawCommonEvent {
  windowID: number;
  which: number;
  button: MouseButton;
  down: boolean;
  clicks: number;
  padding: number;
  x: number;
  y: number;
}

export interface RawMouseWheelEvent extends RawCommonEvent {
  windowID: number;
  which: number;
  x: number;
  y: number;
  direction: MouseWheelDirection;
  mouse_x: number;
  mouse_y: number;
  integer_x: number;
  integer_y: number;
}
