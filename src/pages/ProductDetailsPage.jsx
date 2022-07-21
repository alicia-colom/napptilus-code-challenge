import React from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';
import ProductSpecifications from '../components/ProductSpecifications';
import ProductVariations from '../components/ProductVariations';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Container = ({ title, heading, column, children }) => {
  return (
    <FlexItem>
      <FlexItem box as={heading} justifySelf="flex-start">
        {capitalize(title)}
      </FlexItem>
      <FlexBox as="ul" padding="0" alignItems="flex-start" {...{ column }}>
        {children}
      </FlexBox>
    </FlexItem>
  );
};

const ProductDetailsPage = ({ mobileSpecifications }) => {
  return (
    <FlexBox
      gap="100px"
      justifyContent="center"
      alignContent="center"
      pt="48px"
    >
      <FlexItem>
        <img src={mobileSpecifications.imgUrl} alt="" />
      </FlexItem>
      <FlexItem box column>
        <Container
          title={`${mobileSpecifications.brand.toUpperCase()} · ${
            mobileSpecifications.model
          }`}
          heading="h2"
        >
          <FlexItem as="h4">Price:</FlexItem>
          <FlexItem as="h3">&nbsp;{mobileSpecifications.price}&nbsp;€</FlexItem>
        </Container>
        <Container title="description" heading="h4" column>
          <ProductSpecifications {...{ mobileSpecifications, capitalize }} />
        </Container>
        <Container title="actions" heading="h4" column>
          <ProductVariations {...{ mobileSpecifications, capitalize }} />
        </Container>
      </FlexItem>
    </FlexBox>
  );
};

export default ProductDetailsPage;
