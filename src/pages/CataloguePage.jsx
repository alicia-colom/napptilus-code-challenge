import React, { useState, useEffect } from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';

import { getCatalogue } from '../api';
import ProductCard from '../components/ProductCard';

const Catalogue = () => {
  const [initialList, setInitialList] = useState([]);

  useEffect(() => {
    getCatalogue().then((data) => {
      setInitialList(data);
    });
  }, []);

  const productList = initialList.map((product) => {
    return (
      <FlexItem as="li" key={product.id}>
        <ProductCard product={product} />
      </FlexItem>
    );
  });

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
        {productList}
      </FlexBox>
    </>
  );
};

export default Catalogue;
