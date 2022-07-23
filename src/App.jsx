import React, { useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import { Routes, Route } from 'react-router-dom';

import { CatalogueView, ProductDetailsView } from './views';
import { Header, Footer } from './components';
import './styles/App.scss';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('catalogue');
  const [mobileSpecifications, setMobileSpecifications] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Header {...{ currentPage, cartCount }} />
      <FlexBox
        as="main"
        column
        center
        className="main"
        maxWidth="984px"
        padding="50px 0"
        margin="auto"
      >
        <Routes>
          <Route
            exact
            path="/"
            element={
              <CatalogueView
                {...{
                  setIsLoading,
                  setCurrentPage,
                  setMobileSpecifications,
                  capitalize,
                }}
              />
            }
          />
          <Route
            exact
            path="/product/:id"
            element={
              !isLoading && (
                <ProductDetailsView
                  {...{
                    setCurrentPage,
                    mobileSpecifications,
                    setCartCount,
                    capitalize,
                  }}
                />
              )
            }
          />
        </Routes>
      </FlexBox>
      <Footer />
    </div>
  );
}

export default App;
