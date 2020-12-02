import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { NewListingsContext } from '../../context/ListingsContext.jsx';
import ListingDisplay from '../marketplace/ListingDisplay.jsx';

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

export const NewListings = () => {
  const [allNewListings, setAllNewListings] = useContext(NewListingsContext);

  useEffect(() => {
    if (allNewListings === undefined || allNewListings[0].listing_status === 'loading') {
      axios.get('/api/newlistings').then((response) => {
        setAllNewListings([...response.data.data.listings]);
      });
    }
  }, [allNewListings, setAllNewListings]);

  return allNewListings[0].listing_status === 'loading' || allNewListings === undefined ? (
    <div key="loading-newlistings">
      <h2> Loading Listings....</h2>
    </div>
  ) : (
    <div key="latest-listings">
      <div key="new-listings-header" id="new-listings-header">
        <h1>Our Latest Listings</h1>
        <h3>Every Monday we publish new businesses for sale on our marketplace</h3>
        <h2>{allNewListings.length || 0} New Listings Published </h2>
      </div>
      <ListingDisplay listings={allNewListings} />
    </div>
  );
};
