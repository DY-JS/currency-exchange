import React, { useContext } from "react";
import styled from "styled-components";

import { ConverterContext } from "../../contexts/ConverterContext";

const StyledSelect = styled.select`
  width: 42%;
  height: 35px;
  background: #c7d2fe;
  color: #111827;
  padding: 0 5px;
  padding-left: 10px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;

  @media (max-width: 568px) {
    width: 59%;
    align-self: center;
    margin-left: 0;
  }

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
  const { clear, setClear } = useContext(ConverterContext);
  //clear - состояние после очистки полей
  const handleSelectChange = (event) => {
    event.persist();
    const { name, value } = event.currentTarget;
    updateSelected((current) => ({ ...current, [name]: value }));
  };

  const handleClick = () => {
    setClear(false);
  };

  return (
    <StyledSelect
      name={name}
      onChange={handleSelectChange}
      onClick={handleClick}
      defaultValue={selected}
    >
      <option value='' hidden disabled>
        CHOOSE CURRENCY
      </option>
      {clear ? ( //чтобы в селекте - пока не кликнули - первым был USD, а не из прошлого выбора
        <option value={selected}>{selected}</option>
      ) : (
        //когда кликнут по селекту появится всё меню
        currancies?.map((currancy) => (
          <option key={currancy} value={currancy} disabled={error}>
            {currancy}
          </option>
        ))
      )}
    </StyledSelect>
  );
};

export default Select;
