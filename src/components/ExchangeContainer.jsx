import React, { useContext } from "react";
import styled from "styled-components";

import { ConverterContext } from "../contexts/ConverterContext";
import CurrencyContainer from "./CurrencyContainer";

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  height: 35px;
`;

const ExchangeContainer = () => {
  const {
    currancyRates,
    values,
    selectedCurrancies,
    setSelectedCurrancies,
    setValues,
    currancies,
  } = useContext(ConverterContext);

  return (
    <Container>
      <CurrencyContainer
        input='value1'
        anotherInput='value2'
        selectName='selected1'
        values={values}
        rates={currancyRates}
        value={values.value1}
        setValue={setValues}
        currancies={currancies}
        selected={selectedCurrancies.selected1}
        additionalSelected={selectedCurrancies.selected2}
        setSelectedCurrancies={setSelectedCurrancies}
      />
      <CurrencyContainer
        input='value2'
        anotherInput='value2'
        selectName='selected2'
        rates={currancyRates}
        value={values.value2}
        additionalValue={values.value1}
        setValue={setValues}
        currancies={currancies}
        selected={selectedCurrancies.selected2}
        additionalSelected={selectedCurrancies.selected1}
        setSelectedCurrancies={setSelectedCurrancies}
      />
    </Container>
  );
};

export default ExchangeContainer;
