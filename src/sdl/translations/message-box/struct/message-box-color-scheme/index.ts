import { BaseStruct, type BaseStructOptions } from '@basestruct';
import { MessageBoxColorType } from '@sdl/ffi/constant/message-box';
import { MessageBoxColor } from '../message-box-color';

export class MessageBoxColorScheme extends BaseStruct {
  public static override readonly BYTE_SIZE = 15;

  public readonly colors: [
    background: MessageBoxColor,
    text: MessageBoxColor,
    buttonBorder: MessageBoxColor,
    buttonBackground: MessageBoxColor,
    buttonSelected: MessageBoxColor,
  ];

  public constructor(data: BaseStructOptions) {
    super(data);

    this.colors = Array.from({ length: MessageBoxColorType.COUNT }, (_, i) => {
      const start = i * MessageBoxColor.BYTE_SIZE;
      const end = start + MessageBoxColor.BYTE_SIZE;

      return new MessageBoxColor(this.$memory.subarray(start, end));
    }) as never;
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
