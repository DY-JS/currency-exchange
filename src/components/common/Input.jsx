import React from "react";
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

  @media (max-width: 568px) {
    width: 55%;
    margin-bottom: 10px;
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
    const numberValue = value.replace(/[^\d]/g, "");
    if (typeof Number(value) === "number") {
      updateValue((values) => ({
        ...values,
        [name]: numberValue,
        [name === "value2" ? "value1" : "value2"]: exchange(
          rates[selected],
          rates[additionalSelected],
          numberValue
        ),
      }));
    }
  };

  return (
    <StyledInput
      name={name}
      anotherInput={anotherInput}
      type='text'
      placeholder='Type amount'
      value={value}
      onChange={handleInputChange}
    />
  );
};

export default Input;
