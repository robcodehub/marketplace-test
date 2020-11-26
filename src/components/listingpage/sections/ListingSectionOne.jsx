import React from 'react';
import styled from 'styled-components';

import currencyFormatter from '../../../functions/convertCurrency';

import LeftColumnLeft from './LeftColumnLeft.jsx';
import LeftColumnRight from './LeftColumnRight.jsx';
import RightLayout from './RightLayout.jsx';

const ListingSectionOneStyles = styled.div`
  grid-row-start: 3;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: -1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10%, auto);
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #000;
`;

export default function ListingSectionOne({ listing }) {
  return (
    <ListingSectionOneStyles>
      <LeftColumnLeft listing={listing} />
      <LeftColumnRight listing={listing} />
      <RightLayout listing={listing} />
    </ListingSectionOneStyles>
  );
}
