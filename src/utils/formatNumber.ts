interface TransactionValue {
  value: number;
}

export function formatNumber(value: TransactionValue) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(value));
}
