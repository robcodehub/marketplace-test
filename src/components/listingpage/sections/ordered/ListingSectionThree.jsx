import React from 'react';
import styled from 'styled-components';

import OpportunitiesBox from '../../listingboxes/OpportunitiesBox.jsx';
import RisksBox from '../../listingboxes/RisksBox.jsx';

import ListingSectionTemplate from '../../templates/ListingSectionTemplate';

export default function ListingSectionThree({ listing }) {
  return (
    <ListingSectionTemplate gridrowstart={5} gridrowend={5}>
      <OpportunitiesBox listing={listing} />
      <RisksBox listing={listing} />
    </ListingSectionTemplate>
  );
}
