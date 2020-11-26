import React from 'react';
import styled from 'styled-components';

import { ListStyle } from '../OtherInfoSection.js';

const SaleReasonBoxLayout = styled.div`
  grid-column-start: 3;
  grid-column-end: span 2;
`;

export default function SaleReasonBox({ listing }) {
  return (
    <SaleReasonBoxLayout>
      <h2>Reason for Sale</h2>
      <p>{listing.reason_for_sale}</p>
    </SaleReasonBoxLayout>
  );
}
