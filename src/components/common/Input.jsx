import React, { useCallback, useMemo } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 40%;
  height: 35px;
  margin: 10px;
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
  upDateValue,
}) => {
  const anotherSelected = useMemo(() => additionalSelected, []);

  const M = useCallback((a, b, c) => {
    return (Number(a) / Number(b)) * Number(c) || 0;
  }, []);

  const handleInputChange = (event) => {
    event.persist();
    const { name, value, anotherInput } = event.currentTarget;
    console.log(anotherInput);
    upDateValue((values) => ({
      ...values,
      [name]: value,
      [name === "value1" ? "value2" : "value1"]: M(
        rates[selected],
        rates[anotherSelected],
        value
      ),
    }));
  };

  //console.log(selected);
  console.log(anotherSelected);
  // console.log(value);
  // console.log(Number(rates[selected]) / Number(rates[additionalSelected]));
  // console.log(anotherInput);
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
