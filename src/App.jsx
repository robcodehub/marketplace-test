import React, { Component } from 'react';

import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ListingsHome } from './components/marketplace/Listings.jsx';
import { NewListings } from './components/newlistings/NewListings.jsx';
import ListingPage from './components/listingpage/ListingPage.jsx';

import NavBar from './components/navbar/NavBar.jsx';

const AppDiv = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppDiv>
      <Router>
        <NavBar />

        <Switch>
          <Route path="/listing/:id" component={ListingPage} />
          <Route path="/newlistings" component={NewListings} />
          <Route path="/" component={ListingsHome} />
        </Switch>
      </Router>
    </AppDiv>
  );
}

export default App;
