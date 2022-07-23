import React, { useState, useEffect } from 'react';
import { FlexBox } from 'react-styled-flex';
import { getCatalogue } from '../services/api';
import { getItemFromLocalStorage } from '../services/storage';
import { ProductCard } from '../components';

function CatalogueView({ setIsLoading, setMobileSpecifications }) {
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

  return (
    <FlexBox
      as="ul"
      gap="24px"
      width="872px"
      maxWidth="90vw"
      justifyContent="center"
      alignContent="center"
      wrap
      padding="0"
    >
      {initialList.map((mobile) => (
        <ProductCard
          key={mobile.id}
          {...{ mobile, setIsLoading, setMobileSpecifications }}
        />
      ))}
    </FlexBox>
  );
}

export default CatalogueView;
