import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import currencyFormatter from '../../../../functions/convertCurrency';

const ListNumRevAndRangeStyles = styled.div`
  grid-column-start: 1;
  grid-column-end: span 1;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
`;

export default function ListNumRevAndRange({ listing }) {
  return (
    <ListNumRevAndRangeStyles>
      <h2> #{listing.listing_number}</h2>
      <p>Listing Number</p>
      <h2> {currencyFormatter.format(listing.average_monthly_gross_revenue)}</h2>
      <p>Monthly Revenue</p>
      <h2> {listing.pricing_period_months} Months</h2>
      <p>Pricing Period</p>
    </ListNumRevAndRangeStyles>
  );
}

ListNumRevAndRange.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
