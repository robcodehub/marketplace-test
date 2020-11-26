import React from 'react';
import styled from 'styled-components';

import {
  NewIcon,
  TrademarkIcon,
  DealIcon,
  SaleIcon,
  HandshakeIcon,
  RightArrowIcon,
} from '../../icons/Icons.jsx';

import currencyFormatter from '../../../functions/convertCurrency';

import { ListStyle } from './OtherInfoSection';

const RightLayoutStyles = styled.div`
  /* grid-row-start: 3;
  grid-row-end: 3; */
  grid-column-start: 3;
  grid-column-end: span 2;
`;

export default function RightLayout({ listing }) {
  return (
    <RightLayoutStyles>
      <h2>
        Status:{' '}
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
        )}{' '}
      </h2>
      <h2>Business Created</h2>
      <h3>{listing.business_created_at}</h3>
      <h2>Assets Included in the Sale</h2>
      <ListStyle>
        {listing.assets_included.map((asset) => {
          return <li>{asset}</li>;
        })}
      </ListStyle>
      {listing.has_trademark ? <TrademarkIcon /> : <></>}
    </RightLayoutStyles>
  );
}
