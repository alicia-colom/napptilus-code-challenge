import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBox } from 'react-styled-flex';
import logoPhonestore from '../assets/phonestore-alfa.png';
import '../styles/Header.scss';

function Header({ cartCount }) {
  return (
    <FlexBox
      as="header"
      className="header"
      center
      justifyContent="space-between"
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
      <i className="fa fa-shopping-cart header__cart" aria-hidden="true">
        <small className="header__cart--counter">{cartCount}</small>
      </i>
    </FlexBox>
  );
}

export default Header;
