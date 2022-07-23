import React from 'react';
import { Link } from 'react-router-dom';
import { getProductDetail } from '../services/api';
import { getItemFromLocalStorage } from '../services/storage';
import Container from './Container';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function ProductCard({ mobile, setIsLoading, setMobileSpecifications }) {
  const productId = mobile.id;

  const handleLinkClick = () => {
    setIsLoading(true);
    if (productId) {
      const dataStored = getItemFromLocalStorage(productId);
      if (dataStored) {
        setMobileSpecifications(JSON.parse(dataStored));
        setIsLoading(false);
      } else {
        getProductDetail(productId).then((data) => {
          setMobileSpecifications(data);
          setIsLoading(false);
        });
      }
    }
  };

  const productName = mobile.brand.toUpperCase();
  const productPrice = `${mobile.price} €`;

  return (
    <Link
      to={`/product/${mobile.id}`}
      onClick={handleLinkClick}
      className="productCard"
    >
      <Container
        title={productName}
        headingType="h3"
        contentType="li"
        column
        center
        width="200px"
        {...{ capitalize }}
      >
        <h4>{mobile.model}</h4>
        <img
          className="productCard__img"
          src={mobile.imgUrl}
          alt={`${mobile.brand} ${mobile.model}`}
        />
        <h3 className="productCard__price">{productPrice}</h3>
      </Container>
    </Link>
  );
}

export default ProductCard;
