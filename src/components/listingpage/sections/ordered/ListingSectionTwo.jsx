import React from 'react';
import styled from 'styled-components';

import currencyFormatter from '../../../../functions/convertCurrency';

import ListingSummary from '../specific/ListingSummary.jsx';

import ListingSectionTemplate from '../../templates/ListingSectionTemplate';

export default function ListingSectionTwo({ listing }) {
  return (
    <ListingSectionTemplate gridrowstart={4} gridrowend={4}>
      <ListingSummary listing={listing} />
    </ListingSectionTemplate>
  );
}
