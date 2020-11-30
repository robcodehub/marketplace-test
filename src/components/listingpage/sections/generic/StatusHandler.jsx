import React from 'react';
import PropTypes from 'prop-types';

import { NewIcon, DealIcon, SaleIcon, HandshakeIcon } from '../../../icons/Icons.jsx';

const StatusAndIcon = ({ listingStatus }) => {
  switch (listingStatus.toLowerCase()) {
    case 'new listing':
      return (
        <>
          <NewIcon /> {listingStatus}{' '}
        </>
      );
    case 'for sale':
      return (
        <>
          <SaleIcon /> {listingStatus}{' '}
        </>
      );
    case 'pending sold':
      return (
        <>
          <DealIcon /> {listingStatus}{' '}
        </>
      );
    case 'sold':
      return (
        <>
          <HandshakeIcon /> {listingStatus}{' '}
        </>
      );

    default:
      return <>{listingStatus}</>;
  }
};

StatusAndIcon.propTypes = {
  listingStatus: PropTypes.string.isRequired,
};

export default StatusAndIcon;
