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
        <li>Work Required Per Week: {listing.hours_worked_per_week} Hours</li>
        <li>Private Blog Network(PBN): {listing.uses_pbn ? 'Yes' : 'No'}</li>
        <li>
          Domain Type:{' '}
          {listing.sites.map((site) => {
            return <>.{site.domain_type}</>;
          })}
        </li>

        <li>
          Platform:{' '}
          {listing.sites.map((site) => {
            return <>{site.platform}</>;
          })}
        </li>
      </ListStyle>
    </OtherInfoBoxLayout>
  );
}

OtherInfoBox.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
