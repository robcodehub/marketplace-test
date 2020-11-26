import React from 'react';
import styled from 'styled-components';

const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
      ${styles}
  }
  `,
};

export const Col = styled.div`
  flex: ${(props) => props.size};
  ${(props) => props.collapse && media[props.collapse](`display: none;`)};
  color: ${(props) => props.color || '#000'};

  a {
    color: ${(props) => props.color || '#000'};
    text-decoration: none;
  }
`;

const BusinessHeadings = () => {
  return (
    <>
      <Col size={7}>Listing Number</Col>
      <Col size={7}>Niche</Col>
      <Col size={7}>Monetization</Col>
      <Col size={7}>Price</Col>
      <Col size={7}>Monthly Net Profit</Col>
      <Col size={7}>Multiple</Col>
      <Col size={7}>Listing Status</Col>
    </>
  );
};

export const Grid = styled.div`
  font-family: 'Helvetica';
`;

export const RowHeadings = styled.div`
  display: flex;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-top: 1.9rem;
  background-color: #3c79cb;
  font-family: 'Helvetica';
  font-size: 1.2em;
  font-weight: bold;
  color: ${(props) => props.color || '#fff'};
`;

const ListingsHeader = () => {
  return (
    <div>
      <RowHeadings>
        <BusinessHeadings />
      </RowHeadings>
    </div>
  );
};

export default ListingsHeader;
