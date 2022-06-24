import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Select from "./common/Select";
import Input from "./common/Input";

const StyledDiv = styled.div`
  width: 100%;
  padding: 0 10px;

  @media (max-width: 768px) {
  }

  @media (max-width: 568px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    width: 90%;
  }
`;

const CurrencyContainer = ({
  input,
  anotherInput,
  selectName,
  rates,
  value,
  setValue,
  currancies,
  selected,
  additionalSelected,
  setSelectedCurrancies,
}) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(String(value).length > 0);
  }, [value]);

  return (
    <StyledDiv>
      <Input
        name={input}
        anotherInput={anotherInput}
        rates={rates}
        value={value}
        updateValue={setValue}
        selected={selected}
        additionalSelected={additionalSelected}
      />
      <Select
        name={selectName}
        currancies={currancies}
        error={error}
        updateSelected={setSelectedCurrancies}
      />
    </StyledDiv>
  );
};

export default CurrencyContainer;
