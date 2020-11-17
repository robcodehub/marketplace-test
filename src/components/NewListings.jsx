import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import styled, { createGlobalStyle } from 'styled-components';
import { BurstSale, BurstNew } from '@styled-icons/foundation';

import { Handshake, CommentsDollar, HandHoldingUsd } from '@styled-icons/fa-solid';
// import BadgeDollar from '@styled-icons/boxicon-solid'
// import CommentsDollar from '@styled-icons/fa-solid'

// @styled-icons/fa-solid/Handshake
// @styled-icons/fa-solid/CommentsDollar
// @styled-icons/boxicons-solid/BadgeDollar
//

// const GlobalStyle = createGlobalStyle`
// font-family: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
// `

import { ListingsHeader } from './ListingsHeader.jsx';

const DealIcon = styled(CommentsDollar)`
  height: 2rem;
  width: 2rem;
`;

const HandshakeIcon = styled(Handshake)`
  height: 2rem;
  width: 2rem;
`;

const SaleIcon = styled(BurstSale)`
  height: 2rem;
  width: 2rem;
`;

const MultiplePrice = styled.div`
  border: 1px solid black;
  padding: 0.5em;
`;

const GreyStyle = styled.div`
  color: #848a93;
`;

const NewIcon = styled(BurstNew)`
  color: green;
`;

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

export const RowHeadings = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #000;
  font-family: 'Helvetica';
  font-size: 1.2em;
  font-weight: bold;
  color: ${(props) => props.color || '#fff'};
`;

const ListingPreview = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #fff;
  font-family: 'Helvetica';
  font-size: 1.2em;
  font-weight: bold;
  color: ${(props) => props.color || '#000'};
  &:hover {
    border: 2px solid #005a87;
  }
`;

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
  }
  `,
};

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

export const ColColored = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)};
  color: ${(props) => props.color || '#000'};
`;

export const NewListings = () => {
  const [newListings, setNewListings] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://us-central1-marketplace-test-6a376.cloudfunctions.net/efNewListings'
      )
      .then((response) => {
        setNewListings([...response.data.data.listings]);
      });
  }, []);

  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const BusinessHeadings = () => {
    return (
      <>
        <Col size={7}>Listing Number</Col>
        <Col size={7}>Niche</Col>
        <Col size={7}>Monetization</Col>
        <Col size={7}>Price</Col>
        <Col size={7}>Monthly Net Profit</Col>
        <Col size={7}>Multiple</Col>
        <Col size={7}>Listing Status</Col>
      </>
    );
  };

  const BusinessListingRow = ({ listing }) => {
    return (
      <>
        <ColColored
          size={7}
          color={
            listing.listing_status.toLowerCase() === 'new listing'
              ? '#f5a622'
              : listing.listing_status.toLowerCase() !== 'sold'
              ? '#005a87'
              : '#848a93'
          }
        >
          <Link to={`/listing/${listing.listing_number}`}>#{listing.listing_number}</Link>
        </ColColored>
        <Col size={7}>{listing.niches[0].niche}</Col>
        <Col size={7}>{listing.monetizations[0].monetization}</Col>
        <ColColored
          size={7}
          color={
            listing.listing_status.toLowerCase() === 'new listing'
              ? '#f5a622'
              : listing.listing_status.toLowerCase() !== 'sold'
              ? '#005a87'
              : '#848a93'
          }
        >
          {currencyFormatter.format(listing.listing_price)}
        </ColColored>
        <Col size={7}>{currencyFormatter.format(listing.average_monthly_net_profit)}</Col>
        <Col size={7}>
          <MultiplePrice>{listing.listing_multiple}x</MultiplePrice>
        </Col>
        <Col size={7}>
          {listing.listing_status.toLowerCase() === 'new listing' ? (
            <>
              <NewIcon /> {listing.listing_status}{' '}
            </>
          ) : listing.listing_status.toLowerCase() === 'for sale' ? (
            <>
              <SaleIcon /> {listing.listing_status}{' '}
            </>
          ) : listing.listing_status.toLowerCase() === 'pending sold' ? (
            <>
              <DealIcon /> {listing.listing_status}{' '}
            </>
          ) : listing.listing_status.toLowerCase() === 'sold' ? (
            <>
              <HandshakeIcon /> {listing.listing_status}{' '}
            </>
          ) : (
            <>{listing.listing_status}</>
          )}
        </Col>
      </>
    );
  };

  const ListingsDisplay = ({ listings }) => (
    <>
      <Grid>
        <ListingsHeader />
        {listings.length > 0 ? (
          listings.map((listing, index) => {
            {
              return index % 2 === 0 ? (
                <ListingPreview
                  color={listing.listing_status.toLowerCase() === 'sold' ? '#848a93' : '#000'}
                >
                  <BusinessListingRow listing={listing} />
                </ListingPreview>
              ) : (
                <ListingPreview
                  color={listing.listing_status.toLowerCase() === 'sold' ? '#848a93' : '#000'}
                >
                  <BusinessListingRow listing={listing} />
                </ListingPreview>
              );
            }
          })
        ) : (
          <ListingPreview>
            <BusinessHeadings />
          </ListingPreview>
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
