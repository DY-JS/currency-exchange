import React, { useEffect, useContext } from "react";
import styled from "styled-components";

import { ConverterContext } from "../contexts/ConverterContext";
import { getCurrencyRates, CURRENCY_URL } from "../helpers/api";
import { writeDataFromApi } from "../helpers/common";

const HeaderContainer = styled.div`
  margin: 50px auto;
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 290px) {
    flex-direction: column;
  }
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

const LoadingInfo = styled.h1`
  width: 30%;
  margin: 50px auto;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

export default function Header() {
  const {
    isLoading,
    setIsLoading,
    currancyRates,
    setCurrancyRate,
    currancies,
    errorLoading,
    setErrorLoading,
  } = useContext(ConverterContext);

  useEffect(() => {
    setIsLoading(true);
    getCurrencyRates(CURRENCY_URL)
      .then((data) => {
        setCurrancyRate((current) => writeDataFromApi(data, currancies));
        data && setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setErrorLoading(true);
      });
  }, []);

  if (errorLoading) return <LoadingInfo>LOADING ERROR</LoadingInfo>;
  return (
    <HeaderContainer>
      {isLoading ? (
        <LoadingInfo>Loading...</LoadingInfo>
      ) : (
        <>
          <CurrencyInfo>
            <Title>USD</Title>
            <Title>{currancyRates["USD"]}</Title>
          </CurrencyInfo>
          <CurrencyInfo>
            <Title>EUR</Title>
            <Title>{currancyRates["EUR"]}</Title>
          </CurrencyInfo>
        </>
      )}
    </HeaderContainer>
  );
}
