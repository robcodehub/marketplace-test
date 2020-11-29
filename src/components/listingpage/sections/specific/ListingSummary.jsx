import React from 'react';
import styled from 'styled-components';

const ListingSummaryLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: span 4;
`;

export default function ListingSummary({ listing }) {
  return (
    <ListingSummaryLayout>
      <h2>Listing Summary</h2>
      {listing.summary.split('\n').map((string) => (
        <p>{string}</p>
      ))}
    </ListingSummaryLayout>
  );
}
