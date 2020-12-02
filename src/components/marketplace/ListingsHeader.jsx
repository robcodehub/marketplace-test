import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';

import { SortUpIcon, SortDownIcon } from '../icons/Icons.jsx';

import {
  AllListingsContext,
  SortListingOrderContext,
  SortListingTypeContext,
  SortedListingStoreContext,
} from '../../context/ListingsContext.jsx';

import Col from './templates/ColTemplate';

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
  color: ${(props) => props.color || '#fff'};
`;

const BusinessHeadings = ({ setSortingInProgress }) => {
  // eslint-disable-next-line no-unused-vars
  const [allListings, setAllListings] = useContext(AllListingsContext);

  const [ascOrDesc, setAscOrDesc] = useContext(SortListingOrderContext);

  const [currentSortType, setCurrentSortType] = useContext(SortListingTypeContext);

  const [sortedListings, setSortedListings] = useContext(SortedListingStoreContext);

  const sortListings = (orderByType) => {
    // Set sorting in progress to true to notify user listings are being sorted
    setSortingInProgress(true);

    setCurrentSortType(orderByType);

    // Sort order saved in context to reduce network requests
    // Load time also improved providing a better user experience
    // Sorted listings are stored in an object allowing retrieve listing data in constant time
    // This is significantly faster than a new network request to the server each time
    if (sortedListings[`${orderByType}${ascOrDesc}`]) {
      setAllListings([...sortedListings[`${orderByType}${ascOrDesc}`]]);

      // Set sorting in progress to false to remove notification to user
      setSortingInProgress(false);
    } else {
      axios.get(`/api/listings/${orderByType}/${ascOrDesc}`).then((response) => {
        setAllListings([...response.data.data.listings]);

        // Add a key value pair to sorted listing context
        // The key is the order type + asc or desc order
        // eg. listing_price + ascending order = listing_priceasc
        // The value stored is the sorted listings response from the server
        setSortedListings({
          ...sortedListings,
          [`${orderByType}${ascOrDesc}`]: [...response.data.data.listings],
        });
        // Set sorting in progress to false to remove notification to user
        setSortingInProgress(false);
      });
    }

    if (ascOrDesc === 'asc') {
      setAscOrDesc('desc');
    } else {
      setAscOrDesc('asc');
    }
  };

  const CurrentSortIcon = () => {
    if (ascOrDesc === 'asc') {
      return <SortUpIcon />;
    }

    return <SortDownIcon />;
  };

  return (
    <>
      <Col color="#fff" size={7} onClick={() => sortListings('listing_number')}>
        {currentSortType === 'listing_number' ? <CurrentSortIcon /> : null}
        Listing Number
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('max_niche')}>
        {currentSortType === 'max_niche' ? <CurrentSortIcon /> : null}
        Niche
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('max_monetization')}>
        {currentSortType === 'max_monetization' ? <CurrentSortIcon /> : null}
        Monetization
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('listing_price')}>
        {currentSortType === 'listing_price' ? <CurrentSortIcon /> : null}
        Price
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('average_monthly_net_profit')}>
        {currentSortType === 'average_monthly_net_profit' ? <CurrentSortIcon /> : null}
        Monthly Net Profit
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('listing_multiple')}>
        {currentSortType === 'listing_multiple' ? <CurrentSortIcon /> : null}
        Multiple
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('listing_status')}>
        {currentSortType === 'listing_status' ? <CurrentSortIcon /> : null}
        Listing Status
      </Col>
    </>
  );
};

const ListingsHeader = () => {
  // Notification to user that listings are being sorted
  // Current listings still displayed to user while sorting
  const [sortingInProgress, setSortingInProgress] = useState(false);
  return (
    <div key="headerlist" id="business-headings">
      <RowHeadings>
        <BusinessHeadings setSortingInProgress={setSortingInProgress} />
      </RowHeadings>
      {sortingInProgress ? <h2>Sorting Listings....</h2> : null}
    </div>
  );
};

BusinessHeadings.propTypes = {
  setSortingInProgress: PropTypes.func.isRequired,
};

export default ListingsHeader;
