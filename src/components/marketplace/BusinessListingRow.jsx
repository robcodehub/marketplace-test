import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import StatusAndIcon from '../listingpage/sections/generic/StatusHandler.jsx';

import Col from './templates/ColTemplate';

import currencyFormatter from '../../functions/convertCurrency';

const MultiplePrice = styled.div`
  border: 1px solid black;
  padding: 0.5em;
`;

export const BusinessRow = styled.div`
  margin-bottom: ${(props) => props.marginbottom || '0'};
  margin-top: ${(props) => props.margintop || '0'};
  display: flex;
  padding: 1rem;
  background-color: ${(props) => props.backgroundcolor || '#fff'};
  font-family: 'Helvetica';
  font-size: 1.2em;
  font-weight: bold;
  color: ${(props) => props.color || '#000'};
  &:hover {
    border: 2px solid #005a87;
  }
`;

const BusinessListingRow = ({ listing }) => {
  let listingColor = '#005a87';
  switch (listing.listing_status.toLowerCase()) {
    case 'new listing':
      listingColor = '#f5a622';
      break;
    case 'sold':
      listingColor = '#848a93';
      break;
    default:
      listingColor = '#005a87';
  }

  return (
    <>
      <Col size={7} color={listingColor}>
        <Link to={`/listing/${listing.listing_number}`}>#{listing.listing_number}</Link>
      </Col>
      <Col size={7}>
        <Link to={`/listing/${listing.listing_number}`}>
          {listing.niches.length === 0 ? 'General' : listing.niches[0].niche}
        </Link>
      </Col>
      <Col size={7}>
        <Link to={`/listing/${listing.listing_number}`}>
          {listing.monetizations.length === 0 ? 'Mixed' : listing.monetizations[0].monetization}{' '}
        </Link>
      </Col>
      <Col size={7} color={listingColor}>
        <Link to={`/listing/${listing.listing_number}`}>
          {currencyFormatter.format(listing.listing_price)}
        </Link>
      </Col>
      <Col size={7}>
        <Link to={`/listing/${listing.listing_number}`}>
          {currencyFormatter.format(listing.average_monthly_net_profit)}
        </Link>
      </Col>
      <Col size={7}>
        <Link to={`/listing/${listing.listing_number}`}>
          <MultiplePrice>{listing.listing_multiple}x</MultiplePrice>
        </Link>
      </Col>
      <Col size={7}>
        <Link to={`/listing/${listing.listing_number}`}>
          <StatusAndIcon listingStatus={listing.listing_status || ''} />
        </Link>
      </Col>
    </>
  );
};

BusinessListingRow.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BusinessListingRow;
