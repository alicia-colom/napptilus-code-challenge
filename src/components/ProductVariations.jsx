import React, { useState } from 'react';
import { FlexItem } from 'react-styled-flex';

const SelectContainer = ({
  label,
  code,
  options,
  selectedMobileToCart,
  handleChange,
  capitalize,
}) => {
  return (
    <FlexItem box key={label} center>
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
        onChange={handleChange}
      >
        <option disabled selected value="">
          -- select an option --
        </option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.code} required>
              {option.name}
            </option>
          );
        })}
      </select>
    </FlexItem>
  );
};

const ProductVariations = ({ mobileSpecifications, capitalize }) => {
  const productDetailsForCustomization = Object.entries(
    mobileSpecifications,
  ).filter(function ([key, value]) {
    return key && key === 'options';
  })[0][1];

  const colorOptions = productDetailsForCustomization.colors;
  const storageOptions = productDetailsForCustomization.storages;

  const initialData = {
    id: mobileSpecifications['id'],
    colorCode: colorOptions.length > 1 ? '' : colorOptions[0].code,
    storageCode: storageOptions.length > 1 ? '' : storageOptions[0].code,
  };
  const [selectedMobileToCart, setSelectedMobileToCart] = useState(initialData);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setSelectedMobileToCart({
      ...selectedMobileToCart,
      [name]: value,
    });
  };

  const onClick = () => {
    console.log('BUY MOBILE', selectedMobileToCart);
  };

  const disabled =
    !selectedMobileToCart.id ||
    !selectedMobileToCart.colorCode ||
    !selectedMobileToCart.storageCode;

  return (
    <>
      <SelectContainer
        label="color"
        code="colorCode"
        options={colorOptions}
        {...{ selectedMobileToCart, handleChange, capitalize }}
      />
      <SelectContainer
        label="storage"
        code="storageCode"
        options={storageOptions}
        {...{ selectedMobileToCart, handleChange, capitalize }}
      />
      <button type="submit" {...{ onClick, disabled }}>
        Buy
      </button>
    </>
  );
};

export default ProductVariations;
