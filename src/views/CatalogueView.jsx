import React, { useState, useEffect } from 'react';
import { FlexBox } from 'react-styled-flex';
import { getCatalogue } from '../services/api';
import { getItemFromLocalStorage } from '../services/storage';
import { ProductCard } from '../components';

function CatalogueView({
  term,
  setTerm,
  setIsLoading,
  setCurrentPage,
  setMobileSpecifications,
  capitalize,
}) {
  const [initialList, setInitialList] = useState([]);
  const termToFilter = term && term.toLowerCase().trim();

  const filteredList = initialList.filter((mobile) => {
    const brandToFilter = mobile.brand.toLowerCase().trim();
    const modelToFilter = mobile.model.toLowerCase().trim();

    return (
      brandToFilter.includes(termToFilter) ||
      modelToFilter.includes(termToFilter)
    );
  });

  const catalogue = term ? filteredList : initialList;

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
      {catalogue.map((mobile) => (
        <ProductCard
          key={mobile.id}
          {...{
            mobile,
            setTerm,
            setIsLoading,
            setMobileSpecifications,
            capitalize,
          }}
        />
      ))}
    </FlexBox>
  );
}

export default CatalogueView;
