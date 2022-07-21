import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBox } from 'react-styled-flex';
import { getProductDetail } from '../api';

const ProductCard = ({ product, setIsLoading, setProductDetails }) => {
  const handleLinkClick = (productId) => {
    setIsLoading(true);
    productId &&
      getProductDetail(productId).then((data) => {
        setProductDetails(data);
        setIsLoading(false);
      });
  };

  return (
    <Link
      to={`/product/${product.id}`}
      onClick={() => handleLinkClick(product.id)}
    >
      <FlexBox as="li" column width="200px" center>
        <h3>{product.brand}</h3>
        <h4>{product.model}</h4>
        <img src={product.imgUrl} alt={product.brand + ' ' + product.model} />
        <div>
          <small>{product.id}</small>
          <div>{product.price} €</div>
        </div>
      </FlexBox>
    </Link>
  );
};

export default ProductCard;
