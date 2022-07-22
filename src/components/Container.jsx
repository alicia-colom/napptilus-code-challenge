import React from 'react';
import { FlexBox, FlexItem } from 'react-styled-flex';

const Container = ({ title, heading, column, capitalize, children }) => {
  return (
    <FlexItem>
      <FlexItem box as={heading} justifySelf="flex-start">
        {capitalize(title)}
      </FlexItem>
      <FlexBox as="ul" padding="0" alignItems="flex-start" {...{ column }}>
        {children}
      </FlexBox>
    </FlexItem>
  );
};

export default Container;
