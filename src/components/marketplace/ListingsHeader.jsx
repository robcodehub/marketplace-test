import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import {
  NewListingsContext,
  AllListingsContext,
  SortListingOrderContext,
  SortListingTypeContext,
} from '../../context/ListingsContext.jsx';

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
  const [allListings, setAllListings] = useContext(AllListingsContext);

  const [ascOrDesc, setAscOrDesc] = useContext(SortListingOrderContext);

  const [currentSortType, setCurrentSortType] = useContext(SortListingTypeContext);

  const sortListings = (orderByType) => {
    setCurrentSortType(orderByType);
    console.log(
      `On Click Running with ${orderByType} and ${ascOrDesc}. currentSortType = ${currentSortType}`
    );

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.empireflippers.com/api/v1/listings/list?sort=${orderByType}&order=${ascOrDesc}`
      )
      .then((response) => {
        setAllListings([...response.data.data.listings]);

        if (ascOrDesc === 'asc') {
          setAscOrDesc('desc');
        } else {
          setAscOrDesc('asc');
        }
      });
  };

  return (
    <>
      <Col color="#fff" size={7} onClick={() => sortListings('listing_number')}>
        Listing Number
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('max_niche')}>
        Niche
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('max_monetization')}>
        Monetization
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('listing_price')}>
        Price
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('average_monthly_net_profit')}>
        Monthly Net Profit
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('listing_multiple')}>
        Multiple
      </Col>
      <Col color="#fff" size={7} onClick={() => sortListings('listing_status')}>
        Listing Status
      </Col>
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
