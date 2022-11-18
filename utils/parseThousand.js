export const parseThousands = (value) => {
    return value >= 1000 ? `${Math.rounder(value / 100) / 10}k` : String(value);
  };