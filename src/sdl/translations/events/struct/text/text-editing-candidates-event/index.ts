import { BaseStruct } from '@basestruct';
import { CStruct } from '@utility/cstruct';
import { CString, type Pointer } from 'bun:ffi';
import { ByteOffset } from './constant';
import type { TextEditingCandidatesEventType } from './types';
export class TextEditingCandidatesEvent extends BaseStruct {
  public static override readonly BYTE_SIZE = 48;

  public $candidatesBuffer: BigUint64Array | null = null;

  private $cache: Partial<{
    candidates: CString[];
  }> = {};

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

    const candidatesPtr = Number(candidatesAddr) as Pointer;
    const candidates = CStruct.readArrayString(candidatesPtr, candidateCount);

    return candidates;
  }

  public set candidates(value: string[]) {
    this.candidateCount = value.length;

    if (this.candidateCount === 0) {
      this.$view.setBigUint64(ByteOffset.candidates, 0n, true);
      this.$candidatesBuffer = null;
      return;
    }

    const { buffer, address, converted } = CStruct.writeArrayString(value);

    this.$cache.candidates = converted;
    this.$candidatesBuffer = buffer;

    this.$view.setBigUint64(ByteOffset.candidates, BigInt(address), true);
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
