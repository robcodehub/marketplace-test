import React from 'react';
import styled from 'styled-components';

import { ListStyle } from '../OtherInfoSection.js';

const RisksBoxLayout = styled.div`
  grid-column-start: 3;
  grid-column-end: span 2;
`;

export default function RisksBox({ listing }) {
  return (
    <RisksBoxLayout>
      <h2>Risks</h2>
      <ListStyle>
        {listing.risks.map((risk) => {
          return <li>{risk}</li>;
        })}
      </ListStyle>
    </RisksBoxLayout>
  );
}
