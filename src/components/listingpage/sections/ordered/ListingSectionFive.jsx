import React from 'react';
import PropTypes from 'prop-types';

import SellerSupportBox from '../../listingboxes/SellerSupportBox.jsx';
import SaleReasonBox from '../../listingboxes/SaleReasonBox.jsx';

import ListingSectionTemplate from '../../templates/ListingSectionTemplate';

export default function ListingSectionFive({ listing }) {
  return (
    <ListingSectionTemplate gridrowstart={7} gridrowend={7}>
      <SellerSupportBox listing={listing} />
      <SaleReasonBox listing={listing} />
    </ListingSectionTemplate>
  );
}

ListingSectionFive.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
