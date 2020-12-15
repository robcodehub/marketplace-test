// React and React Router
import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Axios and Styled Components
import axios from 'axios';
import styled from 'styled-components';

// New Listings Context
import { NewListingsContext } from './context/ListingsContext.jsx';

// Top menu NavBar component
import NavBar from './components/navbar/NavBar.jsx';

// Components for React Router
import { ListingsHome } from './components/marketplace/Listings.jsx';
import { NewListings } from './components/newlistings/NewListings.jsx';
import ListingPage from './components/listingpage/ListingPage.jsx';

// Styled Components div for main App
const AppDiv = styled.div`
  text-align: center;
`;

function App() {
  // New Listings preloading
  // Loading new listings on app load to improve speed of rendering new listings component
  // The assumption is that a lot of buyers are interested in new listings
  // This is not required and the new listings component will still work without the below code
  const [allNewListings, setAllNewListings] = useContext(NewListingsContext);

  useEffect(() => {
    if (
      allNewListings === undefined ||
      allNewListings[0].listing_status === 'loading' ||
      allNewListings[0] === undefined
    ) {
      axios.get('/api/newlistings').then((response) => {
        setAllNewListings([...response.data.data.listings]);
      });
    }
  }, [allNewListings, setAllNewListings]);

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
