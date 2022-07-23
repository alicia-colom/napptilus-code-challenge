import React from 'react';
import { FlexItem } from 'react-styled-flex';

function ProductSpecifications({ mobileSpecifications, capitalize }) {
  const noToShowInDescription = ['id', 'brand', 'model', 'price', 'imgUrl'];
  const isCameraInfo = Object.entries(mobileSpecifications).filter(
    ([key]) =>
      key && (key.includes('primaryCamera') || key.includes('secondaryCmera')),
  );

  const cameraContent = () =>
    isCameraInfo.map((item, index) => {
      const property = capitalize(item[0])
        .split(/(?=[A-Z])/)
        .join(' ');
      const value = item[1].map((info) => <p>{info}</p>);

      return (
        <FlexItem as="li" key={index} box center alignItems="baseline">
          <h5>{property}:</h5>
          {value}
        </FlexItem>
      );
    });

  const filteredMobileSpecificationsArr = Object.entries(
    mobileSpecifications,
  ).filter(
    ([key, value]) =>
      value &&
      typeof value === 'string' &&
      !noToShowInDescription.includes(key),
  );

  const descriptionContent = () =>
    filteredMobileSpecificationsArr.map((item, index) => {
      const property = capitalize(item[0])
        .split(/(?=[A-Z])/)
        .join(' ');
      const value = item[1];

      return (
        <FlexItem as="li" key={index} box center alignItems="baseline">
          <h5>{property}:</h5>
          <p>{value}</p>
        </FlexItem>
      );
    });

  return (
    <>
      {cameraContent()} {descriptionContent()}
    </>
  );
}

export default ProductSpecifications;
