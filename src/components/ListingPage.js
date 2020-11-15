import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

import axios from 'axios';

import styled, {createGlobalStyle} from 'styled-components';
import {BurstSale, BurstNew} from '@styled-icons/foundation'

import {Handshake, CommentsDollar, HandHoldingUsd} from '@styled-icons/fa-solid'
import { ListingsHome } from '../Listings';
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
  margin-bottom: 1rem;
  margin-top: 1.9rem;
  background-color: #3c79cb;
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

export const ListingPage = () => {
  const [businessListings, setBusinessListings] = useState([]);

  let {id} = useParams();
  useEffect(() => {



    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.empireflippers.com/api/v1/listings/list?listing_number=${id}`
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




  const BusinessDetails = ({listings}) => {

    if(listings.length !== 0) {

      const listing = listings[0];

      return (

        <>
        <h1>Listing #{listing.listing_number}</h1>
        <h2>Status: {
        listing.listing_status.toLowerCase() === "new listing" ? <><NewIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "for sale" ? <><SaleIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "pending sold" ? <><DealIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "sold" ? <><HandshakeIcon /> {listing.listing_status} </> :
        <>{listing.listing_status}</>} </h2>

        <h2>Niche: {listing.niches[0].niche}</h2>
        <h3>Monetization: {listing.monetizations[0].monetization}</h3>
        <h3>List Price: {currencyFormatter.format(listing.listing_price)}</h3>
        <h3>{currencyFormatter.format(listing.average_monthly_net_profit)}</h3>
          <h3>{listing.listing_multiple}x</h3>
          <h3>Listing Summary</h3>
        <p>{listing.summary}</p>
        </>

      ) } else {
        return (
          <>
            <h2> Loading business listing....</h2>
          </>
        )
      }
}

  return (
    <div>
      <BusinessDetails listings={businessListings} />
    </div>
  );
};
