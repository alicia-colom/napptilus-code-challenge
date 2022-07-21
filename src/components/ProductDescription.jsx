import React from 'react';
import { FlexItem } from 'react-styled-flex';

const ProductDescription = ({ productDetails, capitalize }) => {
  const noToShowInDescription = ['id', 'brand', 'model', 'price', 'imgUrl'];

  const filteredProductDetailsArr = Object.entries(productDetails).filter(
    function ([key, value]) {
      return (
        value &&
        typeof value === 'string' &&
        key &&
        !noToShowInDescription.includes(key)
      );
    },
  );

  const descriptionContent = filteredProductDetailsArr.map((item, index) => {
    const property = capitalize(item[0]);
    const value = item[1];

    return (
      <FlexItem key={index} box center>
        <h5>{property}:</h5>
        &nbsp;
        <p>{value}</p>
      </FlexItem>
    );
  });

  return descriptionContent;
};

export default ProductDescription;
