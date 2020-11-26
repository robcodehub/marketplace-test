import React from 'react';
import styled from 'styled-components';

import SellerSupportBox from './listingboxes/SellerSupportBox.jsx';
import SaleReasonBox from './listingboxes/SaleReasonBox.jsx';

const ListingSectionFiveStyles = styled.div`
  grid-row-start: 7;
  grid-row-end: 7;
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

export default function ListingSectionFive({ listing }) {
  return (
    <ListingSectionFiveStyles>
      <SellerSupportBox listing={listing} />
      <SaleReasonBox listing={listing} />
    </ListingSectionFiveStyles>
  );
}
