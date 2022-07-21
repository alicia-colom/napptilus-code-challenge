import React from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';
import ProductDescription from '../components/ProductDescription';
import ProductActions from '../components/ProductActions';

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

const ProductPage = ({ productDetails }) => {
  return (
    <FlexBox
      gap="100px"
      justifyContent="center"
      alignContent="center"
      pt="48px"
    >
      <FlexItem>
        <img src={productDetails.imgUrl} alt="" />
      </FlexItem>
      <FlexItem box column>
        <Container
          title={`${productDetails.brand.toUpperCase()} · ${
            productDetails.model
          }`}
          heading="h2"
        >
          <FlexItem as="h4">Price:</FlexItem>
          <FlexItem as="h3">&nbsp;{productDetails.price}&nbsp;€</FlexItem>
        </Container>
        <Container title="description" heading="h4" column>
          <ProductDescription {...{ productDetails, capitalize }} />
        </Container>
        <Container title="actions" heading="h4" column>
          <ProductActions {...{ productDetails, capitalize }} />
        </Container>
      </FlexItem>
    </FlexBox>
  );
};

export default ProductPage;
