import { CString, ptr } from 'bun:ffi';
import { IS_WINDOWS, WIDE_STRING_CHAR_SIZE } from './constant';

export const IS_BIG_ENDIAN =
  new Uint8Array(new Uint16Array([0x1234]).buffer)[0] === 0x12;

export function convertStringToFfi(str: string) {
  const finalStr = str.endsWith('\0') ? str : str + '\0';
  const strBuf = Buffer.from(finalStr, 'utf-8');
  const strPtr = ptr(strBuf);

  return {
    buffer: strBuf,
    reference: strPtr,
  };
}

export function toCWideStringBuffer(value: string) {
  const chars = [...value];
  const isTerminated = chars.length > 0 && chars.at(-1)?.codePointAt?.(0) === 0;
  const length = isTerminated ? chars.length : chars.length + 1;
  const buffer = new Uint8Array(length * WIDE_STRING_CHAR_SIZE); // + 1 for null terminator
  const view = new DataView(buffer.buffer);

  for (let i = 0; i < chars.length; i++) {
    const code = chars[i]!.codePointAt(0)!;
    const byteOffset = i * WIDE_STRING_CHAR_SIZE;

    if (IS_WINDOWS) {
      view.setUint16(byteOffset, code, true);
    } else {
      view.setUint32(byteOffset, code, true);
    }
  }

  return buffer;
}

export function toCStringBuffer(value: string) {
  const finalStr = value.endsWith('\0') ? value : value + '\0';
  const strBuf = Buffer.from(finalStr, 'utf-8');

  const buffer = new Uint8Array(
    strBuf.buffer,
    strBuf.byteOffset,
    strBuf.byteLength
  );

  return buffer;
}

export function combineBitwise<T>(...values: T[]): T {
  // @ts-expect-error Combine bitwise
  return values.reduce((acc, value) => acc | value, 0 as T);
}

export function cloneCString(value: string | CString) {
  const finalValue = typeof value === 'string' ? value : value.toString();
  const buffer = toCStringBuffer(finalValue);
  const address = ptr(buffer);

  const clone = new CString(address);
  (clone as CString & { $buffer: Uint8Array }).$buffer = buffer;

  return clone;
}
