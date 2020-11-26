import React from 'react';
import styled from 'styled-components';

import currencyFormatter from '../../../functions/convertCurrency';

import ListingSummary from '../ListingSummary.jsx';

const ListingSectionTwoStyles = styled.div`
  grid-row-start: 4;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10%, auto);
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #000;
`;

export default function ListingSectionTwo({ listing }) {
  return (
    <ListingSectionTwoStyles>
      <ListingSummary listing={listing} />
    </ListingSectionTwoStyles>
  );
}
