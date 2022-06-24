import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Select from "./common/Select";
import Input from "./common/Input";

const StyledDiv = styled.div`
  width: 40%;
  height: 35px;
  padding: 0 10px;
`;

const CurrencyContainer = ({
  input,
  anotherInput,
  selectName,
  values,
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
        upDateValue={setValue}
        selected={additionalSelected}
        additionalSelected={additionalSelected}
      />
      <Select
        name={selectName}
        currancies={currancies}
        error={error}
        upDateSelected={setSelectedCurrancies}
      />
    </StyledDiv>
  );
};

export default CurrencyContainer;
