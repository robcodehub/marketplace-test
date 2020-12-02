import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ListingsHeader from './ListingsHeader.jsx';
import BusinessListingRow, { BusinessRow } from './BusinessListingRow.jsx';

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

// Loading Div is just included as a conditional rendering fallback
const LoadingDiv = styled.div`
  margin-top: 3rem;
  padding-top: 3rem;
`;

const ListingDisplay = ({ listings }) => (
  <>
    <Grid id="all-listings">
      <ListingsHeader />
      {listings[0].listing_status !== 'loading' && listings.length > 2 ? (
        listings.map((listing, index) => {
          return (
            <BusinessRow
              key={listing.id}
              color={listing.listing_status.toLowerCase() === 'sold' ? '#848a93' : '#000'}
              backgroundcolor={index % 2 === 0 ? '#fff' : '#e8e8e8'}
            >
              <BusinessListingRow listing={listing} key={listing.id} />
            </BusinessRow>
          );
        })
      ) : (
        <BusinessRow>
          <LoadingDiv>
            <h2>Loading Listings...</h2>
          </LoadingDiv>
        </BusinessRow>
      )}
    </Grid>
  </>
);

ListingDisplay.propTypes = {
  listings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListingDisplay;
