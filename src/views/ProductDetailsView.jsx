import React from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';
import {
  Container,
  ProductSpecifications,
  ProductCustomization,
} from '../components';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ProductDetailsView({ mobileSpecifications, setCartCount }) {
  return (
    <FlexBox
      paddingTop="16px"
      gap="76px"
      justifyContent="center"
      alignContent="center"
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
          <FlexItem as="h3">
            &nbsp;
            {mobileSpecifications.price}
            &nbsp;€
          </FlexItem>
        </Container>
        <Container title="description" heading="h4" column {...{ capitalize }}>
          <ProductSpecifications {...{ mobileSpecifications, capitalize }} />
        </Container>
        <Container title="actions" heading="h4" column {...{ capitalize }}>
          <ProductCustomization
            {...{ mobileSpecifications, setCartCount, capitalize }}
          />
        </Container>
      </FlexItem>
    </FlexBox>
  );
}

export default ProductDetailsView;
