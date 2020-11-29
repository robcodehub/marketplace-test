import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SellerSupportBoxLayout = styled.div`
  grid-column-start: 1;
  grid-column-end: span 2;
  border-right: 1px solid #000;
`;

export default function SellerSupportBox({ listing }) {
  return (
    <SellerSupportBoxLayout>
      <h2>Seller Support</h2>
      <p>{listing.seller_support}</p>
    </SellerSupportBoxLayout>
  );
}

SellerSupportBox.propTypes = {
  listing: PropTypes.objectOf(PropTypes.any).isRequired,
};
