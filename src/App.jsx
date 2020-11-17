import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import { ListingsHome } from './Listings.jsx';
import { NewListings } from './components/NewListings.jsx';
import { ListingPage } from './components/listingpage/ListingPage.jsx';

import NavBar from './components/navbar/NavBar.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route path="/listing/:id" component={ListingPage} />
          <Route path="/newlistings" component={NewListings} />
          <Route path="/" component={ListingsHome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
