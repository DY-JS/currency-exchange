import React, { useCallback, useMemo } from "react";
import styled from "styled-components";

import { exchange } from "../../helpers/common";

const StyledInput = styled.input`
  width: 40%;
  height: 35px;
  margin: 10px;
  padding-left: 10px;
  background: #c7d2fe;
  color: #111827;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  ::placeholder {
    font-size: 12px;
  }
`;

const Input = ({
  name,
  anotherInput,
  value,
  rates,
  selected,
  additionalSelected,
  updateValue,
}) => {
  const handleInputChange = (event) => {
    event.persist();
    const { name, value, anotherInput } = event.currentTarget;
    console.log(anotherInput);
    updateValue((values) => ({
      ...values,
      [name]: value,
      [name === "value2" ? "value1" : "value2"]: exchange(
        rates[selected],
        rates[additionalSelected],
        value
      ),
    }));
  };

  return (
    <StyledInput
      name={name}
      anotherInput={anotherInput}
      type='text'
      placeholder='Type amount of currency'
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;
