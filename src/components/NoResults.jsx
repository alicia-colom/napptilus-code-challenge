import React from 'react';
import { FlexBox } from 'react-styled-flex';

function NoResults() {
  return (
    <FlexBox center>
      <h3>Ups... There is no result for your search.</h3>
      <h4>Try to type anything different ^_^</h4>
    </FlexBox>
  );
}

export default NoResults;
