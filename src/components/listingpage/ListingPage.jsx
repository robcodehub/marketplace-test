import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import axios from 'axios';

import BusinessDetails from './ListingPageLayout.jsx';

const ListingPage = () => {
  const [businessListings, setBusinessListings] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    axios.get(`/api/listing/${id}`).then((response) => {
      setBusinessListings([...response.data.data.listings]);
    });
  }, []);

  return (
    <div key="businesslistings">
      <BusinessDetails listings={businessListings} />
    </div>
  );
};

export default ListingPage;
