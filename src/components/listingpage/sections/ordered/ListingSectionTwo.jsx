import React from 'react';
import PropTypes from 'prop-types';

import ListingSummary from '../specific/ListingSummary.jsx';

import ListingSectionTemplate from '../../templates/ListingSectionTemplate';

export default function ListingSectionTwo({ listing }) {
  return (
    <ListingSectionTemplate gridrowstart={4} gridrowend={4}>
      <ListingSummary listing={listing} />
    </ListingSectionTemplate>
  );
}

ListingSectionTwo.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
