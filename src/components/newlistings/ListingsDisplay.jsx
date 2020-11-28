import React, { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';

import ListingsHeader from '../marketplace/ListingsHeader.jsx';

import BusinessListingRow, { BusinessRow } from '../marketplace/BusinessListingRow.jsx';

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

const ListingsDisplay = ({ listings }) => (
  <>
    <h2>{listings.length || 0} New Listings Published </h2>
    <Grid>
      <ListingsHeader />
      {listings.length > 0 ? (
        listings.map((listing, index) => {
          {
            return index % 2 === 0 ? (
              <BusinessRow backgroundcolor="#fff">
                <BusinessListingRow listing={listing} />
              </BusinessRow>
            ) : (
              <BusinessRow backgroundcolor="#e8e8e8">
                <BusinessListingRow listing={listing} />
              </BusinessRow>
            );
          }
        })
      ) : (
        <ListingsHeader />
      )}
    </Grid>
  </>
);

export default ListingsDisplay;
