import { Currency } from '../../models/Currency';

type formatCurrencyTypes = (value: number, currency: Currency) => string;

export const formatCurrency: formatCurrencyTypes = (value, currency) => {
  const { minSize } = currency;

  let roundedValue = value;
  if (minSize < 0) {
    const floorRounding = value % minSize;
    const ceilRounding = minSize - floorRounding;

    const shouldCeil = ceilRounding < floorRounding;
    roundedValue = shouldCeil ? value + ceilRounding : value - floorRounding;
  }

  return `${currency.symbol} ${roundedValue}`;
};
