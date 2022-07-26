import React from 'react';
import { FlexItem } from 'react-styled-flex';
import { capitalize } from '../utils/helpers';

function ProductSpecifications({ mobileSpecifications }) {
  const specificationsToBeExcluded = [
    'id',
    'brand',
    'model',
    'price',
    'imgUrl',
    'primaryCamera',
    'secondaryCmera',
  ];

  const isCameraInfo = Object.entries(mobileSpecifications).filter(
    ([key]) =>
      key && (key.includes('primaryCamera') || key.includes('secondaryCmera')),
  );

  const cameraContent = () =>
    isCameraInfo &&
    isCameraInfo.map((item, index) => {
      const property = capitalize(item[0])
        .split(/(?=[A-Z])/)
        .join(' ');
      const value = item[1];

      const cameraValue =
        typeof value === 'string' ? (
          <p>{value}</p>
        ) : (
          value.map((info, i) => <p key={i}>{info}</p>)
        );

      return (
        <FlexItem key={index} as="li" box center alignItems="baseline">
          <h5>{property}:</h5>
          {cameraValue}
        </FlexItem>
      );
    });

  const filteredMobileSpecificationsArr = Object.entries(
    mobileSpecifications,
  ).filter(
    ([key, value]) =>
      value &&
      typeof value === 'string' &&
      !specificationsToBeExcluded.includes(key),
  );

  const descriptionContent = () =>
    filteredMobileSpecificationsArr.map((item, index) => {
      const property = capitalize(item[0])
        .split(/(?=[A-Z])/)
        .join(' ');
      const value = item[1];

      return (
        <FlexItem key={index} as="li" box center alignItems="baseline">
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
