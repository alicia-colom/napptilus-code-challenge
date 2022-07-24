import React, { useState, useEffect } from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';
import { getProductDetail } from '../services/api';
import { getItemFromLocalStorage } from '../services/storage';
import {
  Container,
  ProductSpecifications,
  ProductCustomization,
  Loader,
} from '../components';
import '../styles/ProductDetailsView.scss';

function ProductDetailsView({
  selectedProductId,
  setTerm,
  setIsLoading,
  setCurrentPage,
  setCartCount,
}) {
  const [mobileSpecifications, setMobileSpecifications] = useState();

  useEffect(() => {
    setIsLoading(true);
    const dataStored = getItemFromLocalStorage(
      `product_id_${selectedProductId}`,
    );
    if (dataStored) {
      setMobileSpecifications(JSON.parse(dataStored));
      setIsLoading(false);
    } else {
      getProductDetail(selectedProductId).then((data) => {
        setMobileSpecifications(data);
        setIsLoading(false);
      });
    }
  }, []);

  useEffect(() => {
    setCurrentPage('product');
  }, []);

  useEffect(() => {
    setIsLoading(false);
    setTerm('');
  }, [mobileSpecifications]);

  const productName = `${
    mobileSpecifications && mobileSpecifications.brand.toUpperCase()
  } · ${mobileSpecifications && mobileSpecifications.model}`;
  const productPrice = `${
    mobileSpecifications && mobileSpecifications.price
      ? mobileSpecifications.price
      : '--'
  } €`;

  return mobileSpecifications ? (
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
  ) : (
    <Loader />
  );
}

export default ProductDetailsView;
