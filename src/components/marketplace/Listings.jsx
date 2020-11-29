import React, { useEffect, useContext } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import { AllListingsContext } from '../../context/ListingsContext.jsx';

import ListingDisplay from './ListingDisplay.jsx';

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

export const ListingsHome = () => {
  const [allListings, setAllListings] = useContext(AllListingsContext);

  useEffect(() => {
    if (allListings[0] === undefined && allListings[0] === 'loading') {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/https://us-central1-marketplace-test-6a376.cloudfunctions.net/efMarketplaceTest'
        )
        .then((response) => {
          setAllListings([...response.data.data.listings]);
        });
    }
  }, [allListings, setAllListings]);

  return allListings[0] !== undefined && allListings[0] !== 'loading' ? (
    <div>
      <h2>Listings</h2>
      <ListingDisplay listings={allListings} />
    </div>
  ) : (
    <div>
      <h2> Loading Listings....</h2>
    </div>
  );
};
