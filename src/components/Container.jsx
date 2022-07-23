import React from 'react';
import { FlexItem } from 'react-styled-flex';

function Container({ title, heading, column, capitalize, children }) {
  return (
    <FlexItem>
      <FlexItem box as={heading} justifySelf="flex-start">
        {capitalize(title)}
      </FlexItem>
      <FlexItem box as="ul" padding="0" alignItems="flex-start" {...{ column }}>
        {children}
      </FlexItem>
    </FlexItem>
  );
}

export default Container;
