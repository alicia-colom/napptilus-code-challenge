import React from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';
import ProductSpecifications from '../components/ProductSpecifications';
import ProductCustomization from '../components/ProductCustomization';
import Container from '../components/Container';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ProductDetailsPage = ({ mobileSpecifications, setCartNumber }) => {
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
          {...{ capitalize }}
        >
          <FlexItem as="h4">Price:</FlexItem>
          <FlexItem as="h3">&nbsp;{mobileSpecifications.price}&nbsp;€</FlexItem>
        </Container>
        <Container title="description" heading="h4" column {...{ capitalize }}>
          <ProductSpecifications {...{ mobileSpecifications, capitalize }} />
        </Container>
        <Container title="actions" heading="h4" column {...{ capitalize }}>
          <ProductCustomization
            {...{ mobileSpecifications, setCartNumber, capitalize }}
          />
        </Container>
      </FlexItem>
    </FlexBox>
  );
};

export default ProductDetailsPage;
