import React from 'react';
import PropTypes from 'prop-types';

import ListNumRevAndRange from '../specific/ListNumRevAndRange.jsx';
import ValuationProfitMultiple from '../specific/ValuationProfitMultiple.jsx';
import StatusAndAssets from '../specific/StatusAndAssets.jsx';

import ListingSectionTemplate from '../../templates/ListingSectionTemplate';

export default function ListingSectionOne({ listing }) {
  return (
    <ListingSectionTemplate gridrowstart={3} gridrowend={3}>
      <ListNumRevAndRange listing={listing} />
      <ValuationProfitMultiple listing={listing} />
      <StatusAndAssets listing={listing} />
    </ListingSectionTemplate>
  );
}

ListingSectionOne.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
