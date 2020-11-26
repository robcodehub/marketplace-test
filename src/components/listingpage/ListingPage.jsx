import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';

import styled from 'styled-components';

import ListingHeader from './ListingHeader.jsx';
import UnlockListing from './UnlockListing.jsx';
import ListingSummary from './ListingSummary.jsx';

// Individual Page Sections
import ListingSectionOne from './sections/ListingSectionOne.jsx';
import ListingSectionTwo from './sections/ListingSectionTwo.jsx';
import ListingSectionThree from './sections/ListingSectionThree.jsx';
import ListingSectionFour from './sections/ListingSectionFour.jsx';
import ListingSectionFive from './sections/ListingSectionFive.jsx';
import ListingSectionSix from './sections/ListingSectionSix.jsx';
import FaqSection from './sections/FaqSection.jsx';

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(5%, auto);
  margin-top: 5rem;
`;

const ListingPage = () => {
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
            <ListingSectionOne listing={listing} />
            <ListingSectionTwo listing={listing} />
            <ListingSectionThree listing={listing} />
            <ListingSectionFour listing={listing} />
            <ListingSectionFive listing={listing} />
            <ListingSectionSix listing={listing} />
            <FaqSection />
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

export default ListingPage;
