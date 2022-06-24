import React, { useEffect } from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  width: 42%;
  height: 35px;
  background: #c7d2fe;
  color: #111827;
  padding: 0 5px;
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

const Select = ({ name, currancies, error, selected, updateSelected }) => {
  const handleSelectChange = (event) => {
    event.persist();
    const { name, value } = event.currentTarget;
    updateSelected((current) => ({ ...current, [name]: value }));
  };

  return (
    <StyledSelect
      name={name}
      onChange={handleSelectChange}
      defaultValue={selected}
    >
      <option value='' hidden>
        CHOOSE CURRENCY
      </option>
      {currancies?.map((currancy) => (
        <option
          key={currancy}
          value={currancy}
          //selected={currancy === "USD"}
          disabled={error}
        >
          {currancy}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
