import React from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ProductDescription = ({ specifications }) => {
  const detailKeys = Object.keys(specifications);
  const detailValues = Object.values(specifications);

  const description = detailValues
    .filter((value) => typeof value === 'string')
    .map((value, index) => {
      return (
        <FlexItem key={index} box center>
          <h5>{capitalize(detailKeys[index])}:</h5>
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
