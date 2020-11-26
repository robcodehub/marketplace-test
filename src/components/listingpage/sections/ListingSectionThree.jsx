import React from 'react';
import styled from 'styled-components';

import OpportunitiesBox from './listingboxes/OpportunitiesBox.jsx';
import RisksBox from './listingboxes/RisksBox.jsx';

const ListingSectionThreeStyles = styled.div`
  grid-row-start: 5;
  grid-row-end: 5;
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

export default function ListingSectionThree({ listing }) {
  return (
    <ListingSectionThreeStyles>
      <OpportunitiesBox listing={listing} />
      <RisksBox listing={listing} />
    </ListingSectionThreeStyles>
  );
}
