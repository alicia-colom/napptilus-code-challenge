import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBox } from 'react-styled-flex';

const ProductCard = ({ product }) => {
  return (
      <Link to={`/product/${product.id}`}>
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
