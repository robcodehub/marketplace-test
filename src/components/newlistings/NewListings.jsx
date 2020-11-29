import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import { NewListingsContext } from '../../context/ListingsContext.jsx';

// import ListingsDisplay from './ListingsDisplay.jsx';

import ListingDisplay from '../marketplace/ListingDisplay.jsx';

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

export const NewListings = () => {
  const [allNewListings, setAllNewListings] = useContext(NewListingsContext);

  useEffect(() => {
    if (allNewListings === undefined || allNewListings[0] === 'loading') {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/https://us-central1-marketplace-test-6a376.cloudfunctions.net/efNewListings'
        )
        .then((response) => {
          setAllNewListings([...response.data.data.listings]);
        });
    }
  }, [allNewListings, setAllNewListings]);

  return allNewListings[0] !== undefined && allNewListings[0] !== 'loading' ? (
    <div>
      <div>
        <h1>Our Latest Listings</h1>
        <h3>Every Monday we publish new businesses for sale on our marketplace</h3>
        <h2>{allNewListings.length || 0} New Listings Published </h2>
      </div>
      <ListingDisplay listings={allNewListings} />
    </div>
  ) : (
    <div>
      <h2> Loading Listings....</h2>
    </div>
  );
};
