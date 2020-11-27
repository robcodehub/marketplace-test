import React, { useState, useEffect, useContext } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ListingsHome } from './components/marketplace/Listings.jsx';
import { NewListings } from './components/newlistings/NewListings.jsx';
import ListingPage from './components/listingpage/ListingPage.jsx';

import NavBar from './components/navbar/NavBar.jsx';

import { NewListingsContext, AllListingsContext } from './context/ListingsContext.jsx';

const AppDiv = styled.div`
  text-align: center;
`;

function App() {
  const [allNewListings, setAllNewListings] = useContext(NewListingsContext);

  const [allListings, setAllListings] = useContext(AllListingsContext);

  useEffect(() => {
    if (allNewListings[0] === 'loading' || undefined) {
      axios
        .get(
          'https://cors-anywhere.herokuapp.com/https://us-central1-marketplace-test-6a376.cloudfunctions.net/efNewListings'
        )
        .then((response) => {
          setAllNewListings([...response.data.data.listings]);
        });
    }
  }, [setAllNewListings]);

  return (
    <AppDiv>
      <Router>
        <NavBar />
        {/* <ListingsContext.Provider value={(allListings, setAllListings)}>
          <NewListingsContext.Provider value={(newListingsUpdate, setNewListingsUpdate)}> */}
        <Switch>
          <Route path="/listing/:id" component={ListingPage} />
          <Route path="/newlistings" component={NewListings} />
          <Route path="/" component={ListingsHome} />
        </Switch>
        {/* </NewListingsContext.Provider>
        </ListingsContext.Provider> */}
      </Router>
    </AppDiv>
  );
}

export default App;
