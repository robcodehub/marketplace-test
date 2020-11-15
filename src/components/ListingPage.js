import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

import axios from 'axios';

import styled, {createGlobalStyle} from 'styled-components';
import {BurstSale, BurstNew} from '@styled-icons/foundation';

import {Handshake, CommentsDollar, Trademark, HandHoldingUsd} from '@styled-icons/fa-solid';
import {RightArrowAlt} from '@styled-icons/boxicons-regular';

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

const LayoutGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-template-rows: 15% 12% 20% 20% 5% 5% 5% 5% 15%;
margin-top: 5rem;
`

const HeadingLayout = styled.div`
grid-row-start: 1;
grid-row-end: 1;
grid-column-start: 1;
grid-column-end: span 4;
background-color: #3c79cb;
color: #FFF;
`

const UnlockLayout = styled.div`
grid-row-start: 2;
grid-row-end: 2;
grid-column-start: 1;
grid-column-end: span 4;
margin-top: 1rem;
margin-bottom: 1rem;
padding-bottom: 2rem;
border-bottom: 1px solid #848a93;
`

const LeftColumnLeft = styled.div`
grid-row-start: 3;
grid-row-end: 3;
grid-column-start: 1;
grid-column-end: span 1;
margin-top: 1rem;
margin-bottom: 2rem;
padding-bottom: 2rem;
`

const LeftColumnRight = styled.div`
grid-row-start: 3;
grid-row-end: 3;
grid-column-start: 2;
grid-column-end: span 1;
margin-top: 1rem;
margin-bottom: 2rem;
padding-bottom: 2rem;
`

const ListingSummaryLayout = styled.div`
grid-row-start: 4;
grid-row-end: 4;
grid-column-start: 1;
grid-column-end: span 4;
margin-top: 2rem;
margin: 2rem;
padding-top: 2rem;
padding-bottom: 2rem;
`

const RightLayout = styled.div`
grid-row-start: 3;
grid-row-end: 3;
grid-column-start: 3;
grid-column-end: span 2;
`



const OtherInfoSectionOne = styled.div`
grid-row-start: 5;
grid-row-end: 5;
grid-column-start: 1;
grid-column-end: span 4;
margin-top: 2rem;
padding-top: 2rem;
margin-bottom: 2rem;
padding-bottom: 2rem;
border-bottom: 1px solid #848a93;
border-top: 1px solid #848a93;
`

const SpanWrapper = styled.div`
  border-top: 1px solid #848a93;
  margin: 2rem;
`

const OtherInfoLeft = styled.div`
grid-row-start: 5;
grid-row-end: 5;
grid-column-start: 1;
grid-column-end: span 2;
margin-top: 2rem;
padding-top: 2rem;
margin-bottom: 2rem;
padding-bottom: 2rem;
`

const OtherInfoRight = styled.div`
grid-row-start: 5;
grid-row-end: 5;
grid-column-start: 3;
grid-column-end: span 2;
margin-top: 2rem;
padding-top: 2rem;
margin-bottom: 2rem;
padding-bottom: 2rem;
`


const TrademarkIcon = styled(Trademark)`
height: 4rem;
width: 4rem;
color: #3c79cb;
padding: 1rem;
border-radius: 50%;
border: solid 4px #3c79cb;
`


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

const ListStyle = styled.ul`
  list-style-type: none;
  margin: 0.5rem;
  padding: 0.5rem;
  line-height:1.6;
`


const GreyStyle = styled.div`
color: #848a93;
`


const NewIcon = styled(BurstNew)`
  color: green;
`

const RightArrowIcon = styled(RightArrowAlt)`
  color: ${props => props.color || "#FFF"};
  height: 2em;
  width: 2em;
