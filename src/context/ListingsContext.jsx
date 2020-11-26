import React, { useContext, useState, createContext } from 'react';

export const NewListingsContext = createContext(null);

const { Provider } = NewListingsContext;

export const NewListingsProvider = ({ children }) => {
  const [allNewListings, setAllNewListings] = useState(['loading']);

  return <Provider value={[allNewListings, setAllNewListings]}>{children}</Provider>;
};

NewListingsProvider.context = NewListingsContext;

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
