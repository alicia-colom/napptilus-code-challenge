import React from 'react';
import { FlexItem } from 'react-styled-flex';
import { capitalize } from '../utils/helpers';

function Select({
  label,
  code,
  options,
  selectedMobileToCart,
  handleCustomizationChange,
}) {
  return (
    <FlexItem box as="li" key={label} center>
      <label htmlFor={label} style={{ width: '100px', justifySelf: 'right' }}>
        <h5>{capitalize(label)}</h5>
      </label>
      <select
        name={code}
        id={label}
        defaultValue={
          options.length === 1 ? options[0].code : selectedMobileToCart.code
        }
        value={selectedMobileToCart.code}
        onChange={handleCustomizationChange}
      >
        <option disabled selected value="">
          -- select an option --
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.code} required>
            {option.name}
          </option>
        ))}
      </select>
    </FlexItem>
  );
}

export default Select;
