import React, { useState } from 'react';
import { updateCart } from '../services/api';
import Select from './Select';

function ProductCustomization({
  mobileSpecifications,
  setCartCount,
  capitalize,
}) {
  const productDetailsForCustomization = Object.entries(
    mobileSpecifications,
  ).filter(([key]) => key && key === 'options')[0][1];

  const colorOptions = productDetailsForCustomization.colors;
  const storageOptions = productDetailsForCustomization.storages;

  const initialData = {
    id: mobileSpecifications.id,
    colorCode: colorOptions.length > 1 ? null : colorOptions[0].code,
    storageCode: storageOptions.length > 1 ? null : storageOptions[0].code,
  };
  const [selectedMobileToCart, setSelectedMobileToCart] = useState(initialData);

  const handleCustomizationChange = (ev) => {
    const { name, value } = ev.target;
    setSelectedMobileToCart({
      ...selectedMobileToCart,
      [name]: value,
    });
  };
  const handleAddToCart = () => {
    updateCart(selectedMobileToCart).then((data) => {
      setCartCount(data.count);
    });
  };

  const disabledButton =
    !selectedMobileToCart.id ||
    !selectedMobileToCart.colorCode ||
    !selectedMobileToCart.storageCode;

  return (
    <>
      <Select
        label="color"
        code="colorCode"
        options={colorOptions}
        {...{ selectedMobileToCart, handleCustomizationChange, capitalize }}
      />
      <Select
        label="storage"
        code="storageCode"
        options={storageOptions}
        {...{ selectedMobileToCart, handleCustomizationChange, capitalize }}
      />
      <button
        className="productView__customization--button"
        type="submit"
        onClick={handleAddToCart}
        disabled={disabledButton}
      >
        Add to cart
      </button>
    </>
  );
}

export default ProductCustomization;
