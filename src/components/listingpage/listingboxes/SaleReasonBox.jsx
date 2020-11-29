import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SaleReasonBoxLayout = styled.div`
  grid-column-start: 3;
  grid-column-end: span 2;
`;

export default function SaleReasonBox({ listing }) {
  return (
    <SaleReasonBoxLayout>
      <h2>Reason for Sale</h2>
      <p key={listing.reason_for_sale}>{listing.reason_for_sale}</p>
    </SaleReasonBoxLayout>
  );
}

SaleReasonBox.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
