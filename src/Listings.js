import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styled, {createGlobalStyle} from 'styled-components';
import {BurstSale, BurstNew} from '@styled-icons/foundation'

import {Handshake, CommentsDollar, HandHoldingUsd} from '@styled-icons/fa-solid'
// import BadgeDollar from '@styled-icons/boxicon-solid'
// import CommentsDollar from '@styled-icons/fa-solid'

// @styled-icons/fa-solid/Handshake
// @styled-icons/fa-solid/CommentsDollar
// @styled-icons/boxicons-solid/BadgeDollar
//

// const GlobalStyle = createGlobalStyle`
// font-family: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif'
// `

const DealIcon = styled(CommentsDollar)`
height: 2rem;
width: 2rem;

`

const HandshakeIcon = styled(Handshake)`
height: 2rem;
width: 2rem;

`

const SaleIcon = styled(BurstSale)`
height: 2rem;
width: 2rem;

`

const MultiplePrice = styled.div`
border: 1px solid black;
padding: 0.5em;
`

const GreyStyle = styled.div`
color: #848a93;
`


const NewIcon = styled(BurstNew)`
  color: green;
`

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
  color: ${props => props.color || "#FFF"};
`;

export const RowEven = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #FFF;
  font-family: 'Helvetica';
  font-size: 1.2em;
  font-weight: bold;
  color: ${props => props.color || "#000"};
  &:hover {border: 2px solid #005a87; };
`;

export const RowOdd = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #E8E8E8;
  font-family: 'Helvetica';
  font-size: 1.2em;
  font-weight: bold;
  color: ${props => props.color || "#000"};
  &:hover {border: 2px solid #005a87; };
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

export const ColColored = styled.div`
flex: ${(props) => props.size};
${(props) => props.collapse && media[props.collapse](`display: none;`)};
color: ${props => props.color || "#000"};
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


  const BusinessHeadings = () => {

    return (<>
      <Col size={7}>Listing Number</Col>
      <Col size={7}>Niche</Col>
      <Col size={7}>Monetization</Col>
      <Col size={7}>Price</Col>
      <Col size={7}>Monthly Net Profit</Col>
      <Col size={7}>Multiple</Col>
      <Col size={7}>Listing Status</Col>
    </>)
  }

  const BusinessListingRow = ({listing}) => {

    return (<>
    <ColColored size={7} color={listing.listing_status.toLowerCase() === "new listing"? "#f5a622": listing.listing_status.toLowerCase() !== "sold"? "#005a87": "#848a93"}>#{listing.listing_number}</ColColored>
    <Col size={7}>{listing.niches[0].niche}</Col>
    <Col size={7}>{listing.monetizations[0].monetization}</Col>
    <ColColored size={7} color={listing.listing_status.toLowerCase() === "new listing"? "#f5a622": listing.listing_status.toLowerCase() !== "sold"? "#005a87": "#848a93"}>{currencyFormatter.format(listing.listing_price)}</ColColored>
    <Col size={7}>{currencyFormatter.format(listing.average_monthly_net_profit)}</Col>
    <Col size={7}><MultiplePrice>{listing.listing_multiple}x</MultiplePrice></Col>
    <Col size={7}>{
    listing.listing_status.toLowerCase() === "new listing" ? <><NewIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "for sale" ? <><SaleIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "pending sold" ? <><DealIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "sold" ? <><HandshakeIcon /> {listing.listing_status} </> :
    <>{listing.listing_status}</>
    }</Col>
    </>)
  }



  const ListingsDisplay = ({listings}) => (



    <>
    <Grid>
      <RowHeadings>
        <BusinessHeadings />
      </RowHeadings>
      {listings.length > 0 ? listings.map((listing, index) => {

         {return index % 2 === 0 ?
          <RowEven color={listing.listing_status.toLowerCase() === 'sold' ? "#848a93": "#000"}>
              <BusinessListingRow listing={listing} />
            </RowEven>

          : <RowOdd color={listing.listing_status.toLowerCase() === 'sold' ? "#848a93": "#000"}>
          <BusinessListingRow listing={listing} />
          </RowOdd>
          }
        }):
      <RowEven>
        <BusinessHeadings />
      </RowEven>
      }
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
