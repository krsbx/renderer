import { CString, ptr, read, toArrayBuffer, type Pointer } from 'bun:ffi';
import { stringToCString } from '../../../../../utility/common';
import { ByteOffset } from './constant';
import type { TextEditingCandidatesEventType } from './types';

export class TextEditingCandidatesEvent {
  public static readonly BYTE_SIZE = 48;

  public $address: Pointer;
  public $memory: Uint8Array;
  public $view: DataView;

  public $candidatesBuffer: Uint8Array | null;

  private $cache: Partial<{
    candidates: CString[];
  }>;

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = ptr(data);
    } else {
      const buffer = toArrayBuffer(
        data,
        0,
        TextEditingCandidatesEvent.BYTE_SIZE
      );
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.$candidatesBuffer = null;
    this.$cache = {};
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public get type() {
    return this.$view.getUint32(
      ByteOffset.type,
      true
    ) as TextEditingCandidatesEventType;
  }

  public set type(value: TextEditingCandidatesEventType) {
    this.$view.setUint32(ByteOffset.type, value, true);
  }

  public get reserved() {
    return this.$view.getUint32(ByteOffset.reserved, true);
  }

  public set reserved(value: number) {
    this.$view.setUint32(ByteOffset.reserved, value, true);
  }

  public get timestamp() {
    return this.$view.getBigUint64(ByteOffset.timestamp, true);
  }

  public set timestamp(value: bigint) {
    this.$view.setBigUint64(ByteOffset.timestamp, value, true);
  }

  public get windowId() {
    return this.$view.getUint32(ByteOffset.windowID, true);
  }

  public set windowID(value: number) {
    this.$view.setUint32(ByteOffset.windowID, value, true);
  }

  public get candidates() {
    const candidateCount = this.candidateCount;
    const candidatesAddr = this.$view.getBigUint64(ByteOffset.candidates, true);

    if (!candidateCount || !candidatesAddr || candidatesAddr === 0n) return [];

    const candidates: string[] = [];
    const candidatesPtr = Number(candidatesAddr) as Pointer;

    for (let i = 0; i < candidateCount; i++) {
      const stringPtr = read.ptr(candidatesPtr, i * 8) as Pointer | null;

      if (!stringPtr) continue;

      candidates.push(new CString(stringPtr).toString());
    }

    return candidates;
  }

  public set candidates(value: string[]) {
    this.candidateCount = value.length;

    if (this.candidateCount === 0) {
      this.$view.setBigUint64(ByteOffset.candidates, 0n, true);
      this.$candidatesBuffer = null;
      return;
    }

    this.$cache.candidates = value.map(stringToCString);

    const buffer = new Uint8Array(value.length * 8);
    const view = new DataView(buffer.buffer);

    for (let i = 0; i < this.candidateCount; i++) {
      const stringPtr = this.$cache.candidates[i]!.ptr;

      view.setBigUint64(i * 8, BigInt(stringPtr), true);
    }

    this.$candidatesBuffer = buffer;

    this.$view.setBigUint64(
      ByteOffset.candidates,
      BigInt(ptr(this.$candidatesBuffer)),
      true
    );
  }

  public get candidateCount() {
    return this.$view.getInt32(ByteOffset.num_candidates, true);
  }

  public set candidateCount(value: number) {
    this.$view.setInt32(ByteOffset.num_candidates, value, true);
  }

  public get selectedCandidate() {
    return this.$view.getInt32(ByteOffset.selected_candidate, true);
  }

  public set selectedCandidate(value: number) {
    this.$view.setInt32(ByteOffset.selected_candidate, value, true);
  }

  public get horizontal() {
    return this.$view.getInt8(ByteOffset.horizontal) === 1;
  }

  public set horizontal(value: boolean) {
    this.$view.setInt8(ByteOffset.horizontal, value ? 1 : 0);
  }
}
