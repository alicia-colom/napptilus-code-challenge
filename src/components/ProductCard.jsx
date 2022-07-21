import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBox } from 'react-styled-flex';
import { getProductDetail } from '../api';

const ProductCard = ({ mobile, setIsLoading, setMobileSpecifications }) => {
  const handleLinkClick = (productId) => {
    setIsLoading(true);
    productId &&
      getProductDetail(productId).then((data) => {
        setMobileSpecifications(data);
        setIsLoading(false);
      });
  };

  return (
    <Link
      to={`/mobile/${mobile.id}`}
      onClick={() => handleLinkClick(mobile.id)}
    >
      <FlexBox as="li" column width="200px" center>
        <h3>{mobile.brand}</h3>
        <h4>{mobile.model}</h4>
        <img src={mobile.imgUrl} alt={mobile.brand + ' ' + mobile.model} />
        <div>
          <small>{mobile.id}</small>
          <div>{mobile.price} €</div>
        </div>
      </FlexBox>
    </Link>
  );
};

export default ProductCard;
