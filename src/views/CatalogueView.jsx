import React, { useState, useEffect } from 'react';
import { FlexBox } from 'react-styled-flex';
import { getCatalogue } from '../services/api';
import { getItemFromLocalStorage } from '../services/storage';
import { SearchBar, ProductCard } from '../components';

function CatalogueView({ setIsLoading, setMobileSpecifications }) {
  const [term, setTerm] = useState('');
  const [initialList, setInitialList] = useState([]);

  useEffect(() => {
    if (localStorage) {
      const data = getItemFromLocalStorage('catalogue');
      data
        ? setInitialList(JSON.parse(data))
        : getCatalogue().then((data) => {
            setInitialList(data);
          });
    }
  }, []);

  return (
    <>
      <FlexBox width="100%" justifyContent="flex-end" marginRight="30px">
        <SearchBar {...{ term, setTerm }} />
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
}

export default CatalogueView;
