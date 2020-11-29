import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ListStyle } from '../templates/ListStyles.js';

const BuyerProfileBoxLayout = styled.div`
  grid-column-start: 3;
  grid-column-end: span 2;
`;

export default function BuyerProfileBox({ listing }) {
  return (
    <BuyerProfileBoxLayout>
      <h2>Buyer Profiles</h2>
      <ListStyle>
        {listing.buyer_profiles.map((profile) => {
          return <li key={profile}>{profile}</li>;
        })}
      </ListStyle>
    </BuyerProfileBoxLayout>
  );
}

BuyerProfileBox.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
