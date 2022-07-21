import React, { useState } from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';

const SelectContainer = ({
  label,
  code,
  options,
  selectedProductToCart,
  handleChange,
  capitalize,
}) => {
  return (
    <FlexBox key={label} center>
      <label htmlFor={label} style={{ width: '100px', justifySelf: 'right' }}>
        <h5>{capitalize(label)}</h5>
      </label>
      <select
        name={code}
        id={label}
        defaultValue={
          options.length === 1
            ? options[0].code
            : selectedProductToCart.code
        }
        value={selectedProductToCart.code}
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
    </FlexBox>
  );
};

const ProductActions = ({ productDetails, capitalize }) => {
  const productDetailsForCustomization = Object.entries(productDetails).filter(
    function ([key, value]) {
      return key && key === 'options';
    },
  )[0][1];

  const colorOptions = productDetailsForCustomization.colors;
  const storageOptions = productDetailsForCustomization.storages;

  const initialData = {
    id: productDetails['id'],
    colorCode: colorOptions.length > 1 ? '' : colorOptions[0].colorCode,
    storageCode: storageOptions.length > 1 ? '' : storageOptions[0].storageCode,
  };
  const [selectedProductToCart, setSelectedProductToCart] =
    useState(initialData);

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setSelectedProductToCart({
      ...selectedProductToCart,
      [name]: value,
    });
  };

  const onClick = () => {
    console.log('BUY PRODUCT', selectedProductToCart);
  };

  const disabled = false;

  return (
    <FlexItem>
      <h4>ACTIONS</h4>
      <FlexBox as="ul" column alignItems="flex-start" padding="0">
        <SelectContainer
          label="color"
          code="colorCode"
          options={colorOptions}
          {...{ selectedProductToCart, handleChange, capitalize }}
        />
        <SelectContainer
          label="storage"
          code="storageCode"
          options={storageOptions}
          {...{ selectedProductToCart, handleChange, capitalize }}
        />
        <button type="submit" {...{ onClick, disabled }}>
          Buy
        </button>
      </FlexBox>
    </FlexItem>
  );
};

export default ProductActions;
