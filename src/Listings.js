import React, { useState, useEffect } from 'react';

import axios from 'axios';

export const ListingsHome = () => {
  let [businessListings, setBusinessListings] = useState([]);


  useEffect(() => {

    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://api.empireflippers.com/api/v1/listings/list'
      )
      .then((response) => {

         setBusinessListings([...response.data.data.listings]);
      })

  });


  const ListingsDisplay = ({listings}) => (
    <>
      {listings.length > 0 ? listings.map(listing => (
        <div className="business-listings" key={listing.id}>Listing Number:{listing.listing_number}</div>
      )): <p>No listings available</p>}
    </>
  );

  return (
    <div>
      Listing Home
      <ListingsDisplay listings={businessListings} />
    </div>
  );
};
