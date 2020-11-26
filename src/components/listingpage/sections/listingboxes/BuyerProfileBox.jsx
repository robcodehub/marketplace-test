import React from 'react';
import styled from 'styled-components';

import { ListStyle } from '../OtherInfoSection.js';

const BuyerProfileBoxLayout = styled.div`
  grid-column-start: 3;
  grid-column-end: span 2;
`;

export default function BuyerProfileBox({ listing }) {
  return (
    <BuyerProfileBoxLayout>
      <h2>Buyer Profiles</h2>
      <ListStyle>
        {listing.buyer_profiles.map((profile) => {
          return <li>{profile}</li>;
        })}
      </ListStyle>
    </BuyerProfileBoxLayout>
  );
}
