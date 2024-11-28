export function formatPrice(value: string | number): string {
  const newValue = String(value) || '';

  // Split the value into integer and decimal parts
  const [integerPart, decimalPart] = newValue.split('.');

  // Add commas to the integer part
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  // Return the formatted number with the decimal part (if any)
  return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}
