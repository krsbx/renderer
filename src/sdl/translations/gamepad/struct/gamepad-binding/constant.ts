/* eslint-disable @typescript-eslint/no-namespace */
export namespace ByteOffset {
  export const input_type = 0;

  export namespace input {
    export const button = 4;

    export enum axis {
      axis = 4,
      axis_min = 8,
      axis_max = 12,
    }

    export enum hat {
      hat = 4,
      hat_mask = 8,
    }
  }

  export const output_type = 16;
  export namespace output {
    export const button = 20;

    export enum axis {
      axis = 20,
      axis_min = 24,
      axis_max = 28,
    }
  }
}
