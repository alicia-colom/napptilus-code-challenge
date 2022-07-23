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
  const productName = `${mobileSpecifications.brand.toUpperCase()} · ${
    mobileSpecifications.model
  }`;
  const productPrice = `${mobileSpecifications.price} €`;

  return (
    <FlexBox
      wrap
      justifyContent="center"
      alignContent="center"
      padding-top="20px"
      margin="auto"
    >
      <FlexItem className="productView__img">
        <img src={mobileSpecifications.imgUrl} alt="" />
      </FlexItem>
      <FlexItem box column className="productView__info">
        <Container
          title={productName}
          headingType="h2"
          contentType="div"
          {...{ capitalize }}
        >
          <FlexItem as="h5" paddingRight="10px">
            Price:
          </FlexItem>
          <FlexItem as="h2">{productPrice}</FlexItem>
        </Container>
        <Container
          title="description"
          headingType="h4"
          contentType="ul"
          column
          {...{ capitalize }}
        >
          <ProductSpecifications {...{ mobileSpecifications, capitalize }} />
        </Container>
        <Container
          title="actions"
          headingType="h4"
          contentType="ul"
          column
          {...{ capitalize }}
        >
          <ProductCustomization
            {...{ mobileSpecifications, setCartCount, capitalize }}
          />
        </Container>
      </FlexItem>
    </FlexBox>
  );
}

export default ProductDetailsView;
