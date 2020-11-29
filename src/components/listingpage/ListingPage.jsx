import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import BusinessDetails from './ListingPageLayout.jsx';

const ListingPage = () => {
  const [businessListings, setBusinessListings] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.empireflippers.com/api/v1/listings/list?listing_number=${id}`
      )
      .then((response) => {
        setBusinessListings([...response.data.data.listings]);
      });
  }, []);

  return (
    <div>
      <div>
        <BusinessDetails listings={businessListings} />
      </div>
    </div>
  );
};

export default ListingPage;
