import React, { useState } from 'react';
import Select from './Select';

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
      <Select
        label="color"
        code="colorCode"
        options={colorOptions}
        {...{ selectedMobileToCart, handleChange, capitalize }}
      />
      <Select
        label="storage"
        code="storageCode"
        options={storageOptions}
        {...{ selectedMobileToCart, handleChange, capitalize }}
      />
      <button type="submit" {...{ onClick, disabled }}>
        Add to cart
      </button>
    </>
  );
};

export default ProductVariations;
