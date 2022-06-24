import React, { useContext } from "react";
import styled from "styled-components";

import { ConverterContext } from "../../contexts/ConverterContext";

const StyledButton = styled.button`
  height: 35px;
  margin: 50px auto;
  color: #111827;
  background: #2563eb;
  border: none;
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;

  &:active,
  :focus {
    box-shadow: inset 2px 2px 1px rgba(0, 0, 0, 0.3);
  }
`;

const Button = () => {
  const { setSelectedCurrancies, setValues } = useContext(ConverterContext);

  const clearState = () => {
    setValues((current) => ({
      ...current,
      value1: "",
      value2: "",
    }));
    setSelectedCurrancies((current) => ({
      ...current,
      selected1: "USD",
      selected2: "USD",
    }));
  };

  return <StyledButton onClick={clearState}>CLEAR FIELDS</StyledButton>;
};

export default Button;
