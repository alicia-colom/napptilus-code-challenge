import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlexBox } from 'react-styled-flex';
import SearchBar from './SearchBar';
import logoPhonestore from '../assets/phonestore-alfa.png';
import '../styles/Header.scss';

function Header({ cartCount }) {
  const [term, setTerm] = useState('');
  return (
    <FlexBox
      as="header"
      className="header"
      center
      justifyContent="space-around"
    >
      <Link to="/" className="header__heading">
        <img
          className="header__heading--logo"
          src={logoPhonestore}
          alt="Logo Phonestore"
          title="Back to home"
        />
        <h1 className="header__heading--title">Phonestore</h1>
      </Link>
      <FlexBox center>
        <SearchBar {...{ term, setTerm }} />
        <i className="fa fa-shopping-cart header__cart" aria-hidden="true">
          <small className="header__cart--counter">{cartCount}</small>
        </i>
      </FlexBox>
    </FlexBox>
  );
}

export default Header;
