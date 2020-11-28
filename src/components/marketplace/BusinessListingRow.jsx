import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import { DealIcon, SaleIcon, HandshakeIcon, NewIcon } from '../icons/Icons.jsx';

import currencyFormatter from '../../functions/convertCurrency';

import ListingsHeader, { Col } from './ListingsHeader.jsx';

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
  return (
    <>
      <Col
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
      </Col>
      <Col size={7}>{listing.niches.length === 0 ? 'General' : listing.niches[0].niche}</Col>
      <Col size={7}>
        {listing.monetizations.length === 0 ? 'Mixed' : listing.monetizations[0].monetization}
      </Col>
      <Col
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
      </Col>
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

export default BusinessListingRow;
