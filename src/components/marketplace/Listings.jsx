import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import styled from 'styled-components';

import { DealIcon, SaleIcon, HandshakeIcon, NewIcon } from '../icons/Icons.jsx';

import currencyFormatter from '../../functions/convertCurrency';

import ListingsHeader, { Col } from './ListingsHeader.jsx';
import BusinessListingRow, { BusinessRow } from './BusinessListingRow.jsx';

const MultiplePrice = styled.div`
  border: 1px solid black;
  padding: 0.5em;
`;

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

export const ListingsHome = () => {
  const [businessListings, setBusinessListings] = useState([]);
  // const { allListings, setAllListings } = useContext(ListingsContext);

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://us-central1-marketplace-test-6a376.cloudfunctions.net/efMarketplaceTest'
      )
      .then((response) => {
        setBusinessListings([...response.data.data.listings]);
      });
  }, []);

  const ListingsDisplay = ({ listings }) => (
    <>
      <Grid>
        <ListingsHeader />
        {listings.length > 0 ? (
          listings.map((listing, index) => {
            {
              return index % 2 === 0 ? (
                <BusinessRow
                  color={listing.listing_status.toLowerCase() === 'sold' ? '#848a93' : '#000'}
                  backgroundcolor="#fff"
                >
                  <BusinessListingRow listing={listing} />
                </BusinessRow>
              ) : (
                <BusinessRow
                  color={listing.listing_status.toLowerCase() === 'sold' ? '#848a93' : '#000'}
                  backgroundcolor="#e8e8e8"
                >
                  <BusinessListingRow listing={listing} />
                </BusinessRow>
              );
            }
          })
        ) : (
          <BusinessRow>
            <ListingsHeader />
          </BusinessRow>
        )}
      </Grid>
    </>
  );

  return (
    <div>
      <h2>Listings</h2>
      <ListingsDisplay listings={businessListings} />
    </div>
  );
};
