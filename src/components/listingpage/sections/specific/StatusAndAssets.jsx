import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TrademarkIcon } from '../../../icons/Icons.jsx';

import StatusAndIcon from '../generic/StatusHandler.jsx';

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
        Status: <StatusAndIcon listingStatus={listing.listing_status.toLowerCase() || ''} />
      </h2>
      <h2>Business Created</h2>
      <h3>{listing.business_created_at}</h3>
      <h2>Assets Included in the Sale</h2>
      <ListStyle>
        {listing.assets_included.map((asset) => {
          return <li key={asset}>{asset}</li>;
        })}
      </ListStyle>
      {listing.has_trademark ? <TrademarkIcon /> : <></>}
    </StatusAndAssetsStyles>
  );
}

StatusAndAssets.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
