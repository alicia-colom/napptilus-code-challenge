import React from 'react';
import { FlexBox } from 'react-styled-flex';

function NoResults() {
  return (
    <FlexBox center column>
      <h2>Ups...</h2>
      <h3>There is no result for your search</h3>
      <h4>Try to type anything different</h4>
    </FlexBox>
  );
}

export default NoResults;
