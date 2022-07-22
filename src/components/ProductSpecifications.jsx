import React from 'react';
import { FlexItem } from 'react-styled-flex';

const ProductSpecifications = ({ mobileSpecifications, capitalize }) => {
  const noToShowInDescription = ['id', 'brand', 'model', 'price', 'imgUrl'];

  const filteredMobileSpecificationsArr = Object.entries(
    mobileSpecifications,
  ).filter(
    ([key, value]) =>
      value &&
      typeof value === 'string' &&
      key &&
      !noToShowInDescription.includes(key),
  );

  const descriptionContent = filteredMobileSpecificationsArr.map(
    (item, index) => {
      const property = capitalize(item[0]);
      const value = item[1];

      return (
        <FlexItem key={index} box center>
          <h5>{property}:</h5>
          &nbsp;
          <p>{value}</p>
        </FlexItem>
      );
    },
  );

  return descriptionContent;
};

export default ProductSpecifications;
