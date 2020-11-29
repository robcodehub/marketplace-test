import React from 'react';
import styled from 'styled-components';

import OtherInfoBox from '../../listingboxes/OtherInfoBox.jsx';
import BuyerProfileBox from '../../listingboxes/BuyerProfileBox.jsx';

import ListingSectionTemplate from '../../templates/ListingSectionTemplate';

export default function ListingSectionSix({ listing }) {
  return (
    <ListingSectionTemplate gridrowstart={8} gridrowend={8}>
      <OtherInfoBox listing={listing} />
      <BuyerProfileBox listing={listing} />
    </ListingSectionTemplate>
  );
}
