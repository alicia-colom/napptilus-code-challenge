import React from 'react';
import { FlexItem } from 'react-styled-flex';
import { capitalize } from '../utils/helpers';
import '../styles/Container.scss';

function Container({ title, headingType, contentType, column, children }) {
  return (
    <FlexItem className="container">
      <FlexItem box as={headingType} justifySelf="flex-start">
        {capitalize(title)}
      </FlexItem>
      <FlexItem
        box
        as={contentType}
        padding="0"
        alignItems="baseline"
        {...{ column }}
      >
        {children}
      </FlexItem>
    </FlexItem>
  );
}

export default Container;
