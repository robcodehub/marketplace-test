import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import { DealIcon, SaleIcon, HandshakeIcon, NewIcon } from '../icons/Icons.jsx';

import ListingsHeader, { Col } from '../marketplace/ListingsHeader.jsx';

import BusinessListingRow, { BusinessRow } from '../marketplace/BusinessListingRow.jsx';

import { NewListingsContext } from '../../context/ListingsContext.jsx';

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

export const NewListings = () => {
  const [newListings, setNewListings] = useState([]);

  const [allNewListings, setAllNewListings] = useContext(NewListingsContext);

  useEffect(() => {
    if (allNewListings[0] !== 'loading' || undefined) {
      setNewListings([...allNewListings]);
    } else {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/https://us-central1-marketplace-test-6a376.cloudfunctions.net/efNewListings'
        )
        .then((response) => {
          setNewListings([...response.data.data.listings]);
          setAllNewListings([...response.data.data.listings]);
        });
    }
  }, []);

  const ListingsDisplay = ({ listings }) => (
    <>
      <h1>{newListings.length || 0} listings</h1>
      <Grid>
        <ListingsHeader />
        {listings.length > 0 ? (
          listings.map((listing, index) => {
            {
              return index % 2 === 0 ? (
                <BusinessRow>
                  <BusinessListingRow listing={listing} />
                </BusinessRow>
              ) : (
                <BusinessRow>
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

  return (
    <div>
      <div>
        <h1>Our Latest Listings</h1>
        <h3>Every Monday we publish new businesses for sale on our marketplace</h3>
        <div>4 New Listings Published | 70 Listings Total </div>
      </div>
      <ListingsDisplay listings={newListings} />
    </div>
  );
};
