import React, { useState, useEffect } from 'react';
import { FlexBox } from 'react-styled-flex';
import { getCatalogue } from '../services/api';
import { getItemFromLocalStorage } from '../services/storage';
import { ProductCard, NoResults } from '../components';

function CatalogueView({ term, setCurrentPage, setSelectedProductId }) {
  const [initialList, setInitialList] = useState([]);
  const termToFilter = term && term.toLowerCase().trim();

  const filteredList = () =>
    initialList.filter((mobile) => {
      const brandToFilter = mobile.brand.toLowerCase().trim();
      const modelToFilter = mobile.model.toLowerCase().trim();

      return (
        brandToFilter.includes(termToFilter) ||
        modelToFilter.includes(termToFilter)
      );
    });

  const searchWithNoResults = term && filteredList().length === 0;

  useEffect(() => {
    const dataStored = getItemFromLocalStorage('catalogue');
    if (dataStored) {
      setInitialList(JSON.parse(dataStored));
    } else {
      getCatalogue().then((data) => {
        setInitialList(data);
      });
    }
  }, []);

  useEffect(() => {
    setCurrentPage('catalogue');
  }, []);

  const catalogue = term ? filteredList() : initialList;

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
      {searchWithNoResults ? (
        <NoResults />
      ) : (
        catalogue.map((mobile) => (
          <ProductCard key={mobile.id} {...{ mobile, setSelectedProductId }} />
        ))
      )}
    </FlexBox>
  );
}

export default CatalogueView;
