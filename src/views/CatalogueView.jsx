import React, { useState, useEffect } from 'react';
import { FlexBox } from 'react-styled-flex';
import { getCatalogue } from '../services/api';
import { getItemFromLocalStorage } from '../services/storage';
import { ProductCard } from '../components';

function CatalogueView({
  setIsLoading,
  setCurrentPage,
  setMobileSpecifications,
  capitalize,
}) {
  const [initialList, setInitialList] = useState([]);

  useEffect(() => {
    const data = getItemFromLocalStorage('catalogue');
    if (data) {
      setInitialList(JSON.parse(data));
    } else {
      getCatalogue().then(() => {
        setInitialList(data);
      });
    }
  }, []);

  useEffect(() => {
    setCurrentPage('catalogue');
  }, []);

  return (
    <FlexBox
      as="ul"
      padding="0"
      margin="0"
      gap="24px"
      wrap
      justifyContent="center"
      alignContent="center"
    >
      {initialList.map((mobile) => (
        <ProductCard
          key={mobile.id}
          {...{ mobile, setIsLoading, setMobileSpecifications, capitalize }}
        />
      ))}
    </FlexBox>
  );
}

export default CatalogueView;
