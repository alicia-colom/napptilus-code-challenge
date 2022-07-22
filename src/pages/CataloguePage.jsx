import React, { useState, useEffect } from 'react';
import { FlexBox } from 'react-styled-flex';
import { getCatalogue } from '../api';

import SearchBar from '../components/SearchBar';
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
      <FlexBox
        width="100%"
        justifyContent="flex-end"
        marginRight="30px"
      >
        <SearchBar />
      </FlexBox>
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
