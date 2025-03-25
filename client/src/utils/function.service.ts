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

export const parseMarketValue = (valueString: string): number => {
  // Remove spaces and convert to lowercase for easier processing
  const cleanString = valueString.trim().toLowerCase();

  // Check if the string ends with "mil" or "k" and parse accordingly
  if (cleanString.endsWith("mil.")) {
    return parseFloat(cleanString.replace("mil", "")) * 1_000_000;
  } else if (cleanString.endsWith("k")) {
    return parseFloat(cleanString.replace("k", "")) * 1_000;
  } else {
    // If there's no symbol, just return the parsed number
    return parseFloat(cleanString);
  }
};

export const removeAfterComma = (value: string | number): number => {
  // Convert the input to a string
  const cleanValue = value.toString();
  // Split by the comma and take the first part
  const [integerPart] = cleanValue.split(",");
  // Convert back to a number
  return parseInt(integerPart, 10);
};
