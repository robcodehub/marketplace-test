import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styled from 'styled-components';

export const Grid = styled.div``;
export const Row = styled.div`
  display: flex;
`;

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
  }
  `,
}

export const Col = styled.div`
flex: ${(props) => props.size};
${(props) => props.collapse && media[props.collapse](`display: none;`)}
`;

export const ListingsHome = () => {
  let [businessListings, setBusinessListings] = useState([]);


  useEffect(() => {

    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://us-central1-marketplace-test-6a376.cloudfunctions.net/efMarketplaceTest'
      )
      .then((response) => {

         setBusinessListings([...response.data.data.listings]);
      })

  },[]);


  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });



  const ListingsDisplay = ({listings}) => (



    <>
    <Grid>
      <Row>
        <Col size={7}>Listing Number</Col>
        <Col size={7}>Niche</Col>
        <Col size={7}>Monetization</Col>
        <Col size={7}>Price</Col>
        <Col size={7}>Monthly Net Profit</Col>
        <Col size={7}>Multiple</Col>
        <Col size={7}>Listing Status</Col>
      </Row>
      {listings.length > 0 ? listings.map(listing => (
        <Row>
          <Col size={7}>{listing.listing_number}</Col>
          <Col size={7}>{listing.niches[0].niche}</Col>
          <Col size={7}>{listing.monetizations[0].monetization}</Col>
          <Col size={7}>{currencyFormatter.format(listing.listing_price)}</Col>
          <Col size={7}>{listing.average_monthly_net_profit}</Col>
          <Col size={7}>{listing.listing_multiple}</Col>
          <Col size={7}>{listing.listing_status}</Col>
        </Row>
      )):
      <Row>
        <Col size={7}>Listing Number</Col>
        <Col size={7}>Niche</Col>
        <Col size={7}>Monetization</Col>
        <Col size={7}>Price</Col>
        <Col size={7}>Monthly Net Profit</Col>
        <Col size={7}>Multiple</Col>
        <Col size={7}>Listing Status</Col>
      </Row>
      }
      </Grid>
    </>
  );

  return (
    <div>
      Listing Home
      <ListingsDisplay listings={businessListings} />
    </div>
  );
};
