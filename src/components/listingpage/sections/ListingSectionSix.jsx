import React from 'react';
import styled from 'styled-components';

import OtherInfoBox from './listingboxes/OtherInfoBox.jsx';
import BuyerProfileBox from './listingboxes/BuyerProfileBox.jsx';

const ListingSectionSixStyles = styled.div`
  grid-row-start: 8;
  grid-row-end: 8;
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

export default function ListingSectionSix({ listing }) {
  return (
    <ListingSectionSixStyles>
      <OtherInfoBox listing={listing} />
      <BuyerProfileBox listing={listing} />
    </ListingSectionSixStyles>
  );
}
