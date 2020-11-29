import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import ListingsHeader from './ListingsHeader.jsx';
import BusinessListingRow, { BusinessRow } from './BusinessListingRow.jsx';

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

const ListingDisplay = ({ listings }) => (
  <>
    <Grid>
      <ListingsHeader />
      {listings.length > 0 ? (
        listings.map((listing, index) => {
          {
            return index % 2 === 0 ? (
              <BusinessRow
                key={listing.id}
                color={listing.listing_status.toLowerCase() === 'sold' ? '#848a93' : '#000'}
                backgroundcolor="#fff"
              >
                <BusinessListingRow listing={listing} key={listing.id} />
              </BusinessRow>
            ) : (
              <BusinessRow
                key={listing.id}
                color={listing.listing_status.toLowerCase() === 'sold' ? '#848a93' : '#000'}
                backgroundcolor="#e8e8e8"
              >
                <BusinessListingRow listing={listing} key={listing.id} />
              </BusinessRow>
            );
          }
        })
      ) : (
        <BusinessRow>
          <h2>Loading Listings...</h2>
        </BusinessRow>
      )}
    </Grid>
  </>
);

ListingDisplay.propTypes = {
  listings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListingDisplay;