`

export const Grid = styled.div`
font-family: 'Helvetica';
`;

const ButtonTemplate = styled.button`
padding-top: 1rem;
padding-bottom: 1rem;
padding-left: 1.2rem;
padding-right: 1.2rem;
color: #FFF;
font-size: 1em;
background-color: ${props => props.color || "#3c79cb"};
font-weight: bold;
margin-left: 1.5rem;
border: none;
border-radius: 5px;
margin-bottom: 1rem;
`



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

        <LayoutGrid>
        <HeadingLayout>
        <h1>Niche: {listing.niches[0].niche}</h1>
        <h2>Monetization: {listing.monetizations[0].monetization}</h2>
      <h3>Home {'>'} Marketplace {'>'}  {listing.listing_number}</h3>
      </HeadingLayout>
      <UnlockLayout>
      <h3>Unlock a listing for full access to the URL, Google Analytic, Profit and Loss Statement, etc.  <ButtonTemplate>Buy Now <RightArrowIcon /></ButtonTemplate> <ButtonTemplate color={"#f5a622"}>Unlock Listing <RightArrowIcon /></ButtonTemplate>
      </h3>
      </UnlockLayout>

          <LeftColumnLeft>
        <h2> #{listing.listing_number}</h2>
        <p>Listing Number</p>
        <h2> {currencyFormatter.format(listing.average_monthly_gross_revenue)}</h2>
        <p>Monthly Revenue</p>
        <h2> {listing.pricing_period_months} Months</h2>
        <p>Pricing Period</p>

        </LeftColumnLeft>
        <LeftColumnRight>
        <h2>{currencyFormatter.format(listing.listing_price)}</h2>
        <p>List Price</p>
        <h2>{currencyFormatter.format(listing.average_monthly_net_profit)}</h2>
        <p>Monthly Net Profit</p>
          <h2>{listing.listing_multiple}x</h2>
          <p>Multiple</p>
          </LeftColumnRight>
          <ListingSummaryLayout>
          <h2>Listing Summary</h2>
      {listing.summary.split('\n').map(string => <p>{string}</p>) }
        </ListingSummaryLayout>
        <RightLayout>
        <h2>Status: {
        listing.listing_status.toLowerCase() === "new listing" ? <><NewIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "for sale" ? <><SaleIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "pending sold" ? <><DealIcon /> {listing.listing_status} </>: listing.listing_status.toLowerCase() === "sold" ? <><HandshakeIcon /> {listing.listing_status} </> :
        <>{listing.listing_status}</>} </h2>
          <h2>Business Created</h2>
        <h3>{listing.business_created_at}</h3>
        <h2>Assets Included in the Sale</h2>
        <ListStyle>
          {listing.assets_included.map((asset) => {
          return <li>{asset}</li>
          })
          }
          </ListStyle>
          {listing.has_trademark ? <TrademarkIcon />: <></>}
        </RightLayout>

        <OtherInfoLeft>
        <SpanWrapper>
          <h2>Opportunities</h2>
          <ListStyle>
          {listing.opportunities.map((opp) => {
          return <li>{opp}</li>
          })
          }
          </ListStyle>
          </SpanWrapper>
          <SpanWrapper>
        <h2>Work {'&'} Skills Required</h2>
          <ListStyle>
          {listing.work_required.map((skill) => {
          return <li>{skill}</li>
          })
          }
          </ListStyle>
          </SpanWrapper>
          <SpanWrapper>
          <h2>Seller Support</h2>
        <p>{listing.seller_support}</p>
        </SpanWrapper>
        <SpanWrapper>
          <h2>Other Information</h2>
          <ListStyle>


        <li>Work Required Per Week: {listing.hours_worked_per_week} Hours</li>
        <li>Private Blog Network(PBN): {listing.uses_pbn ? "Yes": "No"}</li>
        <li>Domain Type:{' '}
          {listing.sites.map((site) => {
          return <>.{site.domain_type}</>
          })
          }

          </li>
        <li>Platform:{' '}
          {listing.sites.map((site) => {
          return <>{site.platform}</>
          })
          }

        </li>
          </ListStyle>
          </SpanWrapper>
        </OtherInfoLeft>
          <OtherInfoRight>
          <SpanWrapper>
          <h2>Risks</h2>
          <ListStyle>
          {listing.risks.map((risk) => {
          return <li>{risk}</li>
          })
          }
          </ListStyle>
          </SpanWrapper>
          <SpanWrapper>
          <div>
            <h2>Social Media Channels</h2>
            <ButtonTemplate>Unlock Listing<RightArrowIcon /></ButtonTemplate>
          </div>
          </SpanWrapper>
          <SpanWrapper>
          <h2>Reason for Sale</h2>
          <p>{listing.reason_for_sale}</p>
          </SpanWrapper>
          <SpanWrapper>
          <h2>Buyer Profiles</h2>
          <ListStyle>
          {listing.buyer_profiles.map((profile) => {
          return <li>{profile}</li>
          })
          }
          </ListStyle>
          </SpanWrapper>
          </OtherInfoRight>

        </LayoutGrid>
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

      <div>
      <BusinessDetails listings={businessListings} />
      </div>

    </div>
  );
};
