import React, { useState, useEffect } from 'react';
import { FlexBox } from 'react-styled-flex';
import { getCatalogue } from '../api';
import ProductCard from '../components/ProductCard';

const CataloguePage = ({ setIsLoading, setMobileSpecifications }) => {
  const [initialList, setInitialList] = useState([]);

  useEffect(() => {
    getCatalogue().then((data) => {
      setInitialList(data);
    });
  }, []);

  return (
    <>
      <h2>CATALOGUE PAGE</h2>
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
    </>
  );
};

export default CataloguePage;
