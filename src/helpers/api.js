export const CURRENCY_URL =
  "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

export const getCurrencyRates = async (url) => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`${res.status}-${res.statusText}`);
  }
  return res.json();
};
