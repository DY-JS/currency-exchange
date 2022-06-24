import React, { useState } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 40%;
  height: 35px;
  background: #c7d2fe;
  color: #111827;
  padding: 0 10px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;

    padding: 0px 2px 1px;
    font-size: 12px;
  }
`;

const Select = ({ name, currancies, error, upDateSelected }) => {
  const handleSelectChange = (event) => {
    event.persist();
    const { name, value } = event.currentTarget;
    upDateSelected((current) => ({ ...current, [name]: value }));
  };

  return (
    <StyledSelect name={name} onChange={handleSelectChange}>
      <option value='' hidden disabled>
        CHOOSE CURRENCY
      </option>
      {currancies?.map((currancy) => (
        <option key={currancy} value={currancy} disabled={error}>
          {currancy}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
