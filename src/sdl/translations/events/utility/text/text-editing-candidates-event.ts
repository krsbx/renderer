import { CString, read, type Pointer } from 'bun:ffi';
import type { BaseSDL } from '../../../..';
import type { EventType } from '../../../../ffi/events/constant';
import type { RawTextEditingCandidatesEvent } from '../types';

export class TextEditingCandidatesEvent
  implements RawTextEditingCandidatesEvent
{
  public type: EventType;
  public reserved: number;
  public timestamp: bigint;
  public windowID: number;
  public candidates: string[];
  public num_candidates: number;
  public selected_candidate: number;
  public horizontal: boolean;
  public padding1: number;
  public padding2: number;
  public padding3: number;
  public free: (() => void) | null;
  public address: Pointer | null;

  public constructor(options: RawTextEditingCandidatesEvent) {
    this.type = options.type;
    this.reserved = options.reserved;
    this.timestamp = options.timestamp;
    this.windowID = options.windowID;
    this.candidates = options.candidates;
    this.num_candidates = options.num_candidates;
    this.selected_candidate = options.selected_candidate;
    this.horizontal = options.horizontal;
    this.padding1 = options.padding1;
    this.padding2 = options.padding2;
    this.padding3 = options.padding3;
    this.free = options.free;
    this.address = options.address;
  }

  public toMemory() {
    const buffer = TextEditingCandidatesEvent.allocMemory();
    const view = new DataView(buffer.buffer);

    view.setUint32(0, this.type, true);
    view.setUint32(4, this.reserved, true);
    view.setBigUint64(8, this.timestamp, true);
    view.setUint32(16, this.windowID, true);

    view.setBigUint64(24, 0n, true);

    view.setInt32(32, this.num_candidates, true);
    view.setInt32(36, this.selected_candidate, true);
    view.setUint8(40, this.horizontal ? 1 : 0);
    view.setUint8(41, this.padding1);
    view.setUint8(42, this.padding2);
    view.setUint8(43, this.padding3);

    return buffer;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(48);

    return buffer;
  }

  public static fromPointer(pointer: Pointer, sdl: BaseSDL) {
    const candidatesAddr = read.ptr(pointer, 24) as Pointer | null;
    const numCandidates = read.i32(pointer, 32);
    const candidates: string[] = [];

    if (candidatesAddr && numCandidates > 0) {
      for (let i = 0; i < numCandidates; i++) {
        // Read the pointer stored at [base + (index * 8 bytes)]
        const strPtr = read.ptr(candidatesAddr, i * 8) as Pointer | null;

        if (!strPtr) continue;

        candidates.push(new CString(strPtr).toString());
      }
    }

    const result = {
      type: read.u32(pointer, 0),
      reserved: read.u32(pointer, 4),
      timestamp: read.u64(pointer, 8),
      windowID: read.u32(pointer, 16),
      candidates,
      num_candidates: numCandidates,
      selected_candidate: read.i32(pointer, 36),
      horizontal: read.u8(pointer, 40) !== 0,
      padding1: read.u8(pointer, 41),
      padding2: read.u8(pointer, 42),
      padding3: read.u8(pointer, 43),
      free: () => {
        sdl.symbols.SDL_free(pointer);
      },
      address: pointer,
    } as RawTextEditingCandidatesEvent;

    return new TextEditingCandidatesEvent(result);
  }

  public static fromMemory(event: Uint8Array) {
    const view = new DataView(event.buffer, event.byteOffset, event.byteLength);
    const candidatesAddr = view.getBigUint64(24, true);
    const numCandidates = view.getInt32(32, true);
    const candidates: string[] = [];

    if (candidatesAddr !== 0n && numCandidates > 0) {
      for (let i = 0; i < numCandidates; i++) {
        // We use read.ptr because the double-pointer lives in SDL-managed memory
        const strPtr = read.ptr(
          candidatesAddr as unknown as Pointer,
          i * 8
        ) as Pointer | null;

        if (!strPtr) continue;

        candidates.push(new CString(strPtr).toString());
      }
    }

    const result = {
      type: view.getUint32(0, true),
      reserved: view.getUint32(4, true),
      timestamp: view.getBigUint64(8, true),
      windowID: view.getUint32(16, true),
      candidates,
      num_candidates: numCandidates,
      selected_candidate: view.getInt32(36, true),
      horizontal: view.getUint8(40) !== 0,
      padding1: view.getUint8(41),
      padding2: view.getUint8(42),
      padding3: view.getUint8(43),
      free: null,
      address: null,
    } as RawTextEditingCandidatesEvent;

    return new TextEditingCandidatesEvent(result);
  }
}
