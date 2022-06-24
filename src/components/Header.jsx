import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import { ConverterContext } from "../contexts/ConverterContext";
import { getCurrencyRates, CURRENCY_URL } from "../helpers/api";
import { writeDataFromApi, getInitialData } from "../helpers/common";

const HeaderContainer = styled.div`
  margin: 50px auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const CurrencyInfo = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p`
  width: 100%;
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
`;

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
    <HeaderContainer>
      <CurrencyInfo>
        <Title>USD</Title>
        <Title>{currancyRates["USD"]}</Title>
      </CurrencyInfo>
      <CurrencyInfo>
        <Title>EUR</Title>
        <Title>{currancyRates["EUR"]}</Title>
      </CurrencyInfo>
    </HeaderContainer>
  );
}
