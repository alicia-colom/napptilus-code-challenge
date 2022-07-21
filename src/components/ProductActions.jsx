import React, { useState } from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';

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
        <FlexBox key="color" center>
          <label
            htmlFor="color"
            style={{ width: '100px', justifySelf: 'right' }}
          >
            <h5>Color</h5>
          </label>
          <select
            name="colorCode"
            id="color"
            defaultValue={
              colorOptions.length === 1
                ? colorOptions[0].code
                : selectedProductToCart.colorCode
            }
            value={selectedProductToCart.colorCode}
            onChange={handleChange}
          >
            <option disabled selected value="">
              -- select an option --
            </option>
            {colorOptions.map((option, index) => {
              return (
                <option key={index} value={option.code} required>
                  {option.name}
                </option>
              );
            })}
          </select>
        </FlexBox>
        <FlexBox key="storage" center>
          <label
            htmlFor="storage"
            style={{ width: '100px', justifySelf: 'right' }}
          >
            <h5>Storage</h5>
          </label>
          <select
            name="storageCode"
            id="storage"
            defaultValue={
              storageOptions.length === 1
                ? storageOptions[0].code
                : selectedProductToCart.storageCode
            }
            value={selectedProductToCart.storageCode}
            onChange={handleChange}
          >
            <option disabled selected value="">
              -- select an option --
            </option>
            {storageOptions.map((option, index) => {
              return (
                <option key={index} value={option.code} required>
                  {option.name}
                </option>
              );
            })}
          </select>
        </FlexBox>

        <button type="submit" {...{ onClick, disabled }}>
          Buy
        </button>
      </FlexBox>
    </FlexItem>
  );
};

export default ProductActions;
