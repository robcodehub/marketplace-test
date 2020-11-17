import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import axios from 'axios';

import styled, { createGlobalStyle } from 'styled-components';

import { ButtonTemplate } from './ButtonTemplate';

import { ListingsHome } from '../../Listings.jsx';

import ListingHeader from './ListingHeader.jsx';
import UnlockListing from './UnlockListing.jsx';
import ListingSummary from './ListingSummary.jsx';

// Individual Page Sections
import LeftColumnLeft from './sections/LeftColumnLeft.jsx';
import LeftColumnRight from './sections/LeftColumnRight.jsx';
import RightLayout from './sections/RightLayout.jsx';
import OtherInfoLeft from './sections/OtherInfoLeft.jsx';
import OtherInfoRight from './sections/OtherInfoRight.jsx';

import { OtherInfoSection } from './sections/OtherInfoSection';

import {
  NewIcon,
  TrademarkIcon,
  DealIcon,
  SaleIcon,
  HandshakeIcon,
  RightArrowIcon,
} from './Icons.jsx';

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 15% 12% 20% 20% 5% 5% 5% 5% 15%;
  margin-top: 5rem;
`;

export const MultiplePrice = styled.div`
  border: 1px solid black;
  padding: 0.5em;
`;

export const ListStyle = styled.ul`
  list-style-type: none;
  margin: 0.5rem;
  padding: 0.5rem;
  line-height: 1.6;
`;

export const GreyStyle = styled.div`
  color: #848a93;
`;

const SpanWrapper = styled.div`
  border-top: 1px solid #848a93;
  margin: 2rem;
`;

export const Grid = styled.div`
  font-family: 'Helvetica';
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

export const ListingPage = () => {
  const [businessListings, setBusinessListings] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.empireflippers.com/api/v1/listings/list?listing_number=${id}`
      )
      .then((response) => {
        setBusinessListings([...response.data.data.listings]);
      });
  }, []);

  const BusinessDetails = ({ listings }) => {
    if (listings.length !== 0) {
      const listing = listings[0];

      return (
        <>
          <LayoutGrid>
            <ListingHeader listing={listing} />
            <UnlockListing />
            <LeftColumnLeft listing={listing} />

            <LeftColumnRight listing={listing} />

            <ListingSummary listing={listing} />
            <RightLayout listing={listing} />

            <OtherInfoLeft listing={listing} />

            <OtherInfoRight listing={listing} />

            {/* <OtherInfoSection gridstart={6} gridend={6}>
              <h1>Analytical Data</h1>
              <h3>Powered by ahrefs</h3>
              <ButtonTemplate color="#f5a622">
                Unlock Listing
                <RightArrowIcon />
              </ButtonTemplate>
            </OtherInfoSection>
            <OtherInfoSection gridstart={7} gridend={7}>
              <h1>Frequently Asked Questions</h1>
              <h3>Answered by the Seller</h3>
              <ButtonTemplate color="#f5a622">
                Unlock Listing
                <RightArrowIcon />
              </ButtonTemplate>
            </OtherInfoSection> */}
          </LayoutGrid>
        </>
      );
    }
    return (
      <>
        <h2> Loading business listing.... </h2>
      </>
    );
  };

  return (
    <div>
      <div>
        <BusinessDetails listings={businessListings} />
      </div>
    </div>
  );
};
