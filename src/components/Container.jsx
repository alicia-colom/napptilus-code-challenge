import React from 'react';
import { FlexItem } from 'react-styled-flex';

function Container({
  title,
  headingType,
  contentType,
  column,
  capitalize,
  children,
}) {
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
