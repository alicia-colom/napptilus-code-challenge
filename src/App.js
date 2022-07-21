import React, { useState } from 'react';
import { FlexBox } from 'react-styled-flex';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import CataloguePage from './pages/CataloguePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import './styles/App.scss';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [mobileSpecifications, setMobileSpecifications] = useState(null);

  return (
    <div className="App">
      <Header />
      <FlexBox as="main" column center className="main">
        <Routes>
          <Route
            exact
            path="/"
            element={<CataloguePage {...{ setIsLoading, setMobileSpecifications }} />}
          />
          <Route
            exact
            path="/product/:id"
            element={!isLoading && <ProductDetailsPage {...{ mobileSpecifications }} />}
          />
        </Routes>
      </FlexBox>
      <Footer />
    </div>
  );
};

export default App;
