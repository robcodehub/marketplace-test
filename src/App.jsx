import React, { useState, useEffect } from 'react';

import axios from 'axios';

import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ListingsHome } from './components/marketplace/Listings.jsx';
import { NewListings } from './components/newlistings/NewListings.jsx';
import ListingPage from './components/listingpage/ListingPage.jsx';

import NavBar from './components/navbar/NavBar.jsx';

import { ListingsContext } from './context/ListingsContext';

const AppDiv = styled.div`
  text-align: center;
`;

function App() {
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://cors-anywhere.herokuapp.com/https://us-central1-marketplace-test-6a376.cloudfunctions.net/efMarketplaceTest'
      )
      .then((response) => {
        setAllListings([...response.data.data.listings]);
      });
  }, []);

  return (
    <AppDiv>
      <Router>
        <NavBar />
        <ListingsContext.Provider value={{ allListings, setAllListings }}>
          <Switch>
            <Route path="/listing/:id" component={ListingPage} />
            <Route path="/newlistings" component={NewListings} />
            <Route path="/" component={ListingsHome} />
          </Switch>
        </ListingsContext.Provider>
      </Router>
    </AppDiv>
  );
}

export default App;
