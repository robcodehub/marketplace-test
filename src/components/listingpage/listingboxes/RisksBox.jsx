import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ListStyle } from '../templates/ListStyles.js';

const RisksBoxLayout = styled.div`
  grid-column-start: 3;
  grid-column-end: span 2;
`;

export default function RisksBox({ listing }) {
  return (
    <RisksBoxLayout>
      <h2>Risks</h2>
      <ListStyle>
        {listing.risks.map((risk) => {
          return <li key={risk}>{risk}</li>;
        })}
      </ListStyle>
    </RisksBoxLayout>
  );
}

RisksBox.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
