export function formatNumber(value: number) {
  if (value < 1000 || value > 200000000000) {
    return "N/A";
  }

  const symbols = ["", "k", "m", "b", "t"]; // Thousand, Million, Billion, Trillion
  let power = Math.floor(Math.log10(value) / 3); // Determine the magnitude
  power = Math.min(power, symbols.length - 1); // Cap at the largest symbol

  const shortValue = value / Math.pow(10, power * 3);
  const formattedValue = parseFloat(shortValue.toFixed(1)); // Remove trailing zero if present

  return `€${formattedValue}${symbols[power]}`;
}
