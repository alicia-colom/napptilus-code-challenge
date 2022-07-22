import React from 'react';
import { FlexBox } from 'react-styled-flex';
import '../styles/Header.scss';

const Header = ({ cartNumber }) => {
  return (
    <FlexBox
      as="header"
      className="headerContainer"
      center
      justifyContent="space-between"
    >
      <h1 className="headerTitle">Napptilus code challenge</h1>
      <i className="fa fa-shopping-cart cart" aria-hidden="true">
        <small className="cart__number">{cartNumber}</small>
      </i>
    </FlexBox>
  );
};

export default Header;
