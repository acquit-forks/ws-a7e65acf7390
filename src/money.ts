export type Line = { amount: number };

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const { maximumFractionDigits } = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).resolvedOptions();

  return sum.toFixed(maximumFractionDigits);
}
