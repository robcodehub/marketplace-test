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
    axios.get('/api/alllistings').then((response) => {
      setAllListings([...response.data.data.listings]);
    });
  }, []);

  return allListings[0] !== undefined && allListings[0] !== 'loading' ? (
    <div key="listings">
      <h2>Listings</h2>
      <ListingDisplay listings={allListings} />
    </div>
  ) : (
    <div key="loadinglistings">
      <h2> Loading Listings....</h2>
    </div>
  );
};
