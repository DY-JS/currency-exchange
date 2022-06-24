export const getInitialData = (data) => {
  return (
    data?.length &&
    data.reduce((initial, key) => {
      key === "UAH" ? (initial[key] = 1) : (initial[key] = null);
      return initial;
    }, {})
  );
};

export const writeDataFromApi = (data, currancies) => {
  const newData = getInitialData(currancies);
  data?.forEach(({ ccy, buy }) => {
    if (currancies.includes(ccy)) {
      newData[ccy] = buy;
    }
  });
  return newData;
};

export const exchange = (a, b, c) => {
  return +((Number(a) / Number(b)) * Number(c)).toFixed(4) || "";
};
