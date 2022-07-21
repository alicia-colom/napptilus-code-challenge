import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FlexBox, FlexItem } from 'react-styled-flex';

import { getCatalogue } from '../api';
import ProductCard from '../components/ProductCard';

const CataloguePage = () => {
  const [initialList, setInitialList] = useState([]);

  useEffect(() => {
    getCatalogue().then((data) => {
      setInitialList(data);
    });
  }, []);

  const productList = initialList.map((product) => {
    return (
      <FlexItem as="li" key={product.id}>
        <Link
          to={`/product/${product.id}`}
          className="character-list__list--link"
        >
          <ProductCard product={product} />
        </Link>
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

export default CataloguePage;
