import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ListStyle } from '../templates/ListStyles.js';

const OtherInfoBoxLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
  border-right: 1px solid #000;
`;

export default function OtherInfoBox({ listing }) {
  return (
    <OtherInfoBoxLayout>
      <h2>Other Information</h2>
      <ListStyle>
        <li key="workrequired">Work Required Per Week: {listing.hours_worked_per_week} Hours</li>
        <li key="pbn">Private Blog Network(PBN): {listing.uses_pbn ? 'Yes' : 'No'}</li>
        <li key="domain">
          Main Domain Type: {`.${listing.sites[0].domain_type}` || 'See Description'}
        </li>

        <li key="platform">
          Main Platform: {listing.sites[0].platform || 'See Listing Description'}
        </li>
      </ListStyle>
    </OtherInfoBoxLayout>
  );
}

OtherInfoBox.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
