import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ListingSummaryLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: span 4;
`;

export default function ListingSummary({ listing }) {
  return (
    <ListingSummaryLayout id="listing-summary">
      <h2>Listing Summary</h2>
      {listing.summary.split('\n').map((string) => (
        <p key={string}>{string}</p>
      ))}
    </ListingSummaryLayout>
  );
}

ListingSummary.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
