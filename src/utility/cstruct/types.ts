import { type Pointer, read } from 'bun:ffi';

export type ReadType = keyof typeof read;

export type CStructOptionsWithLength = {
  length: number;
};

export type CStructOptionsWithAddress = {
  address: Pointer;
};

export type CStructOptionsWithLengthAndAddress = {
  length: number;
  address: Pointer;
};

export type CStructOptions =
  | CStructOptionsWithLength
  | CStructOptionsWithAddress
  | CStructOptionsWithLengthAndAddress;
