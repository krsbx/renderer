export const ByteOffset = {
  input_type: 0,
  input: {
    button: 4,
    axis: {
      axis: 4,
      axis_min: 8,
      axis_max: 12,
    },
    hat: {
      hat: 4,
      hat_mask: 8,
    },
  },
  output_type: 16,
  output: {
    button: 20,
    axis: {
      axis: 20,
      axis_min: 24,
      axis_max: 28,
    },
  },
} as const;
