import React, { useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import { Routes, Route } from 'react-router-dom';

import { CatalogueView, ProductDetailsView } from './views';
import { Header, Footer } from './components';
import './styles/App.scss';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileSpecifications, setMobileSpecifications] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Header {...{ cartCount }} />
      <FlexBox as="main" column center className="main">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <CatalogueView {...{ setIsLoading, setMobileSpecifications }} />
            }
          />
          <Route
            exact
            path="/product/:id"
            element={
              !isLoading && (
                <ProductDetailsView
                  {...{ mobileSpecifications, setCartCount }}
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
