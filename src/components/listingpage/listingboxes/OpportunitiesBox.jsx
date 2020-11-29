import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ListStyle } from '../templates/ListStyles.js';

const OpportunitiesBoxLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
  border-right: 1px solid #000;
`;

export default function OpportunitiesBox({ listing }) {
  return (
    <OpportunitiesBoxLayout>
      <h2>Opportunities</h2>
      <ListStyle>
        {listing.opportunities.map((opp) => {
          return <li key={opp}>{opp}</li>;
        })}
      </ListStyle>
    </OpportunitiesBoxLayout>
  );
}

OpportunitiesBox.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
