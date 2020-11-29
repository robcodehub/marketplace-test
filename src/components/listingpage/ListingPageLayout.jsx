import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import ListingHeader from './sections/specific/ListingHeader.jsx';
import UnlockListing from './sections/specific/UnlockListing.jsx';

// Individual Page Sections
import ListingSectionOne from './sections/ordered/ListingSectionOne.jsx';
import ListingSectionTwo from './sections/ordered/ListingSectionTwo.jsx';
import ListingSectionThree from './sections/ordered/ListingSectionThree.jsx';
import ListingSectionFour from './sections/ordered/ListingSectionFour.jsx';
import ListingSectionFive from './sections/ordered/ListingSectionFive.jsx';
import ListingSectionSix from './sections/ordered/ListingSectionSix.jsx';
import FaqSection from './sections/specific/FaqSection.jsx';

const LayoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(5%, auto);
  margin-top: 5rem;
`;

const BusinessDetails = ({ listings }) => {
  if (listings.length !== 0 && listings.length !== undefined) {
    const listing = listings[0];
    return (
      <>
        <LayoutGrid>
          <ListingHeader listing={listing} key="listingheader" />
          <UnlockListing key="unlock" />
          <ListingSectionOne listing={listing} key="sectionone" />
          <ListingSectionTwo listing={listing} key="sectiontwo" />
          <ListingSectionThree listing={listing} key="sectionthree" />
          <ListingSectionFour listing={listing} key="sectionfour" />
          <ListingSectionFive listing={listing} key="sectionfive" />
          <ListingSectionSix listing={listing} key="sectionsix" />
          <FaqSection key="faq" />
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

BusinessDetails.propTypes = {
  listings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default BusinessDetails;
