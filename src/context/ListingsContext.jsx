import React, { useContext, useState, createContext } from 'react';

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
    <AllListingsContext.Provider value={[allNewListings, setAllNewListings]}>
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

ListingsContextProvider.context = ListingsContextProvider;

// export function useListings() {
//   return useContext(ListingsContext);
// }

// export function useNewListings() {
//   return useContext(NewListingContext);
// }

// export function ThemeProvider({ children }) {
//   const [allListings, setAllListings] = useState([]);

//   const [newListings, setNewListings] = useState([]);

//   return (
//     <ListingsContext.Provider value={{ allListings, setAllListings }}>
//       <NewListingContext.Provider value={{ newListings, setNewListings }}>
//         {children}
//       </NewListingContext.Provider>
//     </ListingsContext.Provider>
//   );
// }
