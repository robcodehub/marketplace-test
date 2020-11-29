import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const AllListingsContext = createContext(null);
export const NewListingsContext = createContext(null);

export const SortListingOrderContext = createContext(null);
export const SortListingTypeContext = createContext(null);

export const ListingsContextProvider = ({ children }) => {
  const [allNewListings, setAllNewListings] = useState(['loading']);
  const [allListings, setAllListings] = useState(['loading']);

  const [ascOrDesc, setAscOrDesc] = useState('asc');
  const [currentSortType, setCurrentSortType] = useState('listing_number');

  return (
    <AllListingsContext.Provider value={[allListings, setAllListings]}>
      <NewListingsContext.Provider value={[allNewListings, setAllNewListings]}>
        <SortListingOrderContext.Provider value={[ascOrDesc, setAscOrDesc]}>
          <SortListingTypeContext.Provider value={[currentSortType, setCurrentSortType]}>
            {children}
          </SortListingTypeContext.Provider>
        </SortListingOrderContext.Provider>
      </NewListingsContext.Provider>
    </AllListingsContext.Provider>
  );
};

ListingsContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

ListingsContextProvider.context = ListingsContextProvider;
