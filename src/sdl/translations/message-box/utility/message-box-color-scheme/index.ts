import type { StructInit } from '@/types/shared';
import { toArrayBuffer, type Pointer } from 'bun:ffi';
import { MessageBoxColorType } from '../../../../ffi/message-box/constant';
import { MessageBoxColor } from '../message-box-color';

export class MessageBoxColorScheme {
  public static readonly BYTE_SIZE = 15;

  public $address: Pointer | Uint8Array;
  public $memory: Uint8Array;
  public $view: DataView;

  public readonly colors: [
    background: MessageBoxColor,
    text: MessageBoxColor,
    buttonBorder: MessageBoxColor,
    buttonBackground: MessageBoxColor,
    buttonSelected: MessageBoxColor,
  ];

  public constructor(data: Pointer | Uint8Array) {
    if (data instanceof Uint8Array) {
      this.$memory = data;
      this.$address = data;
    } else {
      const buffer = toArrayBuffer(data, 0, MessageBoxColorScheme.BYTE_SIZE);
      this.$memory = new Uint8Array(buffer);
      this.$address = data;
    }

    this.$view = new DataView(
      this.$memory.buffer,
      this.$memory.byteOffset,
      this.$memory.byteLength
    );

    this.colors = Array.from({ length: MessageBoxColorType.COUNT }, (_, i) => {
      const start = i * MessageBoxColor.BYTE_SIZE;
      const end = start + MessageBoxColor.BYTE_SIZE;

      return new MessageBoxColor(this.$memory.subarray(start, end));
    }) as never;
  }

  public static allocMemory() {
    const buffer = new Uint8Array(this.BYTE_SIZE);

    return buffer;
  }

  public static create(data?: StructInit<InstanceType<typeof this>>) {
    const instance = new this(this.allocMemory());

    if (data) Object.assign(instance, data);

    return instance;
  }

  public get background() {
    return this.colors[0];
  }

  public get text() {
    return this.colors[1];
  }

  public get buttonBorder() {
    return this.colors[2];
  }

  public get buttonBackground() {
    return this.colors[3];
  }

  public get buttonSelected() {
    return this.colors[4];
  }
}
