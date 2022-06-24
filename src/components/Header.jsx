import React, { useEffect, useContext } from "react";
import { ConverterContext } from "../contexts/ConverterContext";
import { getCurrencyRates, CURRENCY_URL } from "../helpers/api";
import { writeDataFromApi, getInitialData } from "../helpers/common";
//import { getInitialData } from "../helpers/common";

export default function Header() {
  const {
    isLoading,
    setIsLoading,
    currancyRates,
    setCurrancyRate,
    values,
    setValues,
    initialData,
    currancies,
  } = useContext(ConverterContext);

  useEffect(() => {
    async function fetchData() {
      setIsLoading((current) => true);
      const response = await getCurrencyRates(CURRENCY_URL);
      setCurrancyRate((current) => writeDataFromApi(response, currancies));
      return response;
    }

    try {
      setIsLoading((current) => true);
      fetchData();
      console.log(currancyRates);
    } catch (e) {
      throw new Error("Error");
    } finally {
      setIsLoading((current) => false);
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <p>{currancyRates["USD"]}</p>
      <p>{currancyRates["EUR"]}</p>
    </div>
  );
}
