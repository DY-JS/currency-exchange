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
