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
      throw new Error("e");
    } finally {
      setIsLoading((current) => false);
    }
  }, []);
  //console.log(currancyRates);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <p>{currancyRates["USD"]}</p>
      <p>{currancyRates["EUR"]}</p>

      {/* {[...Object.values(a)].map((e) => (
        <p>{e}</p>
      ))} */}
    </div>
  );
}
