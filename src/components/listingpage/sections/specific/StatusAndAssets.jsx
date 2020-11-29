import React from 'react';
import styled from 'styled-components';

import {
  NewIcon,
  TrademarkIcon,
  DealIcon,
  SaleIcon,
  HandshakeIcon,
  RightArrowIcon,
} from '../../../icons/Icons.jsx';

import currencyFormatter from '../../../../functions/convertCurrency';

import { ListStyle } from '../../templates/ListStyles.js';

const StatusAndAssetsStyles = styled.div`
  grid-column-start: 3;
  grid-column-end: span 2;
  border-left: 1px solid #000;
`;

export default function StatusAndAssets({ listing }) {
  return (
    <StatusAndAssetsStyles>
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
    </StatusAndAssetsStyles>
  );
}
