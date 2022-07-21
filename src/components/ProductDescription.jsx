import React from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ProductDescription = ({ productDetails }) => {
  const noToShowInDescription = ['id', 'brand', 'model', 'price', 'imgUrl'];

  const filteredProductDetailsArr = Object.entries(productDetails).filter(
    function ([key, value]) {
      return (
        value &&
        typeof value === 'string' &&
        !noToShowInDescription.includes(key)
      );
    },
  );

  const description = filteredProductDetailsArr.map((item, index) => {
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

  return (
    <FlexItem>
      <h4>DESCRIPTION</h4>
      <FlexBox as="ul" column alignItems="flex-start">
        {description}
      </FlexBox>
    </FlexItem>
  );
};

export default ProductDescription;
