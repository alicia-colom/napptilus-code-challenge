import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBox } from 'react-styled-flex';
import { getProductDetail } from '../services/api';
import { getItemFromLocalStorage } from '../services/storage';

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

  return (
    <Link to={`/product/${mobile.id}`} onClick={handleLinkClick}>
      <FlexBox as="li" column width="200px" center>
        <h3>{mobile.brand}</h3>
        <h4>{mobile.model}</h4>
        <img src={mobile.imgUrl} alt={`${mobile.brand} ${mobile.model}`} />
        <div>
          <div>
            {mobile.price}
            &nbsp; €
          </div>
        </div>
      </FlexBox>
    </Link>
  );
}

export default ProductCard;
