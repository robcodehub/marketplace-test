import React from 'react';
import styled from 'styled-components';

import currencyFormatter from '../../../functions/convertCurrency';

const LeftColumnLeftStyles = styled.div`
  /* grid-row-start: 3;
  grid-row-end: 3; */
  grid-column-start: 1;
  grid-column-end: span 1;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
`;

export default function LeftColumnLeft({ listing }) {
  return (
    <LeftColumnLeftStyles>
      <h2> #{listing.listing_number}</h2>
      <p>Listing Number</p>
      <h2> {currencyFormatter.format(listing.average_monthly_gross_revenue)}</h2>
      <p>Monthly Revenue</p>
      <h2> {listing.pricing_period_months} Months</h2>
      <p>Pricing Period</p>
    </LeftColumnLeftStyles>
  );
}
