import React, { useEffect } from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';
import {
  Container,
  ProductSpecifications,
  ProductCustomization,
} from '../components';
import '../styles/ProductDetailsView.scss';

function ProductDetailsView({
  setCurrentPage,
  mobileSpecifications,
  setCartCount,
}) {
  const productName = `${mobileSpecifications.brand.toUpperCase()} · ${
    mobileSpecifications.model
  }`;
  const productPrice = `${
    mobileSpecifications.price ? mobileSpecifications.price : '--'
  } €`;

  useEffect(() => {
    setCurrentPage('product');
  }, []);

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
      <FlexItem box column className="productView__info" gap="14px">
        <Container title={productName} headingType="h2" contentType="div">
          <FlexItem as="h5" paddingRight="10px">
            Price:
          </FlexItem>
          <FlexItem as="h2">{productPrice}</FlexItem>
        </Container>
        <Container title="description" headingType="h4" contentType="ul" column>
          <ProductSpecifications {...{ mobileSpecifications }} />
        </Container>
        <Container title="actions" headingType="h4" contentType="ul" column>
          <ProductCustomization {...{ mobileSpecifications, setCartCount }} />
        </Container>
      </FlexItem>
    </FlexBox>
  );
}

export default ProductDetailsView;
