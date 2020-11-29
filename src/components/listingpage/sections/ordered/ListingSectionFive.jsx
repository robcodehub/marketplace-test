import React from 'react';
import styled from 'styled-components';

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
