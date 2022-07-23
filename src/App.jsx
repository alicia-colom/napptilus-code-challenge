import React, { useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import { Routes, Route } from 'react-router-dom';
import { CatalogueView, ProductDetailsView } from './views';
import { Header, Footer, Loader } from './components';
import './styles/App.scss';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('catalogue');
  const [term, setTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);
  const [mobileSpecifications, setMobileSpecifications] = useState(null);

  return (
    <div className="App">
      <Header {...{ currentPage, cartCount, term, setTerm }} />
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
                  term,
                  setTerm,
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
              isLoading ? (
                <Loader />
              ) : (
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
