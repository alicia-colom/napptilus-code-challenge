import React from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';
import '../styles/ProductCard.scss';

function ProductCard({ mobile, setSelectedProductId }) {
  const productId = mobile.id;
  const productName = mobile.brand.toUpperCase();
  const productPrice = `${mobile.price ? mobile.price : '--'} €`;

  const handleLinkClick = () => {
    setSelectedProductId(productId);
  };

  return (
    <Link
      to={`/product/${mobile.id}`}
      onClick={handleLinkClick}
      className="productCard"
    >
      <Container
        id={productId}
        title={productName}
        headingType="h3"
        contentType="li"
        column
        center
        width="200px"
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
